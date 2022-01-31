const retry = (retriesLeft, delayIncrease) => {
    setTimeout(() => {
        if (retriesLeft > 0) {
            console.log("retrying..." + delayIncrease);
            retry(retriesLeft - 1, delayIncrease + retriesLeft)
        }
    }, delayIncrease)

}

retry(3, 1000)