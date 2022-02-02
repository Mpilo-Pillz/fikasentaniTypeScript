fetchWithAutoRetry(fetchNews, 5);

function fetchWithAutoRetry(fetcher, maxRetryCount) {
    return new Promise((resolve, reject) => {
        let retries = 0;

        const caller = () => fetcher().then(() => {
            resolve();
        });
    }).catch((error) => {
        if (retries < maxRetryCount) {
            retries++;
            caller();
        } else {
            reject(error);
        }
        retries = 1;
        caller()
    });
}

const fetchMpiloPRofile = async () => {
    console.log("Fetching...");
    const rawResponse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const jsonResponse = await rawResponse.json();
    console.log(jsonResponse);
    return jsonResponse;
}

fetchWithAutoRetry(fetchMpiloPRofile, 5)