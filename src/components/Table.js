import React, { useState,useEffect } from 'react';

const Table = ()=>{
     const [tvPrograms, setTvPrograms] = useState([]);
     

     useEffect(() => {
        const loadTvFromJson = async()=>{
            const response = await fetch("https://tv-api-p2x2o.ondigitalocean.app/SVT%201.json");
    

        const data = await response.json();
        setTvPrograms(data)
        };

     if(!tvPrograms.length){
         loadTvFromJson();
     }

     });

    return(
        <div>
            <h1 className="table--head">SVT1</h1>
        <ul className="tv-table">
               {tvPrograms.map(tvPrograms => (
                   <li className="tv-table--show">
                       {tvPrograms.start}
                       <br/>
                       {tvPrograms.name}
                   </li>
               ))}
        </ul>
        </div>
    )
}

export default Table;