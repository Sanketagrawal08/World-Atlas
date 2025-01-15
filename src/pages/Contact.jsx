import React from 'react'

const Contact = () => {

  

  return (
    <div className="flex justify-center items-center h-[88vh] bg-gray-200">
      <form className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Me</h2>
        
        <input
          name='username'
          type="text"
          required
          autoComplete='off'
          placeholder='Enter your name'
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <input
          name='email'
          type="email"
          required
          autoComplete='off'
          placeholder='Enter your email'
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <textarea
          name="message"
          required
          autoComplete='off'
          placeholder='Enter your message'
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button
          type='submit'
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
