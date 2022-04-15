import axios from "axios"

export async function FetchProduct(){
// const res = await axios.get("https://fakestoreapi.com/products")
const res = await fetch("https://fakestoreapi.com/products")
const products = res.json()
return products
}