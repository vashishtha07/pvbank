import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
import { doCreateUserWithEmailAndPassword } from '../firebase/auth'


const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { userLoggedIn } = useAuth()

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <div className='h-screen bg-gradient-to-b from-black via-indigo-900 to-blue-800'>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            < main className="w-full h-screen flex self-center place-content-center place-items-center" >
                <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl bg-white">
                    <div className="text-center mb-6">
                        <div className="mt-2">
                            <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Create a New Account</h3>
                        </div>

                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-4"
                    >
                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Email
                            </label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Password
                            </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='new-password'
                                required
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Confirm Password
                            </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='off'
                                required
                                value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        {errorMessage && (
                            <span className='text-red-600 font-bold'>{errorMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isRegistering}
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isRegistering ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        <div className="text-sm text-center">
                            Already have an account? {'   '}
                            <Link to={'/login'} className="text-center text-sm hover:underline font-bold">Continue</Link>
                        </div>
                    </form>
                </div>
            </main >
        </div>
    )
    // return (
    //     <div className='h-screen bg-gradient-to-b from-black via-indigo-900 to-blue-800 flex flex-1 flex-col items-center justify-center min-h-screen ' >
    //         <h1 className='text-white text-3xl font-bold mt-10'>Signup</h1>
    //         <div className='flex-col flex flex-1 container justify-center items-center mb-10 rounded-lg shadow-lg'>
    //             <h2 className='font-bold text-white'>New User! Signup..</h2>
    //             <form action='/login' method='post' className='flex-col mb-10'>
    //                 <div className='py-2 flex flex-col'>
    //                     <label htmlFor="name" className='font-bold text-white p-5 '>Name:</label>
    //                     <input type="text" id="name" name="username" placeholder="Enter your name" required autoComplete="off" className='p-2 rounded-md bg-slate-200  w-80 mx-5' />
    //                 </div>
    //                 <div className='flex flex-col mb-10'>
    //                     <label htmlFor="password" className='font-bold text-white p-5 '>Password:</label>
    //                     <input type="password" id="password" name="password" placeholder="password" required className='p-2 rounded-md bg-slate-200  w-80 mx-5' />
    //                 </div>
    //                 <button type="submit" className='py-2 mx-5 rounded-md hover:bg-slate-300 font-bold bg-slate-100 w-80'>Login</button>
    //             </form>
    //         </div>
    //     </div>
    // )
}

export default Login