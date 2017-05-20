/**
 * Created by jay on 3/5/17.
 */
import React from 'react';
import SidePanel from '../components/SidePanel';
import NavBar from '../components/NavBar';
import ContentPanel from '../components/ContentPanel';
import { Col, Row } from 'react-bootstrap';

export default class Home extends React.Component
{

  render()
  {
    return(
      <div>
        <NavBar />
        <Row>
          <Col xs={3} md={3}>
            <SidePanel />
          </Col>
          <Col xs={15} md={9}>
            <ContentPanel />
          </Col>
        </Row>
      </div>
    );
  }

}
