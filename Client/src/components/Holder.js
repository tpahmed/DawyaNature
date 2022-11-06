import './Holder.css'

export default function Holder(props){
    return (
        <div className="Holder">
            <h1 className='Title'>
                {props.title}
            </h1>
            {props.content}
        </div>
    )
}