import React, { Component } from 'react';
import './App.css';
import Course from './components/Course';
import NewCourseForm from './components/NewCourseForm';



class App extends Component{   
  constructor(props){
    super(props);
    this.state = {
        name: '',
        category: '',
        image: ''
    }

    this.add = this.add.bind(this)    

}
  add(course){
    const { courses } = this.state,
      newCourse = Object.assign({}, course, {id: (Date.now())})
    courses.push(newCourse);
    this.setState({courses});
  }

  render(){
    return (
      <div className="App">
       <NewCourseForm onSubmit={this.add}/>
      </div>
    );
  }
}
export default App;
