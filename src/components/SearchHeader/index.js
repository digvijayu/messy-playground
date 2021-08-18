import React from "react";

import SearchInput from "../SearchInput";
import ActionButton from "../ActionButton";
import './styles.css'

function SearchHeader(props) {
	const [searchString, setSearchString] = React.useState();

	return <div className="searchHeader">
		<SearchInput text={searchString} onChange={(e) => setSearchString(e.target.value)}  />
		<ActionButton emoji="❌" onClick={() => setSearchString("")} />
		<ActionButton emoji="😺" onClick={() => setSearchString("cat")}/>
		<ActionButton emoji="🚗" onClick={() => setSearchString("car")} />
		<ActionButton emoji="🥗" onClick={() => setSearchString("food")} />
		<ActionButton emoji="🍎" onClick={() => setSearchString("fruit")} />
		<ActionButton emoji="🖼" onClick={() => setSearchString("photo")} />
	</div>
}

export default SearchHeader;