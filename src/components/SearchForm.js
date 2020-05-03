import React from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
function SearchForm({ setSearchInput, data }) {

    return (
        <div >
            {/* <TextField label="Search" value={text} onChange={(e) => { setText(e.target.value) }} ></TextField> */}
            <Autocomplete
                className={'autocomplete'}
                onChange={(e, value) => {
                    if (value) {
                        setSearchInput(value.Country);
                    }

                }}
                options={data}
                getOptionLabel={(option) => option.Country}
                renderInput={(params) => <TextField {...params} label="Search country" variant="outlined" />}
            />
        </div>
    )
}
export default SearchForm;