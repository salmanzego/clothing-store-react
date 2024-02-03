export const filterByCat = (data, filter)=>{
    if(filter === 'bestselling') return data.filter(product => { return product.trending === true })
    return data.filter(product => { return product.category === filter })
}