import logo from './logo.svg';
import './App.css';
import React from 'react'
import Inbox from './Components/Inbox'
import Email from './Components/Email'
import Compose from './Components/Compose'


import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: null,
      searchSet: null
    }
    this.filterInbox = this.filterInbox.bind(this)
  }
  
  async componentDidMount(){
    const response = await fetch('http://localhost:3001/emails')
    const json = await response.json()
    this.setState({...this.state, emails: json, searchSet: json})
  }

  filterInbox () {
    const searchText = document.getElementById('searchText').value
    const searchSet = this.state.emails.filter(email => email.subject.toLowerCase().includes(searchText))
    this.setState({...this.state, searchSet: searchSet})
    //
  }

  // newEmail(){

  // }

  render(){
    return (
      <div className="App">
        <Router>
          <Inbox 
            emails={this.state.searchSet} 
            filterInbox={this.filterInbox}/>
          <Route 
            path="/email/:emailId" 
            render={(props) => <Email {...props} emails={this.state.emails} />}
          />
          <Route path="/new" component={Compose}/>
        </Router>

      </div>
    );
  }
}

export default App;
