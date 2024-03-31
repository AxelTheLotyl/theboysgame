import './Card.css'
import './BlackCard.css'

function BlackCard(props) {
    let {text} = props
    return (
        <div className='Card BlackCard'>
            <p className='cardText'>{text}</p>
        </div>
    )
}

export default BlackCard