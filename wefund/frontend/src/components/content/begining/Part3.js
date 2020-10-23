import React,{Component, component} from 'react';


class Part3 extends Component{
    state={
        users:[]
    }
  
    render(){
        return(
    <div>       
        <center>
            <div className="three">
                <div className="conatiner">
                    <div className="row">
                        <div className="col-4">
                            <h5>Published research </h5>
                            <img src="../static/img/book.png" height={50} width={50} />
                            <h5> +20 </h5>
                        </div>
                        <div className="col-4">
                            <h5>Succesful Projects</h5>
                            <img src="../static/img/presentation.png" height={50} width={50} />
                            <h5> +15 </h5>
                        </div>
                        <div className="col-4">
                            <h5>Events </h5>
                            <img src="../static/img/appointment.png" height={50} width={50} />
                            <h5> +5 </h5>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    </div>                                                                  
           
        );
    }
}
export default Part3;