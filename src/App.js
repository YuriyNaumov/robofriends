import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
// import { robots } from './robots'; /*{robots} because many robots*/




// Declaring a class for extending compinent

class App extends Component {
    constructor() {
        super() /*calls constructor of the component*/
        this.state = {
            robots: [],
            searchfield:''
        }
    }

    /*runing the app component of the app. fetch - for connecting with API  */
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots:users }))
            }
        

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value  })
    }



    render() {
        const filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        if (this.state.robots.length === 0){
            return <h1>Loading</h1>
        }
        else {
            return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                {/* functions to the parameters */}
                <SearchBox searchChange={this.onSearchChange} />
                {/* Wrapin component Scroll */}
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll> 
            </div>
        )
        }
        
           
        
    }
}


export default App;