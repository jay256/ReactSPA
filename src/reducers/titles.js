/**
 * Created by jay on 4/5/17.
 */
import { reducerCall } from './index';

export default function titles(state = {}, action) {
  return reducerCall(state, action, reducerClass);
}

class reducerClass
{
  static fetchTitleListSuccess(new_state, action)
  {
    new_state.list = action.titles;
    new_state.currentTitle = 'Title 1';
    let currContent;
    for(const titles of new_state.list){
      if('Title 1' === titles.title){
        currContent = titles.content;
        break;
      }
    }
    new_state.currentContent = currContent;
    return new_state;
  }

  static titleClick(new_state, action){
    new_state.currentTitle = action.title;
    let currContent;
    for(const titles of new_state.list){
      if(action.title === titles.title){
        currContent = titles.content;
        break;
      }
    }
    new_state.currentContent = currContent;
    return new_state;
  }

  static enterNewTitle(new_state, action){
    if(new_state.list.length){
      for(const titles of new_state.list){
        if(action.title === titles.title){
          alert('Title already exists');
          return new_state;
        }
      }
      new_state.list.push({
        title: action.title,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      });
    }
    else {
      let title = [
        {
          title: action.title,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ]
      new_state.list = title;
      new_state.currentTitle = title.title;
    }
    return new_state;
  }

  static deleteTitle(new_state, action){
    for(const index in new_state.list){
      if(new_state.list[index].title === action.title){
        new_state.list.splice(index, 1);
        break;
      }
    }
    if(new_state.list.length){
      new_state.currentTitle = new_state.list[0].title;
    }
    else{
      new_state.list = {};
      new_state.currentTitle = '';
      new_state.currentContent = '';
    }
    return new_state;
  }
}
