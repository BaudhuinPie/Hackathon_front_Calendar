import React, { Component } from 'react';
import {NavLink}            from 'react-router-dom';
import homePage             from './homePage.css'; 

class HomePage extends Component {
    constructor(props) {
        super(props);
        console.log("in bulles ?", props.days)
        this.state = { };
        // this.lastElementofURL = this.findLastElement(this.props.url);
    }

    // findLastElement = (url) => {
    //     const splitted = url.split('/');
    //     let lastSegment = splitted.pop();
    // return lastSegment
// }
    

    render() { 
        const  { images } = this.state;
        return ( 
            <div className="headerHomePage">
                <div className="daysCalendar">
                    {
                    this.props.days.map((day, index) => 
                    <div className="daysCalendarLink">
                        <NavLink  
                            className="dayCalendarLink" 
                            activeClassName="active" 
                            to={`/Bulle/${index + 1}`}
                        >
                            <img className="imageDay" src={day.image} width="100%" height="100%" ></img>
                            <p className="homePageP">Day {index+1}</p>
                        </NavLink>
                        <div className="buttonLike">
                            <button onClick={() => this.props.selectLike(index)} >Like</button>
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


