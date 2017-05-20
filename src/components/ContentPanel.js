/**
 * Created by jay on 12/5/17.
 */
import React from 'react';
import TitleBar from './TitleBar';
import Content from './Content';
import { connect } from 'react-redux';

class ContentPanel extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(
      <div className="contentpanel">
        <TitleBar />
        <Content content={this.props.currentContent}/>
      </div>
    );
  }

}

function mapStateToProps(state)
{
  return({
    currentContent: state.titlesReducer.currentContent,
  });
}

export default connect(mapStateToProps)(ContentPanel);
