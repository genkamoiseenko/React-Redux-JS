import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import classnames from "classnames";
import Button from '@material-ui/core/Button';
import {selectLanguage} from "../../actions/languageSelection";
import {resetCounters} from "../../actions/resetCounters";
import {setIsValidWords} from "../../actions/resetIsValidWords";
import CheckBlock from "../CheckBlock/CheckBlock";
import {generateNewWordsPackAction} from "../../actions/generatedNewWords";
import Dialog from '@material-ui/core/Dialog';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';


import './ButtonBlock.scss';

class ButtonBlock extends Component {

    state = {
        modalIsOpen: false,
        modalWillBeClosed: false,
        clickedFirstTime: true,
    }

    handleExitButton = () => {
        this.props.selectLanguage(null);
        this.props.resetCounters();
        this.props.setIsValidWords();
        this.props.history.push('/');
        this.props.resetValueOfWordsEnd();
    }

    generatedNextPackOfWords = () => {
        const {generateNewWordsPackAction} = this.props
        const {language}=this.props.match.params

        this.props.resetCounters()
        this.props.resetValueOfWordsEnd()
        this.props.resetInputValuesAndWord()
        this.props.setIsValidWords();
        generateNewWordsPackAction(language);
    }

    checkAnswerWithMassage = () => {

        const {checkAnswer} = this.props;
        const {clickedFirstTime} = this.state;

        checkAnswer((value) => {
            if(clickedFirstTime) {
                this.setState({
                    modalIsOpen: true,
                    modalWillBeClosed: false,
                });
            }

            setTimeout(() => {
                this.handleCloseMessage();

            }, 1000)
        });

        this.setState({
            clickedFirstTime: false
        })

    };

    handleCloseMessage = () => {
        this.setState({
            modalWillBeClosed: true,

        })
        setTimeout(() => {
            this.setState({
                modalIsOpen: false,
                modalWillBeClosed: false,
                clickedFirstTime: true

            })

        }, 700)
    };

    render() {
        // console.log(this.state);
        const {modalWillBeClosed, modalIsOpen} = this.state
        const {wordsEnd}=this.props

        return (
            <div className="ButtonBlock">
                <Button className="exit" variant="contained" size="medium" onClick={this.handleExitButton}>
                    EXIT
                </Button>
                <Button className="accept" variant="contained" size="medium" color="primary"
                        onClick={this.checkAnswerWithMassage}>
                    OK
                </Button>
                {modalIsOpen && !wordsEnd && (
                    <Dialog
                        open={true}
                        onClose={this.handleCloseMessage}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        className={classnames('ButtonBlock__Dialog', {
                            'ButtonBlock__Dialog--fadeOut': modalWillBeClosed
                        })}
                    >
                        <ThumbUpAltOutlinedIcon/>
                        <p>Great!</p>
                    </Dialog>
                )}
                {wordsEnd &&(
                    <Dialog
                    className={classnames('ButtonBlock__Dialog', {
                        'ButtonBlock__Dialog--endOfWordsBlock': modalWillBeClosed})}
                    open={true}
                    // onClose={this.handleCloseMessage}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"

                >
                    <h3 >Your result:</h3>
                    <CheckBlock />
                    <h3
                        onClick={this.handleExitButton}>
                        Enough for today?
                    </h3>
                     <h3
                      className='ButtonBlock__score'
                      onClick={this.generatedNextPackOfWords}>
                         I want to try again
                     </h3>
                    </Dialog>
                )}

            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        language: state.language
    }
}

const mapDispatchToProps = {
    selectLanguage,
    resetCounters,
    setIsValidWords,
    generateNewWordsPackAction,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ButtonBlock))

