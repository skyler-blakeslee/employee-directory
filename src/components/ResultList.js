import React from "react";

function ResultList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Photo</th>
          <th onClick={props.sortByLastName} style={{ backgroundColor: "lightblue" }}>Last</th>
          <th onClick={props.sortByFirstName} style={{ backgroundColor: "lightblue" }}>First</th>
          <th>Phone</th>
          <th>Email</th>
          <th onClick={props.sortByStartDate} style={{ backgroundColor: "lightblue" }}>Start Date</th>
        </tr>
      </thead>
      <tbody>
        {
          props.results.map((result, index) => (
            <tr key={index}>
              <td>
                <img alt={result.medium} className="img-fluid" src={result.picture.medium} />
              </td>
              <td>
                {result.name.last}
              </td>
              <td>
                {result.name.first}
              </td>
              <td>
                {result.phone}
              </td>
              <td>
                {result.email}
              </td>
              <td>
                {result.registered.date.split("T")[0]}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table >
  );
}

export default ResultList;
