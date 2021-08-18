import React from "react";

import SearchInput from "../SearchInput";
import ActionButton from "../ActionButton";
import './styles.css'

function SearchHeader(props) {
	const [searchString, setSearchString] = React.useState();

	const handleOnInputChange = (e) => setSearchString(e.target.value);

	return <div className="searchHeader">
		<SearchInput text={searchString} onChange={handleOnInputChange}  />
		<ActionButton emoji="❌" onClick={() => setSearchString("")} disabled={!searchString} />
		<ActionButton emoji="😺" onClick={() => setSearchString("cat")}/>
		<ActionButton emoji="🚗" onClick={() => setSearchString("car")} />
		<ActionButton emoji="🥗" onClick={() => setSearchString("food")} />
		<ActionButton emoji="🍎" onClick={() => setSearchString("fruit")} />
		<ActionButton emoji="🖼" onClick={() => setSearchString("photo")} />
	</div>
}

export default SearchHeader;