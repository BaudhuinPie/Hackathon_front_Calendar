import React, { Component } from 'react';
import Input from './Input';
import moment from 'moment';
import './Addpanel.css'

const myArray = []

class Addpanel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputs : this.findNumberOfDays(),
            updated:false
        }
    }

    onChange = (event, position) => {
        let value = event.target.value;
        let updatedInputs = this.updateNumbersOfDays(this.state.inputs, position, value)
        this.setState({
            inputs: updatedInputs
        })
    }

    updateNumbersOfDays = (inputs, position, value) => {
       let newArrayInputs = [ ...inputs ]
        newArrayInputs[position] = { id: position, name : value }

        return newArrayInputs
    }

    findNumberOfDays = () => {
        const today = moment();
        var eventdate = moment("2019-12-25");
        const remainingDays = eventdate.diff(today, 'days');
        const myInputs = [];

        for (let i = 0; i < remainingDays; i++) {
            const name = `input_${i}`
            myInputs.push({id: i, name: name})
        }

        return myInputs;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://192.168.0.166:5555/akacalendar/mybubbles', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            //body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(data => this.keepAnswerAlive(data))
    }

    keepAnswerAlive = (data) => {
        myArray.push(data[0]);
        console.log(myArray)
        this.setState({ updated : true})
    }

    render() {
        return (
            <>
            <div className="addpanel-zone">
                <h1>Add url to videos</h1>
                <input type="date" />
                <p>Numbers of days till Christmas: 19</p>
                <form onSubmit={this.handleSubmit}>
                 {this.state.inputs.map((input, index) => (
                     <>
                    <Input onChange={this.onChange} position={index} description={input} itsValue={this.state.inputs[index].name} key={index} />
                    </>
                 ))}
                 </form>
                 <button className="button-send-all" onClick={this.handleSubmit}>Send All videos</button>
            </div>
            </>
        )
    }
}

export default Addpanel;
