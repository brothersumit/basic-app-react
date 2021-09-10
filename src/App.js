//import logo from './logo.svg';
import './App.css';
import Table from './Table.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Modal from './Modal';
import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: [
        {
          id: 1,
          name: 'Mark',
          email: 'mark@mailinator.com'      
        },
        {
          id: 2,
          name: 'John',
          email: 'john@mailinator.com'      
        },
      ]
    }
  }
  
  handleDelete = (userid) => {    
    const cUsers = [...this.state.users];    
    const users = cUsers.filter(user => {
      return user.id !== userid;
    });
    this.setState({users});  
  }

  handleSubmit = (event) => {       
    event.preventDefault();
    const newuser = {
      id: 3,
      name: event.target[0].value,
      email: event.target[1].value
    }
    this.setState({users: [...this.state.users, newuser]});    
    $("#addUserModal").hide();
  }


  render(){
    
    return (      
      <div className="App">
        <div className="container">
          <Header />
          <Table users={this.state.users} onDelete={this.handleDelete}/>
          <Footer />
          <Modal users={this.state.users}  onSubmit={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}

export default App;
