import React, { useState } from 'react';
function SearchForm({ setSearchInput }) {
    const [text, setText] = useState("")

    return (
        <div >
            <input type="text" placeholder="search" value={text} onChange={(e) => { setText(e.target.value) }} ></input>
            <button onClick={(e) => {

                console.log(text)
                setSearchInput(text === "" ? "" : `countries/${text}`)
                setText("")
            }}>search</button>
        </div>
    )
}
export default SearchForm;