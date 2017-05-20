/**
 * Created by jay on 12/5/17.
 */
import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

class EnterTitle extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = { newTitle: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render(){
    return(
      <div className="entertitle">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formBasicText">
            <FormControl type="text" placeholder="Enter new title" onChange={this.handleChange}/>
            <FormControl.Feedback />
          </FormGroup>
        </form>
      </div>
    );
  }

  handleSubmit(event){
    //console.log(this.state.newTitle);
    this.props.dispatch({
      type: 'titlesReducer.enterNewTitle',
      title: this.state.newTitle,
    });
    event.preventDefault();
  }

  handleChange(event){
    this.setState({newTitle: event.target.value});
  }
}

export default connect()(EnterTitle);
