import { Component } from "react";
import { connect } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import Navigation from './Navigation/Navigation';
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';

import './App.scss';

class App extends Component {

  render() {
    const { language } = this.props.language;

    return (

      <div className="App">
          <div className="AppWrapper">
              <div className="AppWrapper__content">
                  {/*<Navigation*/}
                  {/*    language={language}*/}
                  {/*/>*/}
          <Router>
              <Switch>

                  <Route path="/:language" component={SecondPage}/>
                  <Route path="" component={FirstPage}/>
              </Switch>

          </Router>
              </div>
          </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    language: state.language,
  }
}

export default connect(mapStateToProps) (App);

