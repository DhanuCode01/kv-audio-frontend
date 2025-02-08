import './App.css';

function App() {
  return (
    <div>
      <div className='w-[500px] h-[500px] bg-blue-400'>

        <div className='w-[50px] h-[50px] bg-red-500'></div>
        <div className='w-[50px] h-[50px] bg-yellow-500'></div>
        <div className='w-[50px] h-[50px] bg-green-500'></div>
        <div className='w-[50px] h-[50px] bg-black fixed right-[5px] bottom-[15px]'></div>    //Stand at given distances relative to the display being used.
      </div>
      

      
    </div>
  );
}

export default App;
