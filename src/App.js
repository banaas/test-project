import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';



// Renders the App class to display the title & searchbox
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

// fetches the users from the JSON site
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

// Filters the cards as the SearchBar is used
    render () {
        const { robots, searchfield } = this.state;
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

// Loading screen in-case the Robot Cards take too long to render for the page
        if (robots.length === 0) {
            return <h1>Loading...</h1>
        } else {
 
 // Displays the page header, along with the CardList and SearchBox           
    return (
        <div className='tc'>
        <h1 className='f2'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
            <CardList robots={filteredRobots}/>
        </Scroll>
        </div>
    );
    }
}
}

export default App;