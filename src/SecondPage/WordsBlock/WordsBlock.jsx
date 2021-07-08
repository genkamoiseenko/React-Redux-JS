import React, { Component } from 'react'

import './WordsBlock.css'
import WordField from './WordField/WordField'
import {connect} from "react-redux";



class WordsBlock extends Component {
    
    state = {
        disabledIndex: Math.floor(Math.random()*4),
        filledWords: {
            0: '',
            1: '',
            2: '',
            3: '',
        },
    }

    componentDidMount() {
        this.setDisabledFieldValue()
        
    }  

    setDisabledFieldValue =() => {
        const { generatedArray } = this.props;
        const { filledWords, disabledIndex } = this.state;

        this.setState({
            filledWords: {
                ...filledWords,
                [disabledIndex]: generatedArray[disabledIndex]
            }
        })
    }

    wordsOnChange = () => {
        this.props.setWordsOnChange(Object.values(this.state.filledWords)) 
    }
      
    
    handleOnChange = (index) =>  (value) => {  
        this.setState({
            ...this.state,
            filledWords: {
                ...this.state.filledWords,
                [index]: value
            }
        }, this.wordsOnChange)
    }


    componentWillReceiveProps(nextProps) {
        if(nextProps.generatedArray.toString() !== this.props.generatedArray.toString()) {

            const disabledIndex = Math.floor(Math.random()*4);
            this.setState({
                disabledIndex: disabledIndex,
                filledWords: {
                    0: '',
                    1: '',
                    2: '',
                    3: '',
                    [disabledIndex]: nextProps.generatedArray[disabledIndex]
                },
            })
        }
    }

    handleCheckAnser = (event) => {
        // const { filledWords, disabledIndex }=this.state;
        const { checkAnswer } = this.props;
        const nodes = Array.prototype.slice.call( document.querySelectorAll('.WordField') );
        let currentInputIndex = nodes.indexOf( event.target ) + 1;

        const setFocus = ({callback}) => {
            // console.log({nodes, currentInputIndex });
            // console.log(nodes[currentInputIndex]);

            if(!nodes[currentInputIndex]) {
                callback();
                return;
            }
            const nextInput = nodes[currentInputIndex].querySelector('input');

            const isntDisabled = ![...nextInput.classList].includes('Mui-disabled');
            if(isntDisabled) {
                nextInput.focus();
            } else {
                ++currentInputIndex;
                setFocus({callback});
            }
        }
        setFocus({callback: () => {
                checkAnswer();
            }})
    }

    render() {
        const { filledWords, disabledIndex}=this.state;
        const {isValidWords,generatedArray} = this.props;

        return (
            <div className="WordsBlock">  
                <WordField
                    title="Infinitive" 
                    inputWord={filledWords[0].toLowerCase()}
                    word={generatedArray[0]}
                    disabled={disabledIndex === 0}
                    showHint={!isValidWords && (filledWords[0] !== generatedArray[0])}
                    onChange={this.handleOnChange(0)}
                    checkAnswer={this.handleCheckAnser}

                />
                <WordField
                    title="Past Simple" 
                    word={generatedArray[1]}
                    inputWord={filledWords[1].toLowerCase()}
                    disabled={disabledIndex === 1}
                    showHint={!isValidWords && (filledWords[1] !== generatedArray[1])}
                    onChange={this.handleOnChange(1)}
                    checkAnswer={this.handleCheckAnser}

                />
                <WordField
                    title="Past Participle" 
                    word={generatedArray[2]}
                    inputWord={filledWords[2].toLowerCase()}
                    disabled={disabledIndex === 2}
                    showHint={!isValidWords && (filledWords[2] !== generatedArray[2])}
                    onChange={this.handleOnChange(2)}
                    checkAnswer={this.handleCheckAnser}

                />
                <WordField
                    title="Translation" 
                    word={generatedArray[3]}
                    inputWord={filledWords[3].toLowerCase()}
                    disabled={disabledIndex === 3}
                    showHint={!isValidWords && (filledWords[3] !== generatedArray[3])}
                    onChange={this.handleOnChange(3)}
                    checkAnswer={this.handleCheckAnser}

                />
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        generatedArray: state.secondPageReducers.generatedArray,
        isValidWords: state.secondPageReducers.isValidWords,

    }
}

export default connect(mapStateToProps) (WordsBlock);