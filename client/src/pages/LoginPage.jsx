import React from 'react'


export const LoginPage = () => {
    return (
        <div className='mt-4'>
            <h1 className='text-4xl text-center'>Login</h1>
            <form className='max-w-md mx-auto '>
                <input className='w-full border my-3 py-2 px-3 rounded-2xl' type='email' placeholder='your@email.com' />
                <input className='w-full border my-1 py-2 px-3 rounded-2xl' type='password' placeholder='password' />
                <button className='bg-300 w-full rounded-2xl p-2 w-full text-white'>Login</button>
            </form>
        </div>

    )
}
