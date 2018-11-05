import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./App.css";
import AgeTeller from "./AgeTeller";

class App extends Component {
  state = {
    newDate: "",
    birthday: "1992-08-13",
    showStats: false
  };

  changeBirthday() {
    this.setState({
      birthday: this.state.newDate,
      showStats: true
    });
  }
  render() {
    return (
      <div className="App">
        <Form inline>
          <h2>Input Your Birthday!</h2>
          <FormControl
            type="date"
            onChange={event => this.setState({ newDate: event.target.value })}
          />{" "}
          <Button onClick={() => this.changeBirthday()}> Submit</Button>
        </Form>
        {this.state.showStats ? (
          <AgeTeller date={this.state.birthday} />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default App;
