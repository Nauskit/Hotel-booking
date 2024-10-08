import React from 'react'
import { Link } from 'react-router-dom'


export const LoginPage = () => {
    return (
        <div className='mt-4 flex flex-col min-h-screen justify-center'>
            <h1 className='text-4xl text-center mb-4'>Login</h1>
            <form className='max-w-md mx-auto '>
                <input className='w-full border my-1 py-2 px-3 rounded-2xl' type='email' placeholder='your@email.com' />
                <input className='w-full border my-1 py-2 px-3 rounded-2xl' type='password' placeholder='password' />
                <button className='bg-300 w-full rounded-2xl p-2 w-full text-white'>Sign In</button>
                <div className='text-center py-2 text-gray-500'>
                    Don't have an account yet?
                    <Link className='underline text-black px-2' to={'/register'}>register</Link>
                </div>
            </form>
        </div>

    )
}
