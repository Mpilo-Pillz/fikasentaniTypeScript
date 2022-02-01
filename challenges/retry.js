// const retryPromise = new Promise((resolve, reject) => {
//     resolve()
// })
const retryFetch = (retriesLeft, delayIncrease) => {
    setTimeout(() => {
        if (retriesLeft > 0) {
            console.log("retrying..." + delayIncrease);
            retryFetch(retriesLeft - 1, delayIncrease * retriesLeft)
        } else {
            console.log("Retries exceeded..");
        }
    }, delayIncrease)

}

retryFetch(3, 1000)