
import {
    FETCH_APPOINTMENTS_BEGIN,
    FETCH_APPOINTMENTS_SUCCESS,
    FETCH_APPOINTMENTS_FAILURE,
    FETCH_DATES_BEGIN,
    POST_APPOINTMENTS_BEGIN,
    POST_APPOINTMENTS_SUCCESS,
    POST_APPOINTMENTS_FAILURE,
    SET_MONTH,
    SET_CALENDAR_VISIBILITY,
    SET_APPOINTMENT_DURATION
} from '../actions/appointments';

const initialState = {
    appointments: [],
    currentMonth: new Date(),
    selectedDate: new Date(),
    loading: false,
    calendarIsVisible: false,
    error: null

};


export default function appointmentReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_APPOINTMENTS_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_APPOINTMENTS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                appointments: action.appointments
            };

        case FETCH_APPOINTMENTS_FAILURE:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            return {
                ...state,
                loading: false,
                error: action.error
            };

        case FETCH_DATES_BEGIN:
            return {
                ...state,
                selectedDate: action.date
            };

        case SET_APPOINTMENT_DURATION:
            return {
                ...state,
                duration: action.duration
            };

        case SET_MONTH:
            return {
                ...state,
                currentMonth: action.month
            };

        case SET_CALENDAR_VISIBILITY:
            return {
                ...state,
                calendarIsVisible: !state.calendarIsVisible
            };

        case POST_APPOINTMENTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case POST_APPOINTMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                appointments: action.newAppointment
            };

        case POST_APPOINTMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.err
            };
        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}