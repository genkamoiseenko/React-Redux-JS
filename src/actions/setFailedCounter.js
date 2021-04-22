export const setFailedCounter = (failedCounter) => {

    return {
        type: 'FAILED_COUNT',
        payload: failedCounter + 1,

    }
}
