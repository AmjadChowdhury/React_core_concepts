import './Actors.css'

export default function Actors(props){
    return (
        <div className='divStyle'>
            <h3>Name : {props.name}</h3>
            <h3>Movie's name : {props.movie}</h3>
        </div>
    )
}
