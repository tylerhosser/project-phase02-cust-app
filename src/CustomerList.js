import React from 'react';

function CustomerList({ customers, formObject, handleListClick }) {
  return (
    <div className="boxed">
      <h4>Customer List</h4>
      <table id="customer-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Pass</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((item, index) => (
            <tr
              key={item.id}
              className={item.id === formObject.id ? 'selected' : ''}
              onClick={() => handleListClick(item)}
            >
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;