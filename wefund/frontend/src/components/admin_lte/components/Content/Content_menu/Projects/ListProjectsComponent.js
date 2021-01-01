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
import Typography from '@material-ui/core/Typography';

class ListProjectsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users:{

            
                project_name:'amar',
                type :'researcher',
                status :"Accepte"
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
                <Typography variant="h4" style={style}>Projects</Typography>
              {/*  <Button variant="contained" color="primary" onClick={() => this.addUser()}>
                    Add User
        </Button>*/}

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Poject name</TableCell>
                            <TableCell align="right">Search Type</TableCell>
                            <TableCell align="right">Status</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/*{//this.state.users.map(row => (*/}
                            <TableRow key={this.state.users.id}>
                                 {/* <TableCell component="th" scope="row">
                                    {/* {this.state.users.id}
                                </TableCell>*/}
                                <TableCell align="right">{this.state.users.project_name}</TableCell>
                                <TableCell align="right">{this.state.users.type}</TableCell>
                                <TableCell align="right"><button className={`banner large ${this.state.users.status==="Accepte"
                                 ? "btn btn-success" : "btn btn-danger"} ${this.state.users.status==="Not Accepte"? "btn btn-danger" : ""
    }`}>{this.state.users.status}</button>
                                    </TableCell>
         
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

export default ListProjectsComponent;