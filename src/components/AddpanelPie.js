import React, { Component } from 'react';
import Input from './Input';
import moment from 'moment';
import './Addpanel.css'


class AddpanelPie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            remainDays: this.findNumberOfDays(),
        }
    }
 //==================================== for INPUT ===============================================
    onChange = (event, index) => {
        // let value = event.target.value;
        // let updatedInputs = this.updateNumbersOfDays(this.state.inputs, position, value)
        // this.setState({
        //     inputs: updatedInputs
        // })
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
        console.log( event.target.name, event.target.value);
    }

    // updateNumbersOfDays = (inputs, position, value) => {
    //    let newArrayInputs = [ ...inputs ]
    //     newArrayInputs[position] = { id: position, name : value }

    //     return newArrayInputs
    // }

    //produce un number of input..
    findNumberOfDays = () => {
        const today = moment();
        var eventdate = moment("2019-12-25");
        const remainingDays = eventdate.diff(today, 'days');
        return remainingDays ;
    }

    dipslayInputs = () => {
        let numbOfInputs = this.state.remainDays;
        let listOfInputs = [];

        let stateListInpName = [];
        let stateListInpValue = [];

        for (let i=0 ; i < numbOfInputs ; i++) {
            let localname = `input_${i}`
            listOfInputs.push(<><label>Day {i} </label><Input  value ={this.state.localname}  onChange={this.onChange} description={localname} index = {i} key={i}/> </>); //list of inputs
            // stateListInpName.push(localname);
            // stateListInpValue.push(this.state.localname);
        }

        return listOfInputs;

    }
//=================================================================================

    handleSubmission = (event) => {
        event.preventDefault();
        this.props.submission(this.state)
        console.log("remontée du state")
    }


    componentDidMount() {
        this.dipslayInputs();
    }


    render() {
        return (
            <>
            <div className="addpanel-zone">
                <h1>Add url to videos</h1>
                <input type="date" />
                <p>Numbers of days till Christmas: 19</p>

                <form onSubmit={this.handleSubmission}>

                    {this.dipslayInputs()}

                    {/* {this.state.inputs.map((input, index) => (
                        <>
                        <Input onChange={this.onChange} position={index} description={input} itsValue={this.state.inputs[index].name} key={index} />
                        </>
                    ))} */}
                    <button className="button-send-all">Send All videos</button>

                 </form>
            </div>
            </>
        )
    }
}

export default AddpanelPie;