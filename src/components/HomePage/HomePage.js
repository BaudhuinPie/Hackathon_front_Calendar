import React, { Component } from 'react';
import {NavLink}                from 'react-router-dom';
import homePage                    from './homePage.css'; 

class HomePage extends Component {
    constructor(props) {
        super(props);
        console.log("in bulles ?", props.days)
        this.state = {
           
        }
    }

    render() { 
        return ( 
            <div className="headerHomePage">
                <div className="daysCalendar">
                    {
                    this.props.days.map((day, index) => 
                    <div className="daysCalendarLink">
                        <NavLink  
                            className="dayCalendarLink" 
                            activeClassName="active" 
                            to={'/Bulle'} >
                            Day {index+1} 
                        </NavLink>
                        <div className="buttonLike">
                            <button onClick={() => this.props.selectLike()} >Like</button>
                        </div>
                    </div>
                    )
                    }
                </div>
            </div>
        )
    }
}
 
export default HomePage;


// handleClick = () => {
//     this.setState({days : 1});
//     // console.log(key);
//    }


