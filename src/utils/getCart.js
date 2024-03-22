let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

headers.append('Access-Control-Allow-Origin', '*');
headers.append('Access-Control-Allow-Credentials', 'true');

headers.append('GET', 'POST');



export const getCart = () => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3000/api/cart',
            {
                credentials: 'include',
                method: 'GET',
                headers: headers
            }
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                resolve(data);
                //setTimeout(() => { resolve(data) }, 3000)

            });
    })
}