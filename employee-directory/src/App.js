import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            lastName={employee.lastName}
            firstName={employee.firstName}
            startDate={employee.startDate}
            position={employee.position}
            birthDate={employee.birthDate}
            address={employee.address}
            phoneNumber={employee.phoneNumber}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
