import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';



// Renders the App class to display the title & searchbox
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: 'robots',
            searchfield: ''
        }
    }

    onSearchChange(event) {
        console.log(event.target.value);
    }

    render () {
    return (
        <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={robots}/>
        </div>

    );
    }
}

export default App;