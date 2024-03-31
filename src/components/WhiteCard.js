import './WhiteCard.css'
import './Card.css'

function WhiteCard(props) {
    let {text} = props
    return (
        <div className='Card WhiteCard'>
            <p class="cardText">{text}</p>
        </div>
    )
}

export default WhiteCard;