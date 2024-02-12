export const registration = (postData) => {
    const jsonData = JSON.stringify(postData);

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: jsonData
    };

    return fetch('http://localhost:9090/api/registration', fetchOptions)
        .then(response => response.json())
        .then(data => {
            if (data) {
                return data
            }
        })
        .catch(error => error);
}