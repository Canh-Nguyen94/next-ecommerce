export async function fetchCartItems(){
    const res = await fetch("/api/products")
    const items = res.json()
    return items
}