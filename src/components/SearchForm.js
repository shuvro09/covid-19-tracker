import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function SearchForm({ setSearchInput }) {
    const [text, setText] = useState("")

    return (
        <div >
            <TextField label="Search" value={text} onChange={(e) => { setText(e.target.value) }} ></TextField>
            <Button onClick={() => {

                // console.log(text)
                setSearchInput(text === "" ? "" : `countries/${text}`)
                setText("")
            }}>search</Button>
        </div>
    )
}
export default SearchForm;