import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import dateFns from "date-fns";
import { postAppointments, setCalendarVisibility } from '../../actions/appointments';
import AppInputs from './appInputs';
import Calendar from './calendar';
import ConfirmationPage from './confirmationPage';
import '../../styles/dropDowns.css';


export class AppointmentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addConfirmation: false
        }
    }

    handleSubmit(data) {
        const newData = {
            ...data,
            date: dateFns.format(this.props.date, 'MM/DD/YYYY')
        }
        postAppointments(newData).then(()=>this.props.reset('appointmentForm'));
    }

    handleCalendarToggle(visibility) {
        this.props.dispatch(setCalendarVisibility(visibility));
    }

    render() {
      
        const possible_massages = ['Standard Massage', 'Therapeutic Massage', 'Somatic Coaching'];
        const length_of_time = ['30', '60', '75', '90'];
        const add_ons = ["Hot Stone Massage", "JoJo Acupressure Facial", "Craniosacral Therapy", "Rosehip Acupressure Facial", "Reflexology Foot Treatment", "Sauna"];

        const addOnOptions = add_ons.map((addOn, index) => {
            return (
                <div key={index}>
                    <label>{addOn}</label>
                    <li><Field name={addOn} component="input" type="checkbox" /></li>
                </div>);
        });

        const durationOptions = length_of_time.map((duration) => {
            return <option key={duration} value={duration}>{`${duration} Minutes`}</option>;
        });

        const massageOptions = possible_massages.map(massage => {
            return <option key={massage} value={massage}>{massage}</option>;
        })


        const available = [11, 12, 13, 14, 15]; // figure out morning later. for now using military time

        let slots = new Array(available.length * 4); // 15 minute slots

        this.props.appArray.forEach(app => {
            const start = (app.time - 1) * 4;
            const lengthOfApp = start + app.duration / 15;


            for (let i = start; i <= lengthOfApp - 1; i++) {
                slots[i] = true;
            }
        });

        const options = available.map(time => {
            const index = (time - 1) * 4;

            if (slots[index]) {
                return <option disabled={true} key={time} value={time}>{time + ":00"}</option>
            }

            return <option key={time} value={time}>{time + ":00"}</option>
        });

        const renderSelectedDate = () => {
            return <input id='calendar' disabled={true} value={dateFns.format(this.props.date, 'MM/DD/YYYY')} type="text" onClick={() => {
                this.handleCalendarToggle();
            }} />
        }
        console.log(this.props);
        
        const toggleConfirmation = () => {
            this.setState({addConfirmation: !this.state.addConfirmation})
        }
        console.log(this.state);

        return (
            <div className='input'>
                <form onSubmit={this.props.handleSubmit(data => {
                    this.handleSubmit(data)
                    })
                }
                >
                    <h2><b>Booking Details</b></h2>
                    <div>
                        <label><b>Appointment Date</b></label>
                    </div>
                    <Field
                        name="appointmentDate"
                        placeholder="MM/DD/YYYY"
                        type="text"
                        component={renderSelectedDate}
                    />
                    <button type="button" className='icon' onClick={() => {
                        this.handleCalendarToggle()
                    }}>calendar_today</button>
                    <Calendar />

                    <div>
                        <label><b>First Name</b></label>
                        <div>
                            <Field
                                name="firstName"
                                component={AppInputs}
                                type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <label><b>Last Name</b></label>
                        <div>
                            <Field
                                name="lastName"
                                component={AppInputs}
                                type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <label><b>Email</b></label>
                        <div>
                            <Field
                                name="email"
                                component={AppInputs}
                                type="email"
                            />
                        </div>
                    </div>
                    <div>
                        <label><b>Phone Number</b></label>
                        <div>
                            <Field
                                name="phone"
                                component={AppInputs}
                                type="Phone"
                            />
                        </div>
                    </div>
                        <label htmlFor='sex' style={{position: 'unset'}}><b>Male</b></label>
                                <Field
                                    name="sex"
                                    component={AppInputs}
                                    type="radio"
                                    value="male"
                                    style={{display: 'inline-block'}}
                                     />
                                {' '}
                        
                        <div>
                            <hr></hr>
                        <label htmlFor='sex' style={{position: 'unset'}}><b>Female</b></label>
                                <Field name="sex"
                                    component={AppInputs}
                                    type="radio"
                                    value="female" />
                                {' '}
                        </div>
                        <hr></hr>
                    <div id="dropdown1" className="appointmentTimes">
                        <Field
                            name="time"
                            element="select"
                            component={AppInputs}
                            label={<b>Select Your Appointment Time</b>}
                        >
                            {options}
                        </Field>
                    </div>
                    <hr></hr>
                    <div id="dropdown2" className="appointmentDurations">
                        <Field
                            name="appointmentDuration"
                            element="select"
                            component={AppInputs}
                            label={<b>Select Your Appointment Duration</b>}
                        >
                            {durationOptions}
                        </Field>
                    </div>
                    <hr></hr>
                    <div id="dropdown3" className="typeOfMassage">
                    
                        <Field
                            name="massageType"
                            element="select"
                            component={AppInputs}
                            label={<b>Select The Type Of Massage You Would Like</b>}
                        >
                            {massageOptions}
                        </Field>
                    </div>
                    <hr></hr>
                    <div className="addOns">
                        <label><b>Select The Add-Ons You Would Like To Enhance Your Massage:</b></label>
                        <ul className="addOnsList">
                            {addOnOptions}
                        </ul>
                    </div>
                    <hr></hr>
                    <div className='details-text'>
                        <Field
                            name='details'
                            type='textarea'
                            component={AppInputs}
                            label='Additional Details for your appointment (optional)'
                            element='textarea'
                        >
                        </Field>
                    </div>
                    <div className='submit'>
                        <div className='submitButton' onClick={toggleConfirmation}>Submit</div>
                    </div>
                {
                this.state.addConfirmation && 
                <ConfirmationPage 
                confirm = {this.props.handleSubmit(data => {
                    this.handleSubmit(data)
                    })
                }
                toggle={toggleConfirmation}
                /> 
                }
                </form>
            </div>
        )
    };
}

AppointmentForm = reduxForm({
    form: 'appointmentForm'
})(AppointmentForm);

AppointmentForm = connect(state => {
    const date = state.appointmentReducer.selectedDate;
    const appointmentDuration = () => {
        if (state.form.appointmentForm !== undefined) {
            if (state.form.appointmentForm.values !== undefined) {
                return state.appointmentReducer.duration = state.form.appointmentForm.values.appointmentDuration
            }
        } else { return null };
    };
    const durationTime = appointmentDuration();


    //array for the times of booked appointments for a selected date

    const appArray = state.appointmentReducer.appointments.filter(appointment => {
        return dateFns.format(date, 'MM/DD/YYYY') === appointment.date;
    }).map(appointment => {

        return {
            time: appointment.time,
            duration: appointment.appointmentDuration
        }
    });

    const toggleCalendar = state.appointmentReducer.calendarIsVisible;


    return {
        date,
        appArray,
        toggleCalendar,
        durationTime
    }

})(AppointmentForm);

export default AppointmentForm; 
