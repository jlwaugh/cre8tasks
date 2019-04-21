import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Tasks from './components/Tasks/Tasks';
import AddTask from './components/Tasks/AddTask';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    tasks: [
      
    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=8')
      .then(res => this.setState({ tasks: res.data }))
  }

  markComplete = (id) => {
    this.setState({ tasks: this.state.tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed
      }
      return task;
    }) });
  }

  delTask = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ tasks: [...this.state.tasks.filter(task => task.id !== id)] }));
  }

  addTask = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ tasks:
      [...this.state.tasks, res.data] }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTask addTask={this.addTask} />
                <Tasks tasks={this.state.tasks} markComplete={this.markComplete} delTask={this.delTask} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
