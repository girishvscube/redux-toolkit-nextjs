import {useAppDispatch,useAppSelector} from './store/slices/hooks'
import {increment} from './store/slices/userslices'
interface Data {
    text: String,
    age: Number
}
const First: React.FC<Data> = (props) => {
    const value = useAppSelector((state)=>state.counter)
    return (
        <div>
    hiiii
        </div>
    )
}
export default First