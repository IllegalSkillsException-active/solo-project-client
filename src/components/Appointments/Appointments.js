import React from 'react';
import { connect } from "react-redux";
import { fetchAppointments } from '../../actions/appointments';

import AppointmentForm from './AppointmentForm';
import ConfirmationPage from './confirmationPage';
import Header from '../Home/Header';

class Appointment extends React.Component {
  componentDidMount() {
    fetchAppointments();
  }

  render() {

    return (
      <div className="App">
        <Header />
        <main>
          <AppointmentForm />
          {/* <ConfirmationPage /> */}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    appointments: state.appointmentReducer.appointments,
    // loading: state.loading,
    selectedDate: state.appointmentReducer.selectedDate,
    error: state.appointmentReducer.error,
    values: state.form.booking,
    state
  };
}

export default connect(mapStateToProps)(Appointment);




































// import DatePicker from 'material-ui/DatePicker';

// /**
//  * `DatePicker` can be implemented as a controlled input,
//  * where `value` is handled by state in the parent component.
//  */
// export default class DatePickerExampleControlled extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       controlledDate: null,
//     };
//   }

//   handleChange = (event, date) => {
//     this.setState({
//       controlledDate: date,
//     });
//   };

//   render() {
//     return (
//       <DatePicker
//         hintText="Controlled Date Input"
//         value={this.state.controlledDate}
//         onChange={this.handleChange}
//       />
//     );
//   }
// }
