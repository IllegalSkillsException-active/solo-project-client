import React from "react";
import dateFns from "date-fns";
import { connect } from 'react-redux';
import { fetchDatesBegin, fetchAppointments, setMonth } from '../../actions/appointments';
import { setCalendarVisibility } from '../../actions/appointments';

class Calendar extends React.Component {
  componentDidMount() {
    this.props.fetchAppointments();
  }

  handleCalendarToggle(calendarIsVisible) {
    setCalendarVisibility(calendarIsVisible);
}

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>
            {dateFns.format(this.props.currentMonth, dateFormat)}
          </span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "ddd";
    const days = [];
    let startDate = dateFns.startOfWeek(this.props.currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.props;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
    const dateFormat = "D";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart) || dateFns.getDay(day) === 2 || dateFns.getDay(day) === 3 || dateFns.getDay(day) === 4
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
              }`}
            key={day}

            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >

            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);

      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.props.fetchDatesBegin(day);
    this.handleCalendarToggle(); 
  };

  nextMonth = () => {
    this.props.setMonth(dateFns.addMonths(this.props.currentMonth, 1))
  };

  prevMonth = () => {
    this.props.setMonth(dateFns.subMonths(this.props.currentMonth, 1))
  };

  render() {
    if (this.props.calendarIsVisible) {
      return (
        <div className="calendar">
          {this.renderHeader()}
          {this.renderDays()}
          {this.renderCells()}
        </div>
      );
    }
    else { return (<div></div>) }
  }
}

const mapStateToProps = state => {

  return {
    currentMonth: state.appointmentReducer.currentMonth,
    selectedDate: state.appointmentReducer.selectedDate,
    appointments: state.appointmentReducer.appointments,
    calendarIsVisible: state.appointmentReducer.calendarIsVisible
  }
}

export default connect(mapStateToProps, { fetchDatesBegin, setMonth, fetchAppointments })(Calendar);