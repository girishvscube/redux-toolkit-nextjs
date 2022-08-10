import type { NextPage } from 'next'
interface Data {
    lable: String
    classname: any
    onClick: any

}

const Button: React.FC<Data> = (props) => {



    return (
        <div>

            <button className={`${props.classname} bg-red-800 pl-2 pr-2`} onClick={props.onClick}>{props.lable}</button>

        </div>
    )
}

export default Button
