let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

headers.append('Access-Control-Allow-Origin', '*');
headers.append('Access-Control-Allow-Credentials', 'true');

headers.append('GET', 'POST');


export const changeQuantity = (id, add, quant, size) => {
    const data = {
        count: add,
        quantity: quant,
        size: size
    }
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:3000/api/cart/change-quantity/${id}`,
            {
                credentials: 'include',
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            }
        )
            .then((res) => {
                resolve(res);
            });
    })
}