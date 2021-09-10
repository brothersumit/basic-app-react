import React from "react";

class Table extends React.Component{ 

  render(){

    let tbodyItems = this.props.users.map((user) =>
      <tr key={user.id}>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <button className="btn btn-outline-primary" onClick={() => this.props.onDelete(user.id)}>
            <i className="fa fa-minus-circle" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    );

    return (
      <div className="row mb-4 users-table">
        <div className="col-sm-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {tbodyItems}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
}

export default Table;