/**
 * Created by jay on 9/5/17.
 */
import React from 'react';
import TitlesList from './TitlesList';

export default class SidePanel extends React.Component
{

  render()
  {
    return(
      <div className="sidepanel">
        <TitlesList />
      </div>
    );
  }

}
