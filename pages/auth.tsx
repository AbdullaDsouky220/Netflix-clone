import Input from "@/components/Input"
import axios from "axios"
import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import React, { useState, useCallback } from 'react'
import { useRouter } from "next/router"
const Auth = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    })

    const router = useRouter()
    const [variant, setVariant] = useState('login')


    const toggleVariant = useCallback(() => (
        setVariant(currentvalue => currentvalue === 'login' ? 'register' : 'login'))
        ,
        []
    )
    const loginUser = useCallback(async () => {
        try {
             const email=formData.email
             const password=formData.password

             await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: '/'
              });
            router.push('/')
            setFormData({
                email: '',
                password: '',
                name:''
            })

        } catch (error) {
            console.log(error);

        }
    }, [formData])

    //register usre handler

    const registerUser = useCallback(async () => {
        try {
             axios.post('./api/register', formData)
            setFormData({
                email: '',
                password: '',
                name: ''
            })
            router.push('/')

        } catch (error) {
            console.log('the error for abdullah dsouky hoyyyyyyyy',error);

        }
    }, [formData,router])

    


    return (
        <div
            className="  w-full bg-[url('../public/images/hero2.jpg')] h-screen bg-center bg-no-repeat bg-cover"
        >
            <div className="bg-black h-full w-full md:bg-opacity-50">
                <nav >
                    <Image
                        className="px-7 py-7"
                        src={require("../public/images/logo.png")}
                        alt="logo"
                        width={220}
                        height={220}
                    />

                </nav>
                <div className=" max-w-full min-h-[600px]  transition flex items-center justify-center mb-16 rounded">
                    <div className="bg-black  min-h-[600px] w-full md:w-[450px] px-16 py-16 rounded text-white bg-opacity-60 ">
                        <h1 className="font-bold text-4xl">
                            {
                                variant === 'login' ? 'Sign In' : 'Sign Up'
                            }
                        </h1>
                        <div className="mt-6   flex gap-2 flex-col ">
                            {
                                variant === 'register' && (
                                    <Input
                                        id="name"
                                        value={formData.name}
                                        onChange={(e: any) => setFormData({ ...formData, name: e.target.value })}
                                        placeHolderCaption={'Username'}
                                        type={'text'} />
                                )
                            }

                            <Input
                                id="email"
                                value={formData.email}
                                onChange={(e: any) => setFormData({ ...formData, email: e.target.value })}

                                placeHolderCaption={'Email or Phone number'}
                                type={'email'} />
                            <Input
                                value={formData.password}
                                id="password"
                                onChange={(e: any) => setFormData({ ...formData, password: e.target.value })}


                                placeHolderCaption="password"
                                type={'password'} />
                            <button
                                onClick={ variant==='login'?loginUser: registerUser}
                                className=" bg-red-600/90 text-center p-4 font-semibold text-lg rounded-md cursor-pointer" >
                                {
                                    variant === 'login' ? 'Sign In' : 'Sign Up'
                                }
                            </button>
                            <div>{
                                variant == 'login' ? (

                                    <div className="flex items-center justify-between">

                                        <div>
                                            <input type="checkbox"
                                                className=' text-slate-700'
                                                id="remember "
                                                name="remember  "
                                                value="Remember me " />
                                            <label
                                                className=' text-slate-500'
                                                htmlFor="remember  "> Remember me</label>
                                        </div>
                                        <Link href={'f'} className="border-bottom-4 hover:border-red-400 text-slate-500 hover:underline"> Need help?</Link>
                                    </div>
                                ) : null

                            }
                            </div>
                            <div className="text-normal mt-12 text-slate-500">


                                {
                                    variant === 'login' ?
                                        <span>
                                            New to Netflix? <span onClick={toggleVariant}
                                                className='hover:underline cursor-pointer text-white'>
                                                Sign up now.
                                            </span>
                                        </span> : <span>
                                            Have an account ? <span
                                                onClick={toggleVariant}
                                                className='hover:underline cursor-pointer text-white'>
                                                login now.
                                            </span>
                                        </span>

                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Auth