export const counterAfterCheck = (failedCounter) => {

    return {
        type: 'FAILED_AGAIN',
        payload: failedCounter,

    }
}