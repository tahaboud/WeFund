import React,{Component, component} from 'react';


class Footer extends Component{
    state={
        users:[]
    }
  
    render(){
       // const users=this.state.users
        return(
          <div>
            <div className="bottom" id="dowbottomn">
                <div className="container">
      <div className="row">
        <div className="col-2">
          <img src="../static/img/WF.png" height={60} widht={60} /> </div>
        <div className="col-3">
          <p> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p> </div>
        <div className="col-3" style={{marginLeft: 40}}> 
          <h4 style={{marginBottom: 30}}> Follow us </h4>
          <a href="#"> <img src="../static/img/Path 108.png" height={25} width={25} id="links" /> </a>
          <a href="#"> <img src="../static/img/Path 109.png" height={25} width={25} id="links" /> </a>
          <a href="#"> <img src="../static/img/Path 110.png" height={25} width={25} id="links" /> </a>
          <a href="#"> <img src="../static/img/Path 111.png" height={25} width={25} id="links" /> </a>
        </div>
        <div className="col-3">
          <h4> Newsletter </h4>
          <input type="text" name="email" id="email" placeholder="E-mail" />
          <input type="submit" />
        </div> 
      </div></div></div>
                <div className="bottom1">
                  <div className="container">
                <div className="row">
                    <div className="col-4" style={{marginTop: 20}}>
                    <center>
                        <img src="../static/img/Group 56.png" height={60} width={50} />
                        <h5 style={{textAlign: 'center', marginTop: 5}}>+91-720-80-99-369</h5>
                    </center></div>
                    <div className="col-4" style={{marginTop: 20}}>
                    <center>
                        <img src="../static/img/Group 57.png" height={40} width={50} />
                        <h5 style={{textAlign: 'center', marginTop: 20}}>weFund@gmail.com</h5>
                    </center></div>
                    <div className="col-4" style={{marginTop: 20}}>
                    <center>
                        <img src="../static/img/Group 58.png" height={40} width={50} />
                        <h5 style={{textAlign: 'center', marginTop: 20}}>Algiers,Algeria</h5>
                    </center></div></div>
                <hr className="whiteline" /> 
                <center><bottom> Copyright @ 2020 WeFund. All rights reserved. </bottom></center>
                </div>
            </div>
          </div>

           
        )
    }
}
export default Footer;