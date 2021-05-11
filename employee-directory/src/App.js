import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";
import employees from "./employees.json";

function App() {
  return (
    <Wrapper>
      <Title>Employee List</Title>
      <EmployeeCard
        lastName={employees[0].lastName}
        firstName={employees[0].firstName}
        startDate={employees[0].startDate}
        position={employees[0].position}
        birthDate={employees[0].birthDate}
        address={employees[0].address}
        phoneNumber={employees[0].phoneNumber}
      />
      <EmployeeCard
        lastName={employees[1].lastName}
        firstName={employees[1].firstName}
        startDate={employees[1].startDate}
        position={employees[1].position}
        birthDate={employees[1].birthDate}
        address={employees[1].address}
        phoneNumber={employees[1].phoneNumber}
      />
      <EmployeeCard
        lastName={employees[2].lastName}
        firstName={employees[2].firstName}
        startDate={employees[2].startDate}
        position={employees[2].position}
        birthDate={employees[2].birthDate}
        address={employees[2].address}
        phoneNumber={employees[2].phoneNumber}
      />
    </Wrapper>
  )
}

export default App;
