
export async function FetchProduct(){
const res = await fetch("https://fakestoreapi.com/products")
const products = res.json()
return products
}