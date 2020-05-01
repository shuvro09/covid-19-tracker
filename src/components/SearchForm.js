import React, { useState } from 'react';
import { Input, Button } from '@material-ui/core';

function SearchForm({ setSearchInput }) {
    const [text, setText] = useState("")

    return (
        <div >
            <Input type="text" placeholder="search" value={text} onChange={(e) => { setText(e.target.value) }} ></Input>
            <Button onClick={(e) => {

                console.log(text)
                setSearchInput(text === "" ? "" : `countries/${text}`)
                setText("")
            }}>search</Button>
        </div>
    )
}
export default SearchForm;