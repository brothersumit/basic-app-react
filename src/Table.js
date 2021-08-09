function Table(props){
  //console.log(props.users);
  
  const users = props.users;
  const tbodyItems = users.map((user) =>
    <tr key={user.id}>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td><button className="btn btn-outline-primary"><i className="fa fa-minus-circle" aria-hidden="true"></i></button></td>
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

export default Table;