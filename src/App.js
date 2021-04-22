import { Component } from "react";
import Navigation from './Navigation/Navigation';
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
import { connect } from "react-redux";

import './App.scss';

class App extends Component {

  render() {
    const { language } = this.props.language;

    return (

      <div className="App">
        <Navigation
          language={language}
        />
        <div className="AppWrapper">
          <div className="AppWrapper__content">
            {!language && <FirstPage
              language={language}
            />}
            
            {language && <SecondPage
              language={language}
            />}
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

