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

  compareInputsValuesWithRandomArray = (callback) => {

    const { checkUserAnswer,generatedArray} = this.props;
    const {inputValues} =this.state

    const actionData = checkUserAnswer (inputValues, generatedArray);

    if(actionData.payload) {
      callback && callback(actionData.payload);
    }

    this.counter(actionData.payload)
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
    console.log(isValidWords)
  }


  render() {
console.log(this.props.isValidWords)
    return (
      <div className = "SecondPage">
        <WordsBlock
          setWordsOnChange={this.setWordsOnChange}
          checkAnswer={this.compareInputsValuesWithRandomArray}
        />
        <ButtonBlock
          checkAnswer={this.compareInputsValuesWithRandomArray}
        />
        <CheckBlock />
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


