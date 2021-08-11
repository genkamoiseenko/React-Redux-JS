import React, { Component } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import { selectLanguage } from '../actions/languageSelection';
import {connect} from "react-redux";
import CheckBlock from "../FirstPage/CheckBlock/CheckBlock";
import HomeIcon from '@material-ui/icons/Home';

import './Navigation.scss';

class Navigation extends Component {
  state = {
    open: false,
    vertical: 'top',
    horizontal: 'center',
  }

  handleClick = (newState) => () => {
    this.setState({ 
      open: true, 
      ...newState });
  };

  handleClose = () => {
    this.setState({ 
      ...this.state, 
      open: false 
    });
  };

  // notification = () => {
  //   alert("select a language first")
  // }

  render() {

    const { language } = this.props.language
    const { selectLanguage } = this.props
    const{vertical, horizontal, open}=this.state

    return (

      <div className="Navigation">
        {/*<button*/}
        {/*    className="Navigation__button"*/}
        {/*    onClick={() => alert("Меню працює")}>*/}
          {/*<MenuIcon*/}
          {/*    className="Navigation__menuIcon"*/}
          {/*/>*/}
        {/*  <HomeIcon*/}
        {/*      className="Navigation__homeIcon"*/}
        {/*  />*/}
        {/*</button>*/}
        {/*<MenuIcon*/}
        {/*className="Navigation__menuIcon"*/}
        {/*/>*/}
        {/*<div className="Navigation__buttons">*/}
        {/*<button onClick={() => selectLanguage(null)}>HOME</button>*/}
        {/*<button onClick={this.handleClick({ vertical: 'bottom', horizontal: 'left' })}>TEST</button>*/}
        {/*{!language && <Snackbar*/}
        {/*  anchorOrigin={{ vertical, horizontal }}*/}
        {/*  open={open}*/}
        {/*  onClose={this.handleClose}*/}
        {/*  message="Select a language first"*/}
        {/*  key={vertical + horizontal}*/}
        {/*/>}*/}

        {/*{language && <Snackbar*/}
        {/*  anchorOrigin={{ vertical, horizontal }}*/}
        {/*  open={open}*/}
        {/*  onClose={this.handleClose}*/}
        {/*  message="You are already taking the test"*/}
        {/*  key={vertical + horizontal}*/}
        {/*/>}*/}
        {/*</div>*/}
        <div className="Navigation__score">
        {language && <CheckBlock />}
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    language: state.language,
  }
}


const mapDispatchToProps = {
  selectLanguage
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)


