import { API_BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';


export const FETCH_APPOINTMENTS_BEGIN = 'FETCH_APPOINTMENTS_BEGIN';
export const FETCH_APPOINTMENTS_SUCCESS = 'FETCH_APPOINTMENTS_SUCCESS';
export const FETCH_APPOINTMENTS_FAILURE = 'FETCH_APPOINTMENTS_FAILURE';
export const FETCH_DATES_BEGIN = 'FETCH_DATES_BEGIN';
export const POST_APPOINTMENTS_BEGIN = 'POST_APPOINTMENTS_BEGIN';
export const POST_APPOINTMENTS_SUCCESS = 'POST_APPOINTMENTS_SUCCESS';
export const POST_APPOINTMENTS_FAILURE = 'POST_APPOINTMENTS_FAILURE';
export const SET_MONTH = 'SET_MONTH';
export const SET_CALENDAR_VISIBILITY = 'SET_CALENDAR_VISIBILITY';
export const SET_APPOINTMENT_DURATION = 'SET_APPOINTMENT_DURATION';

export const fetchAppointmentsBegin = () => ({
    type: FETCH_APPOINTMENTS_BEGIN
});

export const fetchAppointmentsSuccess = appointments => ({
    type: FETCH_APPOINTMENTS_SUCCESS,
    appointments
});

export const fetchAppointmentsFailure = error => ({
    type: FETCH_APPOINTMENTS_FAILURE,
    error
});

export const fetchDatesBegin = date => ({
    type: FETCH_DATES_BEGIN,
    date
});

export const setAppointmentDuration = duration => {
    return {
        type: SET_APPOINTMENT_DURATION,
        duration
    }
};

export const setCalendarVisibility = () => {
    return {
        type: SET_CALENDAR_VISIBILITY
    }
};

export const setMonth = month => ({
    type: SET_MONTH,
    month
});

export const postAppointmentsBegin = () => ({
    type: POST_APPOINTMENTS_BEGIN
});

export const postAppointmentsSuccess = (newAppointment) => ({
    type: POST_APPOINTMENTS_SUCCESS,
    newAppointment
});

export const postAppointmentsFailure = (err) => ({
    type: POST_APPOINTMENTS_FAILURE,
    err
});

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchAppointments = () => {
    return (dispatch) => {
        dispatch(fetchAppointmentsBegin());
        return fetch(`${API_BASE_URL}api/appointments`)
            .then(handleErrors)
            .then(res => res.json())
            .then(appointments => {
                dispatch(fetchAppointmentsSuccess(appointments));
            })
            .catch(err => dispatch(fetchAppointmentsFailure(err)));
    }
};

export const postAppointments = (values) => {
    return fetch(`${API_BASE_URL}api/appointments`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            console.log(typeof (JSON.stringify(values.date)));
            if (!res.ok) {
                if (
                    res.headers.has('content-type') &&
                    res.headers
                        .get('content-type')
                        .startsWith('application/json')
                ) {
                    // It's a nice JSON error returned by us, so decode it
                    return res.json().then(err => Promise.reject(err));
                }
                // It's a less informative error returned by express
                return Promise.reject({
                    code: res.status,
                    message: res.statusText
                });
            }
            return;
        })
        .then(() => console.log('Submitted with values', values))
        .catch(err => {
            const { reason, message, location } = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
}