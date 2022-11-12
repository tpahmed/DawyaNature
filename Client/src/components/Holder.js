import { checkLogin } from '../server_control/connection';
import './Holder.css'

export default function Holder(props){
    checkLogin();
    return (
        <div className="Holder">
            <h1 className='Title'>
                {props.title}
            </h1>
            {props.content}
        </div>
    )
}