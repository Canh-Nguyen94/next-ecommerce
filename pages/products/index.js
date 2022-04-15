
import Image from "next/image"
import Link from "next/link"
import {FetchProduct} from "../../lib/fetch-product"

function Products({products}){
    return(
        <><h1>All products</h1>
        <div className="products">
            {products.map(product =>{
                return(
                    <Link href={`/products/${product.id}`} passHref key={product.id}>
                    <div className="product" key={product.id} >
                        <Image src={product.image} width={500} height={500} alt="image"></Image>
                        
                        <h3>{product.title}</h3>
                        {<h4>{product.price}</h4>}
                    </div>
                    </Link>
                )
            })}
        </div>
        </>
        
    )
}

export async function getStaticProps(){
    
    const products = await FetchProduct()
    return({
        props:{ products:products}

    })
}

export default Products