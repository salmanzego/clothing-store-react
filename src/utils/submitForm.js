export const submitForm = async (data, endpoint) => {
    const url = process.env.REACT_APP_API_URL + endpoint
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('GET', 'POST');
    let statusCode;
    const response = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }).then(res => {
        statusCode = res.status;
        return res.json();
    }).then(data => {
        data = {...data, status: statusCode}
        return data;
    }).catch(err => {
        err = {...err, status: statusCode}
        return err;
    });
    return response
}