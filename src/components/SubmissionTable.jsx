import React from 'react';
import '../styles/SubmissionTable.css';

export default function SubmissionTable({ data }) {
  if (!data.length) return null;
  return (
    <div className="submission-table-container">
      <h2>Submitted Details</h2>
      <table className="submission-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.phone}</td>
              <td>{entry.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
