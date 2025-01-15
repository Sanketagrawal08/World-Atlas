import React from 'react'
import { useRouteError , NavLink } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError()
    console.log(error);
    

  return (
    <div className='flex flex-col  justify-center items-center pt-60'>
        <h1 className='text-3xl py-4'>Oops! Error Occured</h1>
        {error && <p>{error.data}</p>}
       <NavLink to="/">
       <button>Go Back</button>
       </NavLink>
    </div>
  )
}

export default ErrorPage