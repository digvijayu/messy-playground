import './styles.css';

function SearchInput(props) {
	return <input className="searchInput" value={props.text} onChange={props.onChange} placeholder={props.placeholderText} />
}

export default SearchInput;