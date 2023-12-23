import react from 'react';
import { useState } from 'react';

const Calci=()=>{

    const[result , setResult] = useState("");
    const clickHandler = (e)=>{
        setResult(result.concat(e.target.value));
    }

    const clearScreen=()=>{
        setResult("");
    }

    const calculate=()=>
    {  try{
        setResult( eval(result).toString());
    }
    catch(e){
        setResult("Error");
    }
    }






return (

    <div className='bg-gray-800 text-white w-screen h-screen flex justify-center items-center'>
       <div className=' main w-64 h-auto bg-gray-900 rounded-2xl shadow-xl border-4 border-gray-100'>
        <div className='screen p-2 rounded-lg'>
            <input defaultValue={result} type ="text" className='text-blue-500 w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder-black px-1 bg-gray-100 outline-none text-2xl pt-10   text-right' placeholder='0'/>
        </div>
        <div className='brand  bg-gray-200 text-center mb-2 bg-opacity-90'>
            <h1 className='text-gray-900 text-xs font-bold'>D Calci </h1>
        </div>
        <div className="keyword">
            <div className='flex justify-between m-2'>
                <input type='button' value="C" onClick={clearScreen} className= 'transition duration-500 ease-in active:scale-90 bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium] '/>
                <input type='button' value="<" onClick={clickHandler} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium transition duration-500 ease-in active:scale-90'/>
                <input type='button' value="%" onClick={clickHandler} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium  transition duration-500 ease-in active:scale-90'/>
                <input type='button' value="/" onClick={clickHandler} className='bg-pink-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium transition duration-500 ease-in active:scale-90'/>               
         </div>
         <div className='flex justify-between m-2'>
                <input type='button' onClick={clickHandler} value="7" className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium transition duration-500 ease-in active:scale-90'/>
                <input type='button' value="8" onClick={clickHandler}className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium transition duration-500 ease-in active:scale-90'/>
                <input type='button' value="9" onClick={clickHandler} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium transition duration-500 ease-in active:scale-90'/>
                <input type='button' value="*" onClick={clickHandler} className='bg-green-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium transition duration-500 ease-in active:scale-90'/>               
         </div>

         <div className='flex justify-between m-2'>
                <input type='button' value="6" onClick={clickHandler} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium transition duration-500 ease-in active:scale-90'/>
                <input type='button' value="5" onClick={clickHandler} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium transition duration-500 ease-in active:scale-90'/>
                <input type='button' value="4" onClick={clickHandler} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium transition duration-500 ease-in active:scale-90'/>
                <input type='button' value="-" onClick={clickHandler} className='bg-blue-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium transition duration-500 ease-in active:scale-90'/>               
         </div>
         <div className='flex justify-between m-2'>
                <input type='button' value="1" onClick={clickHandler} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium transition duration-500 ease-in active:scale-90'/>
                <input type='button' value="2" onClick={clickHandler} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium transition duration-500 ease-in active:scale-90'/>
                <input type='button' value="3" onClick={clickHandler} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium transition duration-500 ease-in active:scale-90'/>
                <input type='button' value="+" onClick={clickHandler} className='bg-purple-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium transition duration-500 ease-in active:scale-90'/>               
         </div>
         <div className='flex justify-between m-2'>
                <input type='button' value="0" onClick={clickHandler} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium transition duration-500 ease-in active:scale-90'/>
                <input type='button' value="00" onClick={clickHandler} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium transition duration-500 ease-in active:scale-90'/>
                <input type='button' value="." onClick={clickHandler} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium transition duration-500 ease-in active:scale-90'/>
                <input type='button' value="=" onClick={calculate} className='bg-orange-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium transition duration-500 ease-in active:scale-90'/>               
         </div>
         
        </div>
       </div>
    </div>
)
}
export default Calci;