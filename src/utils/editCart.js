let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

headers.append('Access-Control-Allow-Origin', '*');
headers.append('Access-Control-Allow-Credentials', 'true');

headers.append('GET', 'POST');

export const editCart = (id, size, prevSize, prevQuant) => {
    const data = {
        size: size,
        prevSize: prevSize,
        prevQuant: prevQuant,
    }
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:3000/api/cart/edit/${id}`,
            {
                credentials: 'include',
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            }
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                resolve(data);
            });
    })
}