import React, {useState} from 'react';
import useDebounce from "../hooks/useDebounce";

const Search = () => {
    const [value,setValue]=useState('')
    const debouncedSearch=useDebounce(search,500)
    const onChange=e=>{
        setValue(e.target.value)
        debouncedSearch(e.target.value)
    }

    function  search (query) {
        fetch(`https://jsonplaceholder.typicode.com/todos?query=`+query)
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
    }
    return (
        <div>
            {/*<Input/>*/}
            {/*<Hover/>*/}
            {/*<div ref={ref} style={{width: 300, height: 300, background: isBlackHovering ? 'blue' : 'black'}}/>*/}
            {/*<List/>*/}
            <input type="text"
                   value={value}
                   onChange={onChange}/>
        </div>
    )
        ;
};

export default Search;