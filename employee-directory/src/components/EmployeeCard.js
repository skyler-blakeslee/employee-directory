import React from "react";

function EmployeeCard(props) {
    return (
        <div className="card">
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.lastName}, {props.firstName}
                    </li>
                    <li>
                        <strong>Position:</strong> {props.position}
                    </li>
                    <li>
                        <strong>Start Date:</strong> {props.startDate}
                    </li>
                    <li>
                        <strong>Phone Number:</strong> {props.phoneNumber}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default EmployeeCard;
