import React, { Component } from 'react';
import Input from './Input';
import moment from 'moment';
import './Addpanel.css'


class Addpanel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputs : this.findNumberOfDays()
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



    render() {
        return (
            <>
            <div className="addpanel-zone">
                <h1>Add url to videos</h1>
                <input type="date" />
                <p>Numbers of days till Christmas: 19</p>
                 {this.state.inputs.map((input, index) => (
                     <>
                    <Input onChange={this.onChange} position={index} description={input} itsValue={this.state.inputs[index].name} key={index} />
                    </>
                 ))}
                 <button className="button-send-all">Send All videos</button>
            </div>
            </>
        )
    }
}

export default Addpanel;

//<input name="url" value={this.state.url} onChange={this.onChange} placeholder="Im a FBI agent"/>

/*                {this.state.inputs.map((input, index) => (
                    <Input onChange={this.onChange} description={input} key={index} />
                ))}*/