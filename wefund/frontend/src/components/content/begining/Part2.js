import React, {useState, useEffect} from 'react';
// Import Images
import rectangle207 from "../../../../static/img/Rectangle 207.png";
import rectangle208 from "../../../../static/img/Rectangle 208.png";
import rectangle209 from "../../../../static/img/Rectangle 209.png";
import "./hover.css"
function Part2(props) {
  // const text="weFund SSR is an Algerian company that provides
  // functiong(Sponsoring or/and support to do their theorical studies and realize
  // their project idea.)"; const [Paragraphe, setParagraphe] = useState("weFund
  // SSR is an Algerian company that provides functiong(Sponsoring or/and support
  // to do their theorical studies and realize their project idea.)");
  // Intialiazing the Paragraphe with setParagraphe("aaa");
  const [state,
    setState] = useState({
    imgClass1: 200,
    imgClass2: 200,
    imgClass3: 200,
    content: "weFund SSR is an Algerian company that provides functiong(Sponsoring or/and supp" +
        "ort to do their theorical studies and realize their project idea.)"
  });
  //Declaring our arrow function
  const imgHover = (id) => {
    if (id == 1) 
      setState({
        imgClass1: 250,
        imgClass2: 200,
        imgClass3: 200,
        content: "weFund SSR is an Algerian company that provides functiong(Sponsoring or/and supp" +
            "ort to do their theorical studies and realize their project idea.)"
      })
    if (id == 2) 
      setState({imgClass2: 250, imgClass1: 200, imgClass3: 200, content: "We are willing to be a manufactuer of ideas & knowledge in the region,that cares about the quality learning and supporting academic research through our oppertunities,programs,grants & events."})
    if (id == 3) 
      setState({imgClass3: 250, imgClass1: 200, imgClass2: 200, content: "We are receiving academic researchers from several experts & ideas holders,and you too,you can expose us your academic research project idea to be able to get fund or support now! Thtought Wefund Support Scientific Research,you are willing to realize your project idea step by step."})

  }
  //albumleave
  const imgLeave = (id) => {
    if (id == 1) 
      setState({
        imgClass1: 200,
        imgClass2: 200,
        imgClass3: 200,
        content: "weFund SSR is an Algerian company that provides functiong(Sponsoring or/and supp" +
            "ort to do their theorical studies and realize their project idea.)"
      })
    if (id == 2) 
      setState({
        imgClass2: 200,
        imgClass1: 200,
        imgClass3: 200,
        content: "weFund SSR is an Algerian company that provides functiong(Sponsoring or/and supp" +
            "ort to do their theorical studies and realize their project idea.)"
      })
    if (id == 3) 
      setState({
        imgClass3: 200,
        imgClass2: 200,
        imgClass1: 200,
        content: "weFund SSR is an Algerian company that provides functiong(Sponsoring or/and supp" +
            "ort to do their theorical studies and realize their project idea.)"
      })

  }
  return (
    <div className="second">
      <center>
        <h4>
          What is WeFund
        </h4>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <img
                className={"image1"}
                height={state.imgClass1}
                width={state.imgClass1}
                src={rectangle207}
                onMouseOver={e => imgHover(1)}
                onMouseLeave={e => imgLeave(1)}/>
              <img
                className={"image2"}
                height={state.imgClass2}
                width={state.imgClass2}
                src={rectangle208}
                onMouseOver={e => imgHover(2)}
                onMouseLeave={e => imgLeave(2)}/>
              <img
                className={"image3"}
                height={state.imgClass3}
                width={state.imgClass3}
                src={rectangle209}
                onMouseOver={e => imgHover(3)}
                onMouseLeave={e => imgLeave(3)}/>
            </div>
            <div className="col-9">
              <p>
                {state.content}
              </p>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Part2;
