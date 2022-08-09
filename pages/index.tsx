import type { NextPage } from 'next'

import { useAppDispatch, useAppSelector } from './store/slices/hooks'
import { increment } from './store/slices/userslices'
import { useSelector } from 'react-redux'

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const value: any = useAppSelector((state) => state.counter)


  return (
    <div>
      {value.value}
      <br />
      <button onClick={() => dispatch(increment())}>Increment</button>

    </div>
  )
}

export default Home
