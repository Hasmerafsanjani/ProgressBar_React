import React, { useEffect, useState } from 'react'

function BarProgress({value=0 ,onComplete=()=>{}}) {
    const [percent , setpersent] = useState(value)


    useEffect(()=>{
        setpersent(Math.min(100, Math.max(value , 0)))
        if(value>=100){
            onComplete()
        }
    },[value]) 

  return (
    
    <div className='h-6 w-[500px] relative  border-[1px] border-black rounded-full overflow-hidden text-center '>
        <div className=' bg-[#0004ff] h-full' style ={{width:`${percent}%`}}>
        <span style ={{color: percent > 50 ? "ivory" : "black" }} className='flex absolute justify-center items-center w-full'>{percent.toFixed()}%</span>
    </div>
    </div>
  )
}

export default BarProgress