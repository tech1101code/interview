import React from 'react'
import Block  from  './block'


function Blocks({data}) {
    
    return (
        <div className="slide-container">
            <div className="image-container">
                {data && data.map((v,index)=> {
                    const adult_true = (index%3 === 1) ? true : false;
                    const movie_data = {...v , adult: adult_true }
                    return(
                        <Block key={index} v= {movie_data}/>                
                    )
                })}
            </div>
        </div>
    )
}

export default Blocks
