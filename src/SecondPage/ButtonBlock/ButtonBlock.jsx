import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import classnames from "classnames";
import Button from '@material-ui/core/Button';
import {selectLanguage} from "../../actions/languageSelection";
import {resetCounters} from "../../actions/resetCounters";
import {setIsValidWords} from "../../actions/resetIsValidWords";
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
        console.log(this.state);
        const {modalWillBeClosed, modalIsOpen, clickedFirstTime} = this.state

        return (
            <div className="ButtonBlock">
                <Button className="exit" variant="contained" size="medium" onClick={this.handleExitButton}>
                    EXIT
                </Button>
                <Button className="accept" variant="contained" size="medium" color="primary"
                        onClick={this.checkAnswerWithMassage}>
                    OK
                </Button>
                {modalIsOpen && (
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
            </div>
        )
    }
}



const mapDispatchToProps = {
    selectLanguage,
    resetCounters,
    setIsValidWords,
}

export default withRouter(connect(null, mapDispatchToProps)(ButtonBlock))

