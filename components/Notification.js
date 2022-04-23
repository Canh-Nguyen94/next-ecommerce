import React from 'react'

function Notification({product,success}) {
  return (
    <div className={success?"notification success": "notification"}> <strong>"{product.title}"</strong> has been successfully added to cart</div>
  )
}

export default Notification