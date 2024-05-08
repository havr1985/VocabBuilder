import logo from '@/assets/Craftwork.png';
import pictutre from '@/assets/illustration.png'


export const Background = () => {
    return (
      <>
        <div className=" flex gap-x-4 items-center mt-4">
          <img src={logo} alt="logo" className=" w-9 h-9" />
          <p className=' text-lg font-semibold'>VocabBuilder</p>
            </div>
            <div className=' flex justify-center mt-3'>
                <img src={pictutre} alt='children' className=' w-[247px] h-[191px]'/>
            </div>
      </>
    );
}
