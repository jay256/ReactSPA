/**
 * Created by jay on 12/5/17.
 */
import React from 'react';

export default class Content extends React.Component
{

  static get propTypes()
  {
    return {
      content: React.PropTypes.string.isRequired,
    };
  }

  render()
  {
    return(
      <div className="content">
        <p>
          {this.props.content}
        </p>
      </div>
    );
  }
}
