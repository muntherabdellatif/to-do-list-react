import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import Form from "./components/Form";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {
          taskName: "task1",
          state: "Yes",
        },
        {
          taskName: "task2",
          state: "",
        },
        {
          taskName: "task3",
          state: "Yes",
        },
      ],
    };
  }

  takeInput = (e) => {
    e.preventDefault();
    const input = {
      taskName: e.target.input.value,
      state: "",
    };
    let joined = this.state.lists.concat(input);
    this.setState({ lists: joined });
  };

  deleteTask = (name) => {
    let newList = this.state.lists.filter((list) => list.taskName !== name);
    this.setState({ lists: newList });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Form onSubmit={this.takeInput} />
        <List list={this.state.lists} onDelete={this.deleteTask} />
        <Footer />
      </div>
    );
  }
}

export default App;
