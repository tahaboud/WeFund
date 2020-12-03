import React, {Component} from 'react'
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import Confirm from './Confirm';
export class MultiStepFormEvent extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    natioanlCardId: '',
    titleDocument: '',
    dateDocument: '',
    sourceDocument: '',
    descriptionDocument: '',
    attachDocument: '',
    ccp: '',
    visaId: ''
  }
  // Proceed to next step
  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    })
  }
  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const {step} = this.state;
    const {
      firstName,
      lastName,
      email,
      mobile,
      natioanlCardId,
      titleDocument,
      dateDocument,
      sourceDocument,
      descriptionDocument,
      attachDocument,
      ccp,
      visaId
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      mobile,
      natioanlCardId,
      titleDocument,
      dateDocument,
      sourceDocument,
      descriptionDocument,
      attachDocument,
      ccp,
      visaId
    }
    switch (step) {
      case 1:
        return (
          <div>
            <Part1 nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>
          </div>
        )
      case 2:
        return (
          <div>
            <Part2 nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>
          </div>
        )
      case 3:
        return (<Part3 nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>)
      case 4:
        return (<Part4 nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>)
      case 5:
        return (<Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values}/>);
    }

  }
}

export default MultiStepFormEvent;
