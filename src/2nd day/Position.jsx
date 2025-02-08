
function Position() {
  return (
    <div>
      <div className='w-96 h-96 bg-blue-400'>

        <div className='h-80 w-80 bg-red-500 relative '>                /* here relative position */
                <div className='w-[50px] h-[50px] bg-yellow-500 sticky top-1'></div>      /*දී ඇති දුරවල් අනුව නොවෙනස්ව සිටි  */
                <div className='w-[50px] h-[50px] bg-green-500 absolute top-4 right-4' ></div>          /*  'Relative position'   එකෙ ඉන්න කෙනාට සාපේක්ෂව /රතු පාටින් "relative position" එක දක්වා ඇත */
                <div className='w-[50px] h-[50px] bg-black fixed right-[5px] bottom-[15px]'></div>    /*දී ඇති දුරට අනුව  display  එකේ ඕනෑම තැනක සිටි */
        </div>
      </div>
      

      
    </div>
  );
}

export default Position;