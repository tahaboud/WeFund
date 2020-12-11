import React, {Component} from 'react'
import Part0 from './Part0';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import Part5 from './Part5';
import Part6 from './Part6';

export class MultiStepFormEvent extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
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
    this.setState({[input]: e.target.value});
  };
  render() {
    const {step} = this.state;
    const {
      firstName,
      lastName,
      first_name,
      last_name,
      email,
      password,
      password2,
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
      first_name,
      last_name,
      email,
      password,
      password2,
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
            <Part0
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}/>
          </div>
        )
      case 2:
        return (
          <div>
            <Part2
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}/>
          </div>
        )
      case 3:
        return (<Part3
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}/>)
      case 4:
        return (<Part4
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}/>)
      case 5:
        return (<Part5 nextStep={this.nextStep} prevStep={this.prevStep} values={values}/>);
      case 6:
        return (<Part6 nextStep={this.nextStep} prevStep={this.prevStep} values={values}/>);
    }

  }
}

export default MultiStepFormEvent;
