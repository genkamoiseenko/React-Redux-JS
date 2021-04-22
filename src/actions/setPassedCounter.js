export const setPassedCounter = (passedCounter) => {

    return {
        type: 'PASSED_COUNT',
        payload: passedCounter + 1,
    }
}