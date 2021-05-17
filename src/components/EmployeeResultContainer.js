import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import axios from "axios";
//import API from "../utils/API";

class EmployeeResultContainer extends Component {
  state = {
    search: "",
    results: [],
    originalResults: [],
  };

  // When this component mounts, search the Random User API
  componentDidMount() {
    // Get data for 16 random employees
    axios
      .get("https://randomuser.me/api/?results=60&nat=us")
      .then(response => {
        // GET request was successful, store the users in state
        this.setState({ results: response.data.results });
        this.setState({ originalResults: response.data.results });

        console.log(response.data.results)
      })
      .catch(err => {
        // GET failed, log the error
        console.log(err);
      });
  }

  filterByLastName = (searchLastName) => {
    if (!searchLastName) {
      this.setState({ results: [...this.state.originalResults] });
      return
    }
    let filteredResult = this.state.results.filter(employee => {
      return employee.name.last === searchLastName
    });
    console.log(filteredResult)
    this.setState({ results: [...filteredResult] });
  };

  sortByLastName = () => {
    let sortedResult = this.state.results.sort((employeeA, employeeB) => {
      let lastNameA = employeeA.name.last,
        lastNameB = employeeB.name.last;
      if (lastNameA < lastNameB) return -1;
      if (lastNameA > lastNameB) return 1;
      return 0;
    });
    this.setState({ results: [...sortedResult] });
    console.log(this.state.results);
  }

  sortByFirstName = () => {
    let sortedResult = this.state.results.sort((employeeA, employeeB) => {
      let firstNameA = employeeA.name.first,
        firstNameB = employeeB.name.first;
      if (firstNameA < firstNameB) return -1;
      if (firstNameA > firstNameB) return 1;
      return 0;
    });
    this.setState({ results: [...sortedResult] });
    console.log(this.state.results);
  }

  sortByStartDate = () => {
    let sortedResult = this.state.results.sort((employeeA, employeeB) => {
      let startDateA = employeeA.registered.date,
        startDateB = employeeB.registered.date;
      if (startDateA < startDateB) return -1;
      if (startDateA > startDateB) return 1;
      return 0;
    });
    this.setState({ results: [...sortedResult] });
    console.log(this.state.results);
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
  };

  // When the form is submitted
  handleFormSubmit = event => {
    event.preventDefault();
    this.filterByLastName(this.state.search);
  };

  render() {
    return (
      <div>
        <h1>Employee Directory</h1>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results}
          sortByLastName={this.sortByLastName.bind(this)}
          sortByFirstName={this.sortByFirstName.bind(this)}
          sortByStartDate={this.sortByStartDate.bind(this)}
        />
      </div>
    );
  }
}

export default EmployeeResultContainer;
