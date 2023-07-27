import React from 'react'
interface InputProps {
  id:string,
  value:string,
  onChange:any,
  placeHolderCaption:string,
  type:string

}
const Input:React.FC<InputProps> = ({
  value,
  id,
  onChange,
  placeHolderCaption,
  type
}) => {
  return (
    <div className='   relative'>
    <input 
    type={type}
    onChange={onChange}
    id={id}
  value={value}
    className=" 
    text-start pl-4
     pr-24 
     py-4 rounded  
     w-full
      bg-neutral-700
      focus:outline-none
      focus:ring-0
      placeholder-transparent
      appearance-none
      peer
      text-white
     " placeholder={'placeHolderCaption'}/>
     <label htmlFor={id}
     className='
     transform 
     p-4
     text-zinc-500
     absolute
     text-md
     origin-[0]
     left-0
     duration-150
     scale-75
     -translate-y-5
     peer-placeholder-shown:-translate-y-1
     peer-placeholder-shown:scale-100

     peer-focus:-translate-y-5
     peer-focus:scale-75
     

     
     '
     >
      {placeHolderCaption}
     </label>
       <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
     {
      type==='password'?
      'Your password must contain between 4 and 60 characters.'
      :
      `Please provide a valid ${placeHolderCaption}`
    }
    </p> 


      
    </div>
  )
}

export default Input