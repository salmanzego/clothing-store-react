export const handleFilterApply = (event, products, setFilteredProducts)=>{
    const tees = event.target.elements.tees.checked ? "tees" : ""
    const hoodies = event.target.elements.hoodies.checked ? "hoodies" : ""
    const sweaters = event.target.elements.sweaters.checked ? "sweaters" : ""
    const pants = event.target.elements.pants.checked ? "pants" : ""
    const filtered = products.filter(product => product.category.includes(tees && hoodies && sweaters && pants))
    setFilteredProducts(filtered);
}