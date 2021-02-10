<<<<<<< HEAD
import React, { Component } from 'react'
=======
import React, {Component} from 'react'
>>>>>>> 11f3d95493d5e3bb703820f3188c4bba136129a1
//import ApiService from "../../service/ApiService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import DetailsIcon from '@material-ui/icons/Details';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD

class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users:{

            
                user_name:'amar',
                type :'researcher',
                status :"not validate"
            },
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
       /* ApiService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data.result})
            });*/
    }

    deleteUser(userId) {
     /*   ApiService.deleteUser(userId)
=======
import {connect} from 'react-redux';
import {getUsers} from '../../../../../actions/user';
import PropTypes from 'prop-types';
class ListUserComponent extends Component {

  constructor(props) {
    super(props)

    this.deleteUser = this
      .deleteUser
      .bind(this);
    this.editUser = this
      .editUser
      .bind(this);
    this.addUser = this
      .addUser
      .bind(this);

  }

  static propTypes = {
    // users: PropTypes.array.isRequired,
  };
  componentDidMount() {
    this
      .props
      .getUsers();

  }

  deleteUser(userId) {
    /*   ApiService.deleteUser(userId)
>>>>>>> 11f3d95493d5e3bb703820f3188c4bba136129a1
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.id !== userId)});
           })*/
<<<<<<< HEAD
    }

    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Users</Typography>
              {/*  <Button variant="contained" color="primary" onClick={() => this.addUser()}>
                    Add User
        </Button>*/}

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">User name</TableCell>
                            <TableCell align="right">Type user</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">View</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/*{//this.state.users.map(row => (*/}
                            <TableRow key={this.state.users.id}>
                                 {/* <TableCell component="th" scope="row">
                                    {/* {this.state.users.id}
                                </TableCell>*/}
                                <TableCell align="right">{this.state.users.user_name}</TableCell>
                                <TableCell align="right">{this.state.users.type}</TableCell>
                                <TableCell align="right"><p className={`banner large ${this.state.users.status==="validate"
                                 ? "btn btn-success" : "btn btn-danger"} ${this.state.users.status==="not validate"? "btn btn-danger" : ""
    }`}>{this.state.users.status}</p>
                                    </TableCell>
                                    <TableCell align="right" onClick={() => this.editUser(this.state.users.id)}><DetailsIcon /></TableCell>
                                {/*<TableCell align="right" onClick={() => this.editUser(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deleteUser(row.id)}><DeleteIcon /></TableCell>*/}

                            </TableRow>
                        {/*//))}*/}
                    </TableBody>
                </Table>

            </div>
        );
    }

}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default ListUserComponent;
=======
  }

  editUser(id) {
    window
      .localStorage
      .setItem("userId", id);
    this
      .props
      .history
      .push('/edit-user');
  }

  addUser() {
    window
      .localStorage
      .removeItem("userId");
    this
      .props
      .history
      .push('/add-user');
  }

  render() {
    console.log(JSON.stringify(this.props.users) + "ss")
    if (typeof(this.props.users) !== 'undefined' && this.props.users != null) 
     {
        return (
            <div>
              <Typography variant="h4" style={style}>Users</Typography>
              {/*  <Button variant="contained" color="primary" onClick={() => this.addUser()}>
                          Add User
              </Button>*/}
      
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="right">User name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">First Name</TableCell>
                    <TableCell align="right">Last Name</TableCell>
                    <TableCell align="right">Type user</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">View</TableCell>
      
                  </TableRow>
                </TableHead>
                   <TableBody>
      
                           {this.props.users.map((user) => (
                                  <TableRow key={user.id}>
                                      <TableCell component="th" scope="row">
                                           {user.id}
                                      </TableCell>
                                      <TableCell align="right">{user.username}</TableCell>
                                      <TableCell align="right">{user.email}</TableCell>
                                      <TableCell align="right">{user.first_name}</TableCell>
                                      <TableCell align="right">{user.last_name}</TableCell>
                                      <TableCell align="right">{user.is_researcher}</TableCell>
                                      <TableCell align="right">{user.is_validated}</TableCell>
      
                                  </TableRow>
                                  ))}
                          </TableBody>
      
              </Table>
      
            </div>
          );
     }else
    return (
      <div>
        <Typography variant="h4" style={style}>Users</Typography>
        {/*  <Button variant="contained" color="primary" onClick={() => this.addUser()}>
                    Add User
        </Button>*/}

        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">User name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Type user</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">View</TableCell>

            </TableRow>
          </TableHead>
          {/*   <TableBody>

                     {this.props.users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell component="th" scope="row">
                                     {user.id}
                                </TableCell>
                                <TableCell align="right">{user.username}</TableCell>
                                <TableCell align="right">{user.email}</TableCell>
                                <TableCell align="right">{user.first_name}</TableCell>
                                <TableCell align="right">{user.last_name}</TableCell>
                                <TableCell align="right">{user.is_researcher}</TableCell>



                            </TableRow>
                            ))}
                    </TableBody>*/}

        </Table>

      </div>
    );
  }

}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

const mapStateToProps = (state) => ({users: state.user.users.users});
export default connect(mapStateToProps, {getUsers})(ListUserComponent);
>>>>>>> 11f3d95493d5e3bb703820f3188c4bba136129a1
