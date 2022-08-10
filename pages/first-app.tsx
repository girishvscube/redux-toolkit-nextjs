import { useAppDispatch, useAppSelector } from './store/slices/hooks'
import { increment } from './store/slices/userslices'
import Button from './components/button'
interface Data {
    text: String,
    age: Number
}
const First: React.FC<Data> = (props) => {
    const value = useAppSelector((state) => state.counter)
    return (
        <div>
            <Button classname = "w-20 h-10 bg-gray-600 text-white" lable="PAID"
        onClick={()=>{alert("hi")}} />
        </div>
    )
}
export default First