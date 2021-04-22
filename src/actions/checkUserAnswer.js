export const  checkUserAnswer = (inputValues, generatedArray) => {

    return {
        type: 'CHECK_USER_ANSWER',
        payload: inputValues.toString().toLowerCase() === generatedArray.toString(),

    }
}

