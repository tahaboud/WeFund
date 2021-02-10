import React, { Component } from 'react'
//import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'react-dropdown-modal/lib/dropdown.css';
import { connect } from 'react-redux';
import { addEvent } from '../../../../../actions/event';
import PropTypes from 'prop-types';
class AddEventComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            name:'',
            description:'',
            pictures :null,
            spots: 0,
            location:'',
            type: '',
            date: '',
            address: '',
            link: '',
            category: '',
            price: 0,
            is_online:false,
            is_free:false,
            data:''
        }
        this.saveUser = this.saveUser.bind(this);
        this.handleChange = this.handleChange.bind( this );
        this.onEditorChange = this.onEditorChange.bind( this );
        this.onDrop = this.onDrop.bind(this);
    }
    static propTypes = {
        addEvent: PropTypes.func.isRequired,
      };
      //All our Methods
      onDrop(picture) {
        this.setState({
            pictures : this.state.pictures.concat(picture),
        });
    }
      onEditorChange( evt ) {
        this.setState( {
            data: evt.editor.getData()
        } );
    }

    handleChange( changeEvent ) {
        this.setState( {
            data: changeEvent.target.value
        } );
    }


    saveUser = (e) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
      /*  ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });*/
    }


    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
    //Add Event
    onSubmit = (e) => {
    e.preventDefault();
    const fd=new FormData()
    fd.append('pictures',this.state.pictures,this.state.pictures.name)
    const { name,pictures,description,spots,price,category,location, type, date,address,link,is_online,is_free} = this.state;
    const event = { name,pictures,description,spots,price,category,location, type, date,address,link,is_online,is_free};
    let form_data = new FormData();
    form_data.append('name', name);
    form_data.append('image', pictures, pictures.name);
    form_data.append('description',description);
    form_data.append('spots', JSON.stringify(spots));
    form_data.append('price',price);
    form_data.append('category', category);
    form_data.append('location', location);
    form_data.append('type', type);
    form_data.append('date', date);
    form_data.append('address', address);
    form_data.append('link', link);
    form_data.append('is_online', JSON.stringify(is_online));
    form_data.append('is_free', JSON.stringify(is_free));
    
    this.props.addEvent(form_data);

  };
    fileSelectedHandler=e=>{

        this.setState({
            pictures :e.target.files[0]
        })
        
    }


    render() {
        const dropzoneStyle = {
            width  : "100%",
            height : "20%",
            border : "1px solid black"
        };
        return(
            <div>
               <form onSubmit={this.onSubmit} encType="multipart/form-data">
                <Typography variant="h4" style={formContainer}>Add Event</Typography>
                <div className="col-sm-8">
                
                </div>
                <div className="col-sm-4">
                <TextField type="text" placeholder="Name" fullWidth margin="normal" name="name" value={this.state.name} onChange={this.onChange}/>
                <TextField type="text" placeholder="Description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>
                <input type="file" onChange={this.fileSelectedHandler} name="pictures"/>
                
                
                    <TextField type="text" placeholder="Location" fullWidth margin="normal" name="location" value={this.state.location} onChange={this.onChange}/>
                    <TextField type="text" placeholder="Date" fullWidth margin="normal" name="date" value={this.state.date} onChange={this.onChange}/>
                    <TextField type="text" placeholder="Category" fullWidth margin="normal" name="category" value={this.state.category} onChange={this.onChange}/>
                    <TextField type="text" placeholder="Price" fullWidth margin="normal" name="price" value={this.state.price} onChange={this.onChange}/>
 
                    <Button type="submit" variant="contained" color="primary" >Publish</Button>
                    </div>


                    
            </form>
    </div>
        );
    }
}
const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

export default connect(null, { addEvent })(AddEventComponent);