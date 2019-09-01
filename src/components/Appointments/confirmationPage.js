import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import dateFns from "date-fns";
import '../../styles/confirmationPage.css';

class ConfirmationPage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const newState = [];
        const addOns = (options) => {            
            if (options !== undefined) {                
                for(let key in options.values) {
                    console.log('MADE IT TO FOR LOOP');
                    if(options.values[key] === true) {
                        newState.push(key);        
                    }  
                }
                return newState;
            }
        }

        const displayAddOns = () => {
            addOns(this.props.formInfo); 
            let addOnOptions =''; 
            if(newState.length){
                addOnOptions = newState.map(option => {
                    return <li key={option}>{option}</li>
                }); 
                return addOnOptions; 
            }
        }

        const dateOfApp = () => {
            if(this.props.date) {
                let newFormat = dateFns.format(this.props.date, 'MM/DD/YYYY');
                return newFormat; 
            } return '';
        }
        const timeOfApp = () => {
            if(this.props.formInfo !== undefined && this.props.formInfo.values !== undefined && this.props.formInfo.values.time !== undefined) {
                return `${this.props.formInfo.values.time}:00`
            } return '';
        }
        const durrationOfApp = () => {
            if(this.props.formInfo !== undefined && this.props.formInfo.values !== undefined && this.props.formInfo.values.appointmentDuration !== undefined) {
                return `${this.props.formInfo.values.appointmentDuration} minutes`
            } return '';
        }
        const massageTypeOfApp = () => {
            if(this.props.formInfo !== undefined && this.props.formInfo.values !== undefined && this.props.formInfo.values.massageType !== undefined) {
                return this.props.formInfo.values.massageType
            } return '';
        }

        return (
            <div className="confirmationContainer" onClick={this.props.toggle}>
            <div className="modalDiv" onClick={e => e.stopPropagation()}>
            <header className="confirmDetails">
                <h3>Please Confirm Your Appointment Details </h3>
            </header>
                    <ul className="appointmentDetails">
                        <li className="date">Date:{dateOfApp()} </li>
                        <li className="time">Time:{timeOfApp()}</li>
                        <li className="durration">Durration:{durrationOfApp()}</li>
                        <li className="massageType">Massage Type:{massageTypeOfApp()}</li>
                        <li className="addOns">Add-Ons:
                            <ul className="addOnOptions">
                                {displayAddOns()}
                            </ul>
                        </li>                   
                    </ul>
                    <div className='ButtonDiv'>
                        <div id='Buttons' className='add' onClick={this.props.confirm}>Confirm</div>
                        <div id='Buttons' className='cancel' onClick={this.props.toggle}>Cancel</div>
                    </div>
            </div>                            
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    console.log(state); 
    const formInfo = state.form.appointmentForm;
    const date = state.appointmentReducer.selectedDate;
        return {
            formInfo,
            date
        }
}; 

export default connect(mapStateToProps)(ConfirmationPage); 