let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

headers.append('Access-Control-Allow-Origin', '*');
headers.append('Access-Control-Allow-Credentials', 'true');

headers.append('GET', 'POST');
export const deleteFromCart = (id)=>{
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:3000/api/cart/delete-product/${id}`,
            {
                credentials: 'include',
                method: 'POST',
                headers: headers
            }
        )
            .then((res) => {
                resolve(res);
            })
            .catch(err =>{
                reject(err);
            })
    })
}