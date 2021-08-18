import "./styles.css";

function ActionButton(props) {
	return <button onClick={props.onClick} className="actionButton">{props.emoji}</button>
}

export default ActionButton;