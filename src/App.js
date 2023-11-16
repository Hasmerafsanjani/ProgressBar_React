import { useEffect, useState } from 'react';
import './App.css';
import BarProgress from './components/BarProgress';

function App() {
  const [value, setValue] = useState(0)
  const [success,setsuccess] = useState(false)
  useEffect(()=>{
    setInterval(()=>{
      setValue((val) => val + 0.10 )
    },10)
  } , [])
  return (
    <div className=" bg-green- flex flex-col items-center gap-2"> 
    Progress Bar
    <BarProgress value={value}
    onComplete= {()=>{setsuccess(true)} }
    />
    <span> { success ? "Successfull !" : "Processing..." } </span>
    </div>
  );
}

export default App;
