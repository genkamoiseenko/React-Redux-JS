import React, { Component } from 'react'
import CheckBlock from './CheckBlock/CheckBlock';
import ButtonBlock from './ButtonBlock/ButtonBlock';
import WordsBlock from './WordsBlock/WordsBlock';
import {connect} from "react-redux";
import {setPassedCounter} from "../actions/setPassedCounter";
import {setFailedCounter} from "../actions/setFailedCounter";
import {counterAfterCheck} from "../actions/failedCounterAfterCheck";
import {generateNewWords} from "../actions/generatedNewWords";
import {checkUserAnswer} from "../actions/checkUserAnswer";
import {setIsValidWords} from "../actions/resetIsValidWords";

import './SecondPage.scss';

class SecondPage extends Component {
  
   state = {
     inputValues: [],
     inputWord: false,
     open: false,
     vertical: 'top',
     horizontal: 'center',
  }

  componentWillMount() {
    const {generateNewWords} = this.props
    const {language}=this.props.match.params
    generateNewWords(language)
  }

  setWordsOnChange = (inputValues) => {
    this.setState ({
      inputValues: inputValues.map(item => item.trim())
    })
  }

  nextWordInit = () => {
    const {generateNewWords, setIsValidWords} = this.props
    const {language}=this.props.match.params

    this.setState({
      inputValues: [],
      inputWord: false,
    })
    setIsValidWords()
    generateNewWords(language)

  }

  compareInputsValuesWithRandomArray = () => {

    const { checkUserAnswer,generatedArray} = this.props;
    const {inputValues} =this.state
    // alert(2);

    const actionData = checkUserAnswer (inputValues, generatedArray);
    // if(checkUserAnswer === true) {
    //   alert('молодец!')
    // } else {
    //   alert('ну ты и тупой!')
    // }
    this.counter(actionData.payload)
    // alert(2);
  }


  counter = (isValidWords) => {
    const {setPassedCounter, setFailedCounter, counterAfterCheck, passedCounter, failedCounter} = this.props;
    const {inputWord} = this.state;

    if(isValidWords) {
      if(inputWord === false) {
        setPassedCounter(passedCounter)
      }
      this.nextWordInit();
    } else {
      if (inputWord === true) {
        counterAfterCheck(failedCounter)
      } else {
        setFailedCounter(failedCounter)
        this.setState({
          inputWord: true
        })
      }
    }
  }

  // handleClose = () => {
  //   this.setState({
  //     ...this.state,
  //     open: false
  //   });
  // };

  render() {
    // const{vertical, horizontal, open}=this.state

    return (
      <div className = "SecondPage">

        {/*<ExitToAppOutlinedIcon fontSize="large"></ExitToAppOutlinedIcon>*/}
        <WordsBlock
          setWordsOnChange={this.setWordsOnChange}
          checkAnswer={this.compareInputsValuesWithRandomArray}
        />
        <ButtonBlock
          checkAnswer={this.compareInputsValuesWithRandomArray}
        />
        <CheckBlock />
        {/*{checkUserAnswer && <Snackbar*/}
        {/*    anchorOrigin={{ vertical, horizontal }}*/}
        {/*    open={open}*/}
        {/*    onClose={this.handleClose}*/}
        {/*    message="Great!"*/}
        {/*    key={vertical + horizontal}*/}
        {/*/>}*/}

        {/*{!checkUserAnswer && <Snackbar*/}
        {/*    anchorOrigin={{ vertical, horizontal }}*/}
        {/*    open={open}*/}
        {/*    onClose={this.handleClose}*/}
        {/*    message="Great!"*/}
        {/*    key={vertical + horizontal}*/}
        {/*/>}*/}
    </div>
    )
  }
}

function mapStateToProps(state) {

  return {
    language: state.language,
    generatedArray: state.secondPageReducers.generatedArray,
    isValidWords: state.secondPageReducers.isValidWords,
    passedCounter: state.secondPageReducers.passedCounter,
    failedCounter: state.secondPageReducers.failedCounter,
  }
}

const mapDispatchToProps = {
  setPassedCounter,
  setFailedCounter,
  counterAfterCheck,
  generateNewWords,
  checkUserAnswer,
  setIsValidWords,
}

export default connect(mapStateToProps, mapDispatchToProps) (SecondPage);


