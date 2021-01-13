import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

class PrivacyAndPolicy extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="container">
                    <div className="row">
                        {/*Here The Header*/}
                       
                            <h2 className="col-sm-10">Privacy and Policy</h2>
                        
                        {/*Here The Button Publish*/}
                        
                            <Button className="col-sm-2 col-sm-offset-2" variant="contained" color="primary" onClick={() => this.addUser()}>
                                Publish
                            </Button>
                       
                        
                    </div>
                </div>
                
           
                    <CKEditor
                        editor={ ClassicEditor }
                        data="<p>Hello from CKEditor 5!</p>"
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            console.log( { event, editor, data } );
                        } }
                        onBlur={ ( event, editor ) => {
                            console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            console.log( 'Focus.', editor );
                        } }
                        onInit={editor => {
                            // You can store the "editor" and use when it is needed.
                            // console.log("Editor is ready to use!", editor);
                            editor.editing.view.change(writer => {
                            writer.setStyle(
                                "height",
                                "500px",
                                editor.editing.view.document.getRoot()
                            );
                            });
                        }}
                    />
            </div>
        );
    }
}

export default PrivacyAndPolicy;