import React, { Component } from 'react'
//import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
class EditUserComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            firstName: '',
            lastName: '',
            age: '',
            salary: '',
            'readOnly':true
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
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
                <Typography variant="h4" style={style}>Valdiate User</Typography>
                <form>
                    <div className="container">
                        <div className="row">
                            {/*Full  Name */}
                                <div className="col-sm-2">
                                    <InputLabel>Full Name</InputLabel>
                                </div>
                                <div className="col-sm-10">
                                    <TextField  disabled={this.state.readOnly} fullWidth margin="normal" name="firstName" value={this.state.firstName} onChange={this.onChange}/>
                                </div>
                            
                        {/*Date Birth */}
                                <div className="col-sm-2">
                                    <InputLabel>Date of birth</InputLabel>
                                </div>
                                <div className="col-sm-10">
                                    <TextField  disabled={this.state.readOnly} fullWidth margin="normal" name="lastName" value={this.state.lastName} onChange={this.onChange}/>
                                </div>
                            {/*Address */}
                                <div className="col-sm-2">
                                    <InputLabel>Address</InputLabel>
                                </div>
                                <div className="col-sm-10">
                                    <TextField disabled={this.state.readOnly}  fullWidth margin="normal" name="lastName" value={this.state.lastName} onChange={this.onChange}/>
                                </div>
                            {/*Phone Number */}
                                <div className="col-sm-2">
                                    <InputLabel>Phone Number</InputLabel>
                                </div>
                                <div className="col-sm-10">
                                    <TextField disabled={this.state.readOnly}  fullWidth margin="normal" name="lastName" value={this.state.lastName} onChange={this.onChange}/>
                                </div>
                            {/*Email */}
                                <div className="col-sm-2">
                                    <InputLabel>Email</InputLabel>
                                </div>
                                <div className="col-sm-10">
                                    <TextField disabled={this.state.readOnly}  fullWidth margin="normal" name="lastName" value={this.state.lastName} onChange={this.onChange}/>
                                </div>
                            {/*id national card */}
                                <div className="col-sm-2">
                                    <InputLabel>Id national card</InputLabel>
                                </div>
                                <div className="col-sm-10">
                                    <TextField disabled={this.state.readOnly}  fullWidth margin="normal" name="lastName" value={this.state.lastName} onChange={this.onChange}/>
                                </div>
                            {/*degress */}
                                <div className="col-sm-2">
                                    <InputLabel>Degree</InputLabel>
                                </div>
                                <div className="col-sm-10">
                                    <TextField disabled={this.state.readOnly}  fullWidth margin="normal" name="lastName" value={this.state.lastName} onChange={this.onChange}/>
                                </div>
                            {/*univ instutiaon ogranization */}
                                <div className="col-sm-2">
                                    <InputLabel>Univ instutiaon ogranization</InputLabel>
                                </div>
                                <div className="col-sm-10">
                                    <TextField disabled={this.state.readOnly}  fullWidth margin="normal" name="lastName" value={this.state.lastName} onChange={this.onChange}/>
                                </div>
                            {/*Search Type */}
                                <div className="col-sm-2">
                                    <InputLabel>Search type</InputLabel>
                                </div>
                                <div className="col-sm-10">
                                    <TextField disabled={this.state.readOnly}  fullWidth margin="normal" name="lastName" value={this.state.lastName} onChange={this.onChange}/>
                                </div>
                            {/*Cv */}
                                <div className="col-sm-2">
                                    <InputLabel>Cv</InputLabel>
                                </div>
                                <div className="col-sm-10">
                                    <TextField disabled={this.state.readOnly}  fullWidth margin="normal" name="lastName" value={this.state.lastName} onChange={this.onChange}/>
                                </div>
                            
                        
                            <Button variant="contained" color="primary" onClick={this.saveUser}>Validate</Button>
                        </div>
                    </div>
                    
                </form>
              
            </div>
        );
    }
}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default EditUserComponent;

