
export async function FetchProduct(){
const res = await fetch("https://625e7950873d6798e2a80ac8.mockapi.io/api/v1/products")
const products = res.json()
return products
}