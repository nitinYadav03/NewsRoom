import React from 'react'
import loading from './square-loader.gif'
const Spinner = () => {
    return (
      <div className="d-flex justify-content-center">
        <img className='my-3' src={loading} alt="loading" width={100} />
      </div>
    )
}

export default Spinner