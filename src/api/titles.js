/**
 * Created by jay on 8/5/17.
 */
export default class TitlesApi
{
  static getList(action)
  {
    const timeout = 1000;   // 1 second delay;
    return new Promise(resolve => {
      setTimeout(() => {
        // build some dummy titles list
        let titles = [];
        for(let i=1; i<5; i++){
          titles.push({
            title: "Title " + i,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          });
        }
        resolve(titles);
      }, timeout);
    });
  }
}
