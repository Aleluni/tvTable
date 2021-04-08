import React, { useState,useEffect } from 'react';

const Table = ()=>{
     const [tvPrograms, setTvPrograms] = useState([]);
     
     const loadTvFromJson = async()=>{
         const response = await fetch("");
         const data = await response.json();
         setTvPrograms(data);
     }

     useEffect(() => {
        loadTvFromJson()
     },[])

    return(
        
        <ul className="tv-table">
               {tvPrograms.map(tvPrograms => (
                   <li className="tv-table--show">
                       {tvPrograms.start}
                       {tvPrograms.name}
                   </li>
               ))}
        </ul>
    )
}

export default Table;