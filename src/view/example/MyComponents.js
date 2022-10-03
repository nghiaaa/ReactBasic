import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  state = {
    firstName: "",
    LastName: "",
    arrJobs: [
      { id: "1", title: "developer", salary: "120" },
      { id: "2", title: "tester", salary: "200" },
      { id: "3", title: "Ba", salary: "2300" },
    ],
  };

  HandleChangeFristName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  HandleChangeLastName = (event) => {
    this.setState({
      LastName: event.target.value,
    });
  };
  HandleSubmit = (Event) => {
    Event.preventDefault();
    alert("hello");
  };
  render() {
    return (
      <>
        <form action="/action_page.php" />
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          value={this.state.firstName}
          onChange={(event) => this.HandleChangeFristName(event)}
        />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input
          type="text"
          value={this.state.LastName}
          onChange={(event) => this.HandleChangeLastName(event)}
        />
        <br />
        <br />
        <input
          type="submit"
          value="Submit"
          onClick={(event) => this.HandleSubmit(event)}
        />
        <form />
        <ChildComponent arrJobs={this.state.arrJobs} />
      </>
    );
  }
}
export default MyComponent;
