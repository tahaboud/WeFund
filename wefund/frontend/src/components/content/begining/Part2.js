import React,{Component, component} from 'react';


class Part2 extends Component{
    state={
   
    }
  
    render(){
        return(
           
                <div className="second">
                    <center>
                        <h4> What is WeFund </h4>
                        <div className="container">
                            <div className="row">
                                <div className="col-3">
                                <img className="image1" height={200} width={200} src="../static/img/Rectangle 207.png" />
                                <img className="image2" height={200} width={200} src="../static/img/Rectangle 208.png" />
                                <img className="image3" height={200} width={200} src="../static/img/Rectangle 209.png" />
                                </div>
                                <div className="col-9">
                                <p> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Nam laoreet fringilla lectus, in efficitur nibh gravida 
                                    vel. Quisque sed rhoncus neque. Nullam lobortis erat in 
                                    nulla rutrum vehicula sollicitudin.
                                </p>
                                </div>
                            </div>
                        </div>
                        </center>
                </div>
           
        );
    }
}
export default Part2;