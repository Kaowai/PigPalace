
import React from 'react'
import Layout from '../Layout/Layout'
import { Input } from '../Components/Input'
import { Link } from 'react-router-dom'

function Forgotpassword() {
    return (
        <Layout>
            <div className='container mx-auto my-20 pt-0 flex-col px-20'>
                <div className='flex-colo gap-3 mb-4'>
                    <h1 className='text-4xl text-other20 font-semibold'>Forgot you password</h1>
                    <p className='text-sm text-other20'>Verify your email to recovery password</p>
                </div>
                <form className='w-full gap-2 flex-colo  py-2  rounded-2xl'>
                    <div className="w-full">
                        <Input label="Email" type="email" placeholder="example@gmail.com" />
                    </div>
                    <button className='w-full h-full p-3 rounded-lg mt-4 bg-other20 text-sm font-medium text-white align-middle hover:bg-primary30' type='submit'><Link className='nav-link' to='/forgotpassword2'>Recovery your password</Link></button>
                    <div className='flex-colo mt-2'>
                        <p className='text-sm font-semibold cursor-pointer text-other20  right-0 '>Back to <spam className='font-bold hover:italic hover:underline cursor-pointer'><Link className='nav-link' to='/login'>Sign In</Link></spam></p>
                    </div>
                </form>
            </div>

        </Layout>
    )
}

export default Forgotpassword