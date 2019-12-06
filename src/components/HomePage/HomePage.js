import React, { Component } from 'react';
import {NavLink}            from 'react-router-dom';
import homePage             from './homePage.css'; 

class HomePage extends Component {
    constructor(props) {
        super(props);
        console.log("in bulles ?", props.days)
        this.state = {

        }
        
    }
    num = 0;

    componentDidUpdate() {
        console.log('you clied');
    }

    render() { 
        return ( 
            <div className="headerHomePage">
                <div className="daysCalendar">
                    {
                    this.props.days.map((day, index) => { ///map
                        console.log("ceci",day.passed);
                    return(<div className="daysCalendarLink">
                        {day.passed==true ? 
                            <NavLink  
                                className="dayCalendarLink" 
                                activeClassName="active"
                                to={  `/Bulle/${index + 1}`}  //lien
                            >
                                 <p className="homePageP">Day {index+1}</p > <div className="likes"> {day.likes}</div>
                            </NavLink> :
                            null}
                                   
                        {/* <NavLink  
                            className="dayCalendarLink" 
                            activeClassName="active"
                            to={ day.passed ? `/Bulle/${index + 1}` : `/Bulle/${index + 1}`}  //lien
                        >
                            <p className="homePageP">Day {index+1}</p > <div className="likes"> {day.likes}</div>
                        </NavLink> */}
                        <div className="buttonLike">
                            <button onClick={() => this.props.selectLike(index+1)} >Like</button>
                                { this.props.days.clicked ? <div>C'est cliked !</div> : null}
                        </div>
                    </div>)}
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


