import React from 'react'

function LoadingProduct() {
  return (
    <div className='loadingproduct'>
        <div>
        <div className="loadingproductImage">
            <div className="loadingratings"></div>
        </div>
        <div className='loadingproductDetails'>
          <h3 className="loadingbrandName"></h3>
          <h5 className="loadingproductName"></h5>
          <h3 className="loadingprice"></h3>
        </div>
    </div>
    </div>
  )
}

export default LoadingProduct