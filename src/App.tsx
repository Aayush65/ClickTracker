import { useState } from 'react';
import './App.css'

function App() {
  const [points, setPoints] = useState<number[][]>([]);
  const [redoArr, setRedoArr] = useState<number[][]>([]);

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const point = [e.clientX - 7, e.clientY - 7];
    setPoints([...points, point]);
  };

  function reset() {
    setPoints([]);
    setRedoArr([]);
  };

  function undo() {
    if (points.length === 0) return;
    setRedoArr([...redoArr, points[points.length - 1]]);
    setPoints(points.slice(0, points.length - 1));
  };

  function redo() {
    if (redoArr.length === 0) return;
    setPoints([...points, redoArr[redoArr.length - 1]]);
    setRedoArr(redoArr.slice(0, redoArr.length - 1));
  };

  return (
    <>
      <div className='w-[100vw] h-[100vh]' onClick={handleClick}>
        <h1 className='text-center text-[2rem] text-slate-400 -z-20 select-none tracking-widest p-5'>Create a beautiful night sky!</h1>
        {points.map((point, index) => (
          <div key={index} className={`w-[15px] h-[15px] border-[3px] border-white rounded-full absolute`} style={{ left: point[0], top: point[1] }}></div>
        ))}
      </div>
      <div className='text-center absolute bottom-10 z-10 ml-[40rem] mr-[40rem]'>
        <button type='button' className='p-2 m-3 text-center bg-blue-400 rounded-md text-black text-lg font-semibold active:scale-110 active:bg-blue-500' onClick={reset}>Reset</button>
        <button type='button' className='p-2 m-3 text-center bg-blue-400 rounded-md text-black text-lg font-semibold active:scale-110 active:bg-blue-500' onClick={undo}>Undo</button>
        <button type='button' className='p-2 m-3 text-center bg-blue-400 rounded-md text-black text-lg font-semibold active:scale-110 active:bg-blue-500' onClick={redo}>Redo</button>
      </div>
    </>
  )
}

export default App
