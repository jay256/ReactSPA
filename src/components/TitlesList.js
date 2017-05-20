/**
 * Created by jay on 3/5/17.
 */
import React from 'react';
import { ListGroup, ListGroupItem, ProgressBar, FormGroup, FormControl, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import EnterTitle from './EnterTitle';

class TitlesList extends React.Component
{
  constructor(props)
  {
    super(props);

    if (0 === this.props.titles.length) {
      this.props.dispatch({
        type: 'titlesFetchList',
      });
    }
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  render()
  {
    if(this.props.titles.length){
      return(
        <div>
          <div className="titlelist">
            <ListGroup>
              {this.props.titles.map((title,index) => {
                return(
                  <ListGroupItem key={index} title={title.title} onClick={this.handleTitleClick}><Image src="https://api.adorable.io/avatars/285/abott@adorable.io.png" circle thumbnail width={20} height={20} />&nbsp;&nbsp;&nbsp;&nbsp;{title.title}</ListGroupItem>
                );
              })}
            </ListGroup>
          </div>
            <EnterTitle />
        </div>
      );
    }else{
      return(
        <div className="titlelist">
          <ProgressBar active now={100}/>
          <EnterTitle />
        </div>
      );
    }
  }

  handleTitleClick(event){
    const title = event.target.title;
    this.props.dispatch({
       type: 'titlesReducer.titleClick',
       title: title,
    });
  }
}

function mapStateToProps(state) {
  return({
    titles: state.titlesReducer.list || [],
  });
}

export default connect(mapStateToProps)(TitlesList);
