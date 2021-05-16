import React from "react";

function ResultList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Photo</th>
          <th onClick={props.sortByLastName}>Last</th>
          <th>First</th>
          <th>Email</th>
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
                {result.email}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table >
  );
}

export default ResultList;
