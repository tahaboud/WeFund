import React, { Component } from 'react'
//import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CheckIcon from '@material-ui/icons/Check';
import { connect } from 'react-redux';
import { getEventAttendence } from '../../../../../actions/event';
import PropTypes from 'prop-types';

class EditEventComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            firstName: '',
            lastName: '',
            age: '',
            salary: '',
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        //alert(window.localStorage.getItem("userId"))
        const values=this.props.getEventAttendence(window.localStorage.getItem("userId"));
    }
    loadUser() {
       /* ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                let user = res.data.result;
                this.setState({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                age: user.age,
                salary: user.salary,
                })
            });*/
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let user = {id: this.state.id, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
       /* ApiService.editUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });*/
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>List of all attendances</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">First name</TableCell>
                            <TableCell align="right">Last name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone number</TableCell>
                            <TableCell align="right">Id number</TableCell>
                            <TableCell align="right">Payement status</TableCell>
                            <TableCell align="right">Send Email</TableCell>
                       
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.props.event_attends.map((event_attend) => (
                            <TableRow key={event.id}>
                                 {/* <TableCell component="th" scope="row">
                                    {/* {this.state.users.id}
                                </TableCell>*/}
                                <TableCell align="right">{event_attend.first_name}</TableCell>
                                <TableCell align="right">{event_attend.last_name}</TableCell>
                                <TableCell align="right">{event_attend.email}</TableCell>
                                <TableCell align="right">{event_attend.phone_number}</TableCell>
                                <TableCell align="right">{event_attend.id_number}</TableCell>
                                <TableCell align="right"></TableCell>
                               <TableCell align="right"><CheckIcon /></TableCell>
                                {/* <TableCell align="right" onClick={() => this.deleteUser(row.id)}><DeleteIcon /></TableCell>*/}

                            </TableRow>
                           ))}
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
    
    event_attends: state.event.event_attends,
  });
export default connect(mapStateToProps, { getEventAttendence })(EditEventComponent);


