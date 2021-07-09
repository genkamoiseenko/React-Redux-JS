import React, { Component } from 'react'
import { connect} from "react-redux";
import { selectLanguage } from '../actions/languageSelection';

import './FirstPage.scss'


class FirstPage extends Component {
 
  render() {
      const { selectLanguage } = this.props
    const onChangeLanguage = (language) => () => {
        selectLanguage(language);
        this.props.history.push(`/${language}`);
    }
    return (
      <div className = "FirstPage">
          <div className = "FirstPage__title">Please, choose a translation language:</div>
          <div className = "FirstPage__button">
              <img src="image/ua.png" className="button--ukr" onClick={onChangeLanguage("ukr")} />
              <img src="image/ru.png" onClick={onChangeLanguage("ru")} />
          </div>
    </div>
    )
  }
}


const mapDispatchToProps = {
    selectLanguage
}

export default connect(null, mapDispatchToProps)(FirstPage)

