import React, {Component} from 'react'
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';
import Confirm from './Confirm';

export class MultiStepFormEvent extends Component {
  state = {
    step: 1,
    id_card_number: '',
    id_card_copy: '',
    date_of_birth: '',
    degree: '',
    organisation: '',
    cv: '',
    title: '',
    searchtype: '',
    searchDate: '',
    source: '',
    description: '',
    INVP: 'Investor',
    PIHP: 'Project Idea Holder',
    AASP: 'Researcher With Academic Applied Study',
    user_type: '',
    INVS: 'investements',
    RAC: 'ResearchTeams,Academic,Collaborators',
    FAG: 'FundingAndGrants',
    looking_for: '',
    CSRR: 'Copyright Saving / Research Registration',
    QHRA: 'Quality Human Resources Abilities',
    IFLO: 'International Focused Learning Oprotunities',
    interested_in: '',
    type_of_support: '',
    type_of_collaboration: '',
    paper: ''
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
  handleChangeOnclick1 = input => e => {
    switch (e.target.value) {
      case 'Investor':
        this.setState({user_type:'INV'});
      case 'Project Idea Holder':
        this.setState({user_type: 'PIH'});
      case 'Researcher With Academic Applied Study':
        this.setState({user_type: 'AAS'});
    }
  };
  handleChangeOnclick2 = input => e => {
   
    switch (e.target.value) {
      case 'investements':
        this.setState({looking_for:'INV'});
      case 'ResearchTeams,Academic,Collaborators':
        this.setState({looking_for: 'RAC'});
      case 'FundingAndGrants':
        this.setState({looking_for: 'FAG'});
    }
  };
  handleChangeOnclick3 = input => e => {
  
    switch (e.target.value) {
      case 'Copyright Saving / Research Registration':
        this.setState({interested_in:'CSRR'});
      case 'Quality Human Resources Abilities':
        this.setState({interested_in: 'QHRA'});
      case 'International Focused Learning Oprotunities':
        this.setState({interested_in: 'IFLO'});
    }
  };
  render() {
    const {step} = this.state;
    const {
      id_card_number,
      id_card_copy,
      date_of_birth,
      degree,
      cv,
      organisation,
      title,
      searchtype,
      searchDate,
      source,
      description,
      INVP,
      PIHP,
      AASP,
      user_type,
      INVS,
      RAC,
      FAG,
      looking_for,
      CSRR,
      QHRA,
      IFLO,
      interested_in,
      type_of_support,
      type_of_collaboration,
      paper
    } = this.state;
    const values = {
      id_card_number,
      id_card_copy,
      date_of_birth,
      degree,
      cv,
      organisation,
      title,
      searchtype,
      searchDate,
      source,
      description,
      INVP,
      PIHP,
      AASP,
      user_type,
      INVS,
      RAC,
      FAG,
      looking_for,
      CSRR,
      QHRA,
      IFLO,
      interested_in,
      type_of_support,
      type_of_collaboration,
      paper
    }
    switch (step) {
      case 1:
        return (
          <div>
            <Step1
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}/>
          </div>
        )
      case 2:
        return (
          <div>
            <Step2
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              handleChangeOnclick1={this.handleChangeOnclick1}
              values={values}/>
          </div>
        )
      case 3:
        return (<Step3
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          handleChangeOnclick2={this.handleChangeOnclick2}
          values={values}/>)
      case 4:
        return (<Step4
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          handleChangeOnclick3={this.handleChangeOnclick3}
          values={values}/>)
      case 5:
        return (<Step5
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}/>);
    }

  }
}

export default MultiStepFormEvent;
