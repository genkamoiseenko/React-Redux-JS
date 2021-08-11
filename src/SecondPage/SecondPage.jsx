import React, { Component } from 'react'
// import CheckBlock from './CheckBlock/CheckBlock';
import ButtonBlock from './ButtonBlock/ButtonBlock';
import WordsBlock from './WordsBlock/WordsBlock';
import {connect} from "react-redux";
import {setPassedCounter} from "../actions/setPassedCounter";
import {setFailedCounter} from "../actions/setFailedCounter";
import {counterAfterCheck} from "../actions/failedCounterAfterCheck";
import {generateNewWordsPackAction, getNewWordFromPackAction} from "../actions/generatedNewWords";
import {checkUserAnswer} from "../actions/checkUserAnswer";
import {setIsValidWords} from "../actions/resetIsValidWords";
import {zeroPassedCounterAfterCheckAllPack} from "../actions/zeroPassedCounterAfterCheckAllPack";
import {zeroFailedCounterAfterCheckAllPack} from "../actions/zeroFailedCounterAfterCheckAllPack";

import './SecondPage.scss';
import {keys} from "@material-ui/core/styles/createBreakpoints";

class SecondPage extends Component {
  
   state = {
     inputValues: [],
     inputWord: false,
     // wordsEnd: false,
     // failedArrays: [],
  }

  componentWillMount() {
    const {generateNewWordsPackAction, generatedArray} = this.props
    const {language}=this.props.match.params
    // generateNewWords(language)
    generateNewWordsPackAction(language);
    // var simpleArray = generatedArray.join(',')
    // localStorage.setItem('language', language )
    // localStorage.setItem('generatedArray',simpleArray )
    // localStorage.removeItem('generatedArray')
    //   localStorage.clear()


  }

  resetValueOfWordsEnd =(wordsEnd) => {
     this.setState({
       wordsEnd: false
     })
  }
  resetInputValuesAndWord = (inputValues, inputWord) => {
    this.setState({
        inputValues: [],
        inputWord: false,
      })
  }

  setWordsOnChange = (inputValues) => {
    this.setState ({
      inputValues: inputValues.map(item => item.trim())
    })
  }

  nextWordInit = () => {

    const {
      setIsValidWords,
      generatedArrayPack,
      getNewWordFromPackAction,
      // generateNewWordsPackAction,
      // language,
    } = this.props
    // const {wordsEnd, failedArrays} = this.state
    // console.log(generatedArrayPack.length)


    if (generatedArrayPack.length === 0) {
      // generateNewWordsPackAction(language)
      // if (failedArrays !== []) {
      //   localStorage.setItem('failedWords', JSON.stringify(failedArrays))
      // }
      this.setState({
        wordsEnd: true,
      })
    } else {
      this.resetInputValuesAndWord()
      setIsValidWords()
      getNewWordFromPackAction(generatedArrayPack)
    }

    // this.setState({
    //   inputValues: [],
    //   inputWord: false,
    // })
    // setIsValidWords()

  }


    // generateNewWordsPackAction(language)
      // generateNewWords(language)

    // if (wordsCount === 0) {
    //   generateNewWords(language);
    //   const generatedNextWord = generatedArray[Math.floor(Math.random() * generatedArray.length)]
    //   generatedArray.splice(generatedArray.indexOf(generatedNextWord), 1)
    //   wordsCount++
    // } else if (wordsCount === 5) {
    // alert("усьо")
    // } else {
    //   const generatedNextWord = generatedArray[Math.floor(Math.random() * generatedArray.length)]
    //   generatedArray.splice(generatedArray.indexOf(generatedNextWord), 1)
    //   wordsCount++
    // }

  compareInputsValuesWithRandomArray = (callback) => {

    const { checkUserAnswer,generatedArray} = this.props;
    const {inputValues} =this.state;

    const actionData = checkUserAnswer (inputValues, generatedArray);
    // console.log(generatedArray)

    if(actionData.payload) {
      callback && callback(actionData.payload);
    }

    this.counter(actionData.payload)
  }


  counter = (isValidWords) => {

    const {
      setPassedCounter,
      setFailedCounter,
      counterAfterCheck,
      passedCounter,
      failedCounter,
      zeroPassedCounterAfterCheckAllPack,
      zeroFailedCounterAfterCheckAllPack,
      generatedArrayPack,
      // generatedArray,

    } = this.props;
    const {inputWord} = this.state;

    // console.log(inputWord, isValidWords)

    if (isValidWords) {

      if (inputWord === false) {
        setPassedCounter(passedCounter)
      }
      this.nextWordInit();
    } else {
      if (inputWord === true) {
        counterAfterCheck(failedCounter)
      } else {
        setFailedCounter(failedCounter)
        // failedArrays.push(generatedArray)
        // this.deleteCorrectWordFromLocalStorage()

        // const previousErrors = localStorage.getItem('failedWords')
        // const previousErrorsArray = JSON.parse(previousErrors)
        // if (inputWord === previousErrorsArray[0]) {
        //   previousErrorsArray.splice(0,1)
        //   for (let i = 0; i < previousErrorsArray.length; i++) {
        //     failedArrays.push(previousErrorsArray[i])
        //   }
        //   localStorage.clear()
        // }
        // localStorage.setItem(failedCounter, generatedArray)
        // failedArrays.push((localStorage.getItem(failedCounter)).split(','))

        this.setState({
          inputWord: true
        })
      }
    }


    // for (let i = 0; i <= failedCounter; i++) {
    //   failedArrays.push((localStorage.getItem(i.toString())).split(','))
    // }
    // console.log(failedArrays)

    if (generatedArrayPack.length === 0) {
      if (passedCounter === 0) {
        zeroPassedCounterAfterCheckAllPack()
      } else if(failedCounter === 0) {
        zeroFailedCounterAfterCheckAllPack()
      }
    }

    // console.log(isValidWords)
  }

//   deleteCorrectWordFromLocalStorage = () => {
//     const {inputWord, failedArrays} = this.state;
//     const previousErrors = localStorage.getItem('failedWords');
//     const previousErrorsArray = JSON.parse(previousErrors);
//
//     if (inputWord === previousErrorsArray[0]) {
//       previousErrorsArray.splice(0,1)
//       if(previousErrorsArray.length !== 0) {
//         for (let i = 0; i < previousErrorsArray.length; i++) {
//           failedArrays.push(previousErrorsArray[i])
//         }
//       }
//       localStorage.clear()
//     }
// }


  render() {
// console.log(this.props.isValidWords)
    const {wordsEnd} = this.state
    return (
      <div className = "SecondPage">
        <WordsBlock
          setWordsOnChange={this.setWordsOnChange}
          checkAnswer={this.compareInputsValuesWithRandomArray}
        />
        <ButtonBlock
          checkAnswer={this.compareInputsValuesWithRandomArray}
          resetValueOfWordsEnd={this.resetValueOfWordsEnd}
          resetInputValuesAndWord={this.resetInputValuesAndWord}
          wordsEnd={wordsEnd}
        />
        {/*<CheckBlock />*/}
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
    generatedArrayPack: state.secondPageReducers.generatedArrayPack,

  }
}

const mapDispatchToProps = {
  setPassedCounter,
  setFailedCounter,
  counterAfterCheck,
  generateNewWordsPackAction,
  getNewWordFromPackAction,
  checkUserAnswer,
  setIsValidWords,
  zeroPassedCounterAfterCheckAllPack,
  zeroFailedCounterAfterCheckAllPack,
}

export default connect(mapStateToProps, mapDispatchToProps) (SecondPage);



// console.log(failedCounter)
// localStorage.removeItem('false' )
// for (let i = 0; i <=failedCounter; i++) {
//   localStorage.setItem(i.toString(), generatedArray )
//
// }
// falseArray.push(generatedArray)
// console.log(falseArray)
// localStorage.setItem('false', falseArray )
