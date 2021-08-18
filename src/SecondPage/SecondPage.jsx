import React, { Component } from 'react'
// nmp i lodash
// import _ from 'lodash'
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
     wordsEnd: false,
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
     const {wordsEnd, failedArrays} = this.state
    // console.log(generatedArrayPack.length)


    if (generatedArrayPack.length === 0) {

        // this.deleteCorrectWordFromLocalStorage()


      // localStorage.clear()
      //    localStorage.setItem('failedWords', JSON.stringify(failedArrays))
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
      generatedArray,
    } = this.props;

    const {inputWord} = this.state;
    const previousErrors = localStorage.getItem('failedWords');
    const previousErrorsArray = JSON.parse(previousErrors);

    if (isValidWords) {

      if (inputWord === false) {
        setPassedCounter(passedCounter)

        console.log('>>>',1);

        if (previousErrorsArray.length !== 0) {
          console.log('>>>',2);

            if (JSON.stringify(generatedArray) === JSON.stringify(previousErrorsArray[0])) {

              previousErrorsArray.splice(0, 1)
              console.log('я працюю')
              console.log(previousErrorsArray.length)

                localStorage.setItem('failedWords', JSON.stringify(previousErrorsArray))

            }

           }
        }
      this.nextWordInit();
    } else {
      if (inputWord === true) {
        counterAfterCheck(failedCounter)
      } else {
        setFailedCounter(failedCounter)
        let failedArrays = []
         if(localStorage.length === 0) {
          failedArrays.push(generatedArray)
           localStorage.setItem('failedWords', JSON.stringify(failedArrays))
         } else {
           if(JSON.stringify(generatedArray) !== JSON.stringify(previousErrorsArray[0]))

           previousErrorsArray.push(generatedArray)
           localStorage.clear()
           localStorage.setItem('failedWords',JSON.stringify(previousErrorsArray) )
         }

        this.setState({
          inputWord: true
        })
      }
    }

    if (generatedArrayPack.length === 0) {
      if (passedCounter === 0) {
        zeroPassedCounterAfterCheckAllPack()
      }
      if (failedCounter === 0 && previousErrorsArray.length === 0 ){
        zeroFailedCounterAfterCheckAllPack()
        localStorage.clear()
      }
    }

    // console.log(isValidWords)
  }

  // deleteCorrectWordFromLocalStorage = () => {
  //   const {failedArrays} = this.state;
  //   const {isValidWords, generatedArray} = this.props;
  //   const previousErrors = localStorage.getItem('failedWords');
  //   const previousErrorsArray = JSON.parse(previousErrors);
  //   console.log(isValidWords)
  //   console.log(failedArrays)
  //
  //
  //     if(localStorage.length !== 0 ) {
  //       if (isValidWords) {
  //         if (previousErrorsArray.length === 1) {
  //           localStorage.clear()
  //           // if (failedArrays.length !== 0) {
  //           //   localStorage.setItem('failedWords', JSON.stringify(failedArrays))
  //           // }
  //         } else {
  //           previousErrorsArray.splice(0, 1)
  //           localStorage.clear()
  //           localStorage.setItem('failedWords', JSON.stringify(previousErrorsArray))
  //         }
  //       }
  //        else {
  //         this.setState({
  //           failedArrays: []
  //         })
  //         for (let i = 0; i < previousErrorsArray.length; i++) {
  //           failedArrays.push(previousErrorsArray[i])
  //         }
  //         // localStorage.clear()
  //         localStorage.setItem('failedWords', JSON.stringify(failedArrays))
  //       }


          // if (localStorage.length === 0){
          //   failedArrays.push(generatedArray)
          //   localStorage.setItem('failedWords', JSON.stringify(failedArrays))
          // } else if (previousErrorsArray.length === 1) {
          //   failedArrays.push(previousErrorsArray[0])
          //   localStorage.clear()
          //   localStorage.setItem('failedWords', JSON.stringify(failedArrays))
        //   } else {
        //     for (let i = 0; i < previousErrorsArray.length; i++) {
        //       failedArrays.push(previousErrorsArray[i])
        //     }
        //     localStorage.clear()
        //     localStorage.setItem('failedWords', JSON.stringify(failedArrays))
        //   }
        // }
      // } else {
      //   if (isValidWords) {
      //     // failedArrays.push(generatedArray)
      //     localStorage.setItem('failedWords', JSON.stringify(failedArrays))
      //   } else {
      //     failedArrays.push(generatedArray)
      //     localStorage.setItem('failedWords', JSON.stringify(failedArrays))
      //   }
      // }
    // }
    //   if (!isValidWords && previousErrorsArray.length >1) {
    //   previousErrorsArray.splice(0, 1)
    //   for (let i = 0; i < previousErrorsArray.length; i++) {
    //     failedArrays.push(previousErrorsArray[i])
    //   }
    //
    //    // localStorage.clear()
    // }
    // localStorage.clear()
      // if(failedArrays === []) {
      //   localStorage.clear()
      // }
    // }
    // localStorage.clear()
     // if (localStorage.length !== 0 || []) {
     //   previousErrorsArray.splice(0, 1)
       // if (inputWord === previousErrorsArray[0]) {
       // previousErrorsArray.splice(0,1)
       // console.log((previousErrorsArray))
       // if (previousErrorsArray.length !== 0) {
       //   for (let i = 0; i < previousErrorsArray.length; i++) {
       //     failedArrays.push(previousErrorsArray[i])
       //   }
       // }
     // }




    // if (inputWord === previousErrorsArray[0]) {
    //   previousErrorsArray.splice(0,1)
    //   if(previousErrorsArray.length !== 0) {
    //     for (let i = 0; i < previousErrorsArray.length; i++) {
    //       failedArrays.push(previousErrorsArray[i])
    //     }
    //   }
    //   localStorage.clear()





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
