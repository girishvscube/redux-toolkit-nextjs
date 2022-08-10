import type { NextPage } from 'next'

import { useAppDispatch, useAppSelector } from './store/slices/hooks'
import { increment, decrement } from './store/slices/userslices'
import Button from './components/button'


const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const value: any = useAppSelector((state) => state.counter)


  return (
    <div>
      <div className='flex justify-center flex-col items-center'>
        <p className='w-40 h-20 bg-slate-500 text-white text-center font-extrabold pt-5'>{value.value}</p>
        <br />
        <div className='flex gap-10 mt-10'>
          <Button lable="Decrement" classname="w-24 h-10 rounded-md text-white"
            onClick={() => dispatch(decrement())} />

          <Button lable="Increment" classname="w-24 h-10 rounded-md text-white"
            onClick={() => dispatch(increment())} /><br />
        </div>
      </div>

    </div>
  )
}

export default Home
