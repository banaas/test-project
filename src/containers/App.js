import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'



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
render() {
    const { robots, searchfield } = this.state;

// Uses alphabetical filtering as the Search is conducted
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

/* If the page takes longer than usual time, initialize a "Loading" screen.
Otherwise, display the RoboFriends header with all the other components along
with it. */
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
                <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}




export default App;