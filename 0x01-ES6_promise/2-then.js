export function handleResponseFromAPI(promise) {
    const promise = new Promise((resolve, reject)=> {
        if (success) resolve({'status': 200, 'body': 'Success'})
        else{
            reject(new Error('The fake API is not working currently'))
        }
    });
    promise.then((res) => {console.log('Got a response from the API')})
    return promise;
}