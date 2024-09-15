import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // e.preventDefault();
    // if (userId === true && password === true) {
    //   navigate('/home');
    // } else {
    //   setError('Invalid credentials!');
    // }
    navigate('/home');


  };

  return (
  <>  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center mb-5  mt-16">
    <p className=' text-green-600 font-extrabold text-3xl mb-7'>Fruits.ai</p>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Sign in to your account
    </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form action="#" method="POST" onSubmit={handleSubmit} className="space-y-6 " >
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Username
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="text"
            required
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?{' '}
      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
        Start a 14 day free trial
      </a>
    </p>
  </div>
</div></>
 
   
  )
};

export default LoginPage;

// <div className="flex justify-center items-center h-screen">
// <form onSubmit={handleSubmit} className=" bg-white p-8 shadow-md rounded-lg">
//   <h2 className="text-2xl font-bold mb-4">Login</h2>
//   {error && <p className="text-red-500 mb-2">{error}</p>}
//   <div className="mb-4">
//     <label className="block mb-2">User ID:</label>
//     <input
//       type="text"
//       value={userId}
//       onChange={(e) => setUserId(e.target.value)}
//       className="w-full p-2 border border-gray-300 rounded"
//       required
//     />
//   </div>
//   <div className="mb-4">
//     <label className="block mb-2">Password:</label>
//     <input
//       type="password"
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//       className="w-full p-2 border border-gray-300 rounded"
//       required
//     />
//   </div>
//   <button
//     type="submit"
//     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//   >
//     Login
//   </button>
// </form>
// </div>
