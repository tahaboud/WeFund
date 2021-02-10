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
import { getEvents } from '../../../../../actions/event';
import PropTypes from 'prop-types';
import CheckIcon from '@material-ui/icons/Check';

class ListEventComponent extends Component {



    constructor(props) {
        super(props)
        this.state = {

        }
 
        this.editUser = this.editUser.bind(this);
        this.createZoom = this.createZoom.bind(this);
        this.addUser = this.addUser.bind(this);
       
    }

    static propTypes = {
        events: PropTypes.array.isRequired,
      };
    componentDidMount() {
        const value=this.props.getEvents();
    
    }


    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }
    createZoom(id){
        window.localStorage.setItem("userId", id);
        this.props.history.push('/create-zoom');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }


    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Events</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addUser()}>
                    Add Event
        </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Event name</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">subscription</TableCell>
                            <TableCell align="right">Create Zoom meeting</TableCell>
                            <TableCell align="right">List of all attendance</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.props.events.map((event) => (
                            <TableRow key={event.id}>
                                 {/* <TableCell component="th" scope="row">
                                    {/* {this.state.users.id}
                                </TableCell>*/}
                                <TableCell align="right">{event.name}</TableCell>
                                <TableCell align="right">{event.description}</TableCell>
                                <TableCell align="right">{event.price}</TableCell>
                                <TableCell align="right">{event.category}</TableCell>
                                <TableCell align="right">{event.category}</TableCell>
                                <TableCell align="right" onClick={() => this.createZoom(event.id)}><CheckIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.editUser(event.id)}><DetailsIcon /></TableCell>
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
    
    events: state.event.events,
  });
export default connect(mapStateToProps, { getEvents })(ListEventComponent);