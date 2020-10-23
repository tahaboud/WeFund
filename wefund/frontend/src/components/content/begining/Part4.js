import React, {Component, component} from 'react';

class Part4 extends Component {
  state = {}

  render() {
    return (
      <div>
        <center>
          <div className="four">
            <div className="conatiner">
              <div className="row">
                <div className="col-2"></div>
                <div className="col-3">
                  <div className="right">
                    <img src="../static/img/Rectangle 210.png" height={80} width={80}/>
                    <img src="../static/img/Rectangle 211.png" height={200} width={200}/>
                    <img src="../static/img/Rectangle 213.png" height={60} width={60} id="circle"/>
                    <img src="../static/img/Rectangle 212.png" height={130} width={130} id="rec"/>
                    <img src="../static/img/Rectangle 214.png" height={60} width={60} id="cb"/>
                  </div>
                </div>
                <div className="col-2">
                  <div className="right1">
                    <img src="../static/img/Rectangle 215.png" height={60} width={60}/>
                    <img src="../static/img/Rectangle 216.png" height={60} width={60}/>
                    <h4>
                      Our Partners
                    </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique
                      pellentesque nisl nec mollis.
                    </p>
                    <img src="../static/img/Rectangle 221.png" height={60} width={60}/>
                    <img src="../static/img/Rectangle 222.png" height={60} width={60}/>
                  </div>
                </div>
                <div className="col-1">
                  <div className="right2">
                    <img src="../static/img/Rectangle 217.png" height={60} width={60}/>
                    <img src="../static/img/Rectangle 218.png" height={60} width={60} id="s"/>
                  </div>
                </div>
                <div className="col-1">
                  <div className="right2">
                    <img src="../static/img/Rectangle 219.png" height={60} width={60} id="s1"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    );
  }

}
export default Part4;