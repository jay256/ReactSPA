/**
 * Created by jay on 9/5/17.
 */
import React from 'react';
import { Navbar } from 'react-bootstrap';

export default class NavBar extends React.Component
{
  render()
  {
    return(
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Glowing IO</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}
