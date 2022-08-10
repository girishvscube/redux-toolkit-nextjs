import type { NextPage } from 'next'

import { useAppDispatch, useAppSelector } from './store/slices/hooks'
import { increment } from './store/slices/userslices'
import { useSelector } from 'react-redux'
import Button from './components/button'


const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const value: any = useAppSelector((state) => state.counter)


  return (
    <div className='text-center'>
      {value.value}
      <br />

      <Button lable="Increment" classname="w-24 h-10 rounded-md text-white" 
      onClick={() => dispatch(increment())} />
    </div>
  )
}

export default Home
