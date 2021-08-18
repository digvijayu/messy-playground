import "./styles.css";

function ActionButton(props) {
	return <button onClick={props.onClick} className="actionButton" disabled={props.disabled} >{props.emoji}</button>
}

export default ActionButton;