import React from "react";

class Modal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (evt, field) {
    this.setState({ [field]: evt.target.value });
  }


  render(){
    return (
      <div className="row">      
        <div className="modal fade" id="addUserModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add User</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={(event) => this.props.onSubmit(event)} method="post">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" name="name" onChange={(event)=>this.handleChange(event, "name")} className="form-control"  placeholder="Enter Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input type="email" name="email" onChange={(event)=>this.handleChange(event, "email")} className="form-control" placeholder="Enter Email" />
                  </div>
                  <div className="form-group">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary pull-right">Save</button>
                  </div>
                  
                </form>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;