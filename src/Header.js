
function Header(){
  
  return (
    <div className="row mb-2">
      <div className="col-sm-12 text-center">
        <h1>BASIC APP REACT</h1>
      </div>
      <div className="col-sm-12 text-right">
        <button className="btn btn-outline-primary" data-toggle="modal" data-target="#addUserModal"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
      </div>
    </div>
  );
}

export default Header;  