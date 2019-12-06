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
                    this.props.days.map((day, index) => { ///map
                        console.log("ceci",day.passed);
                    return(
                    <div className="daysCalendarLink">
                        {day.passed==true ? 
                            <NavLink  
                                className="dayCalendarLink" 
                                activeClassName="active"
                                
                                to={  `/Bulle/${index + 1}`}  //lien
                            >
                                {/* <p onClick={()=> this.props.transIndex(index+1)} className="homePageP">Day {index+1}</p > */}
                                <div className="likes">
                                    <div>{day.likes}</div>
                                </div>
                                <img className="imageDay" onClick={()=> this.props.transIndex(index+1)} src={day.image} width="100%" height="100%" />
                                <p className="homePageP">Day {index+1}</p>
                            </NavLink> :
                                <div className="dayCalendarLink">
                                <img className="imageDay" src={day.image} width="100%" height="100%" />
                                <p className="homePageP">Day {index+1}</p>
                                </div>
                                }
                                   
            
                        <div className="buttonLike">
                            <button onClick={() => this.props.selectLike(index +1)} >Like</button>
                            {/* <p className="homePageP">Day {index+1}</p > <div className="likes"> {day.likes}</div> */}
                        </div>
                    </div>)
                    })
                    }
                </div>
                </div>
        )
    }
}
 
export default HomePage;



