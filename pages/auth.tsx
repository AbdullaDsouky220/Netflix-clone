import Input from "@/components/Input"
import Image from "next/image"
import Link from "next/link"
import React, { useState, useCallback } from 'react'
const Auth = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [variant, setVariant] = useState('login')

    const onChange = (e: any, handler: any) => {
        handler(e.target.value)
    }

    const toggleVariant = useCallback(() => (
        setVariant(currentvalue => currentvalue === 'login' ? 'register' : 'login'))
        ,
        []
    )



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
                                        value={name}
                                        onChange={(e: any) => onChange(e, setName)}
                                        placeHolderCaption={'Username'}
                                        type={'text'} />
                                )
                            }

                            <Input
                                id="email"
                                value={email}
                                onChange={(e: any) => onChange(e, setEmail)}
                                placeHolderCaption={'Email or Phone number'}
                                type={'email'} />
                            <Input
                                value={password}
                                id="password"
                                onChange={(e: any) => onChange(e, setPassword)}

                                placeHolderCaption="password"
                                type={'password'} />
                            <button

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