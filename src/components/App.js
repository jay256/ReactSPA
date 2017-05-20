/**
 * Created by jay on 2/5/17.
 */
import React from 'react';

export default class App extends React.Component
{
  render()
  {
    return(
      <div className="container">
          {this.props.children}
      </div>
    );
  }
}
