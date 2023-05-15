import { Input } from "antd";
import React, { useState } from 'react'
import './SearchBox.css'

function SearchBox(props) {
    const {Search} = Input;
    const [searchedVal, setSearchedVal] = useState('')
    return ( 
        <Search
            placeholder="--Type Query and Enter--"
            enterButton
            onSearch={()=>props.getSearchedValue(searchedVal)}
            className = "search"
            allowClear
            onChange={(e)=>setSearchedVal(e.target.value)}
        />
     );
}

export default SearchBox;