import React from 'react'
import { Link } from 'react-router-dom'


export const Register = () => {
    return (
        <div className='mt-4 flex flex-col min-h-screen justify-center'>
            <h1 className='text-4xl text-center mb-4'>Register</h1>
            <form className='max-w-md mx-auto '>
                <input className='w-full border my-1 py-2 px-3 rounded-2xl' type='text' placeholder='John Snow' />
                <input className='w-full border my-1 py-2 px-3 rounded-2xl' type='email' placeholder='your@email.com' />
                <input className='w-full border my-1 py-2 px-3 rounded-2xl' type='password' placeholder='password' />
                <input className='w-full border my-1 py-2 px-3 rounded-2xl' type='password' placeholder='confirm password' />
                <button className='bg-300 w-full rounded-2xl p-2 w-full text-white'>Sign Up</button>
                <div className='text-center py-2 text-gray-500'>
                    Already member?
                    <Link className='underline text-black px-2' to={'/login'}>Login</Link>
                </div>
            </form>
        </div>

    )
}
