import React, { Component } from 'react'
import { connect} from "react-redux";
import Button from '@material-ui/core/Button';
import { selectLanguage } from '../actions/languageSelection';

import './FirstPage.scss'


class FirstPage extends Component {
 
  render() {
      const { selectLanguage } = this.props
    const onChangeLanguage = (language) => () => {
        selectLanguage(language);
        this.props.history.push(`/${language}`);

        // 'text ' + var + ' text';
        //
        // `text ${var} text`
    }
    return (
      <div className = "FirstPage">
          <div className = "FirstPage__title">Please, choose a translation language:</div>
          <div className = "FirstPage__button">
            <Button className="button--ukr" variant="outlined" size="medium" color="primary" onClick={onChangeLanguage("ukr")}>UKR</Button>
            <Button variant="outlined" size="medium" color="primary" onClick={onChangeLanguage("rus")}>RUS</Button>
          </div>
    </div>
    )
  }
}


const mapDispatchToProps = {
    selectLanguage
}

export default connect(null, mapDispatchToProps)(FirstPage)

