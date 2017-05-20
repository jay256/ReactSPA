/**
 * Created by jay on 12/5/17.
 */
import React from 'react';
import { Image, Button, Row, Col, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

class TitleBar extends React.Component
{

  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render(){
    const currentTitle = this.props.currentTitle;
    return(
      <div className="titlebar">
        <Row>
          <Col xs={2} md={2}>
            <Image src="https://api.adorable.io/avatars/285/abott@adorable.io.png" circle height={80} width={80}/>
          </Col>
          <Col xs={8} md={6}>
            <h1>{currentTitle}</h1>
          </Col>
          <Col xs={8} md={3}>
            <Button onClick={this.handleDelete}>Delete <Glyphicon glyph="remove-circle"/></Button>
          </Col>
        </Row>
        <br/>
      </div>
    );
  }

  handleDelete(event){
    this.props.dispatch({
      type: 'titlesReducer.deleteTitle',
      title: this.props.currentTitle,
    });
  }
}

function mapStateToProps(state){
  return({
    currentTitle: state.titlesReducer.currentTitle,
  });
}

export default connect(mapStateToProps)(TitleBar);
