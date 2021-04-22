import React, { Component } from 'react'
import { connect} from "react-redux";
import { selectLanguage } from '../actions/languageSelection';

import './FirstPage.scss'


class FirstPage extends Component {
 
  render() {
      const { selectLanguage } = this.props

    return (
      <div className = "FirstPage">
          <div className = "FirstPage__title">Please, choose a translation language:</div>
          <div className = "FirstPage__button">
            <button className="button--ukr" onClick={() => selectLanguage("ukr")}>UKR</button>
            <button onClick={() => selectLanguage("rus")}>RUS</button>
          </div>
    </div>
    )
  }
}
// function mapDispatchToProps(dispatch) {
//     return {
//         languageSelection: bindActionCreators(languageSelection, dispatch)
//     }
// }

const mapDispatchToProps = {
    selectLanguage
}

export default connect(null, mapDispatchToProps)(FirstPage)