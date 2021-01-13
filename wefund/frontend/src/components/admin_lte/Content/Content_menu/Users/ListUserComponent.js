import React, { Component } from 'react'
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
import { connect } from 'react-redux';
import { getUsers } from '../../../../../actions/user';
import PropTypes from 'prop-types';
class ListUserComponent extends Component {

    constructor(props) {
        super(props)

        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
      
    }

    static propTypes = {
       // users: PropTypes.array.isRequired,
      };
    componentDidMount() {
        this.props.getUsers();
      
    
    
    }

    deleteUser(userId) {
     /*   ApiService.deleteUser(userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.id !== userId)});
           })*/
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
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Type user</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">View</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                    {/**    {this.props.users.map((user) => (*/}
                            <TableRow key={this.props.users.id}>
                                <TableCell component="th" scope="row">
                                     {this.props.users.id}
                                </TableCell>
                                <TableCell align="right">{this.props.users.username}</TableCell>
                                <TableCell align="right">{this.props.users.email}</TableCell>
                                <TableCell align="right">{this.props.users.first_name}</TableCell>
                                <TableCell align="right">{this.props.users.last_name}</TableCell>
                                <TableCell align="right">{this.props.users.is_researcher}</TableCell>
                               
         

                            </TableRow>
                        {/**    ))}*/}
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

const mapStateToProps = (state) => ({
    
    users: state.user.users,
  });
export default connect(mapStateToProps, { getUsers })(ListUserComponent);