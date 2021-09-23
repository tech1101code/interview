import React from 'react'

function Block({v}) {
   

    return (
        
        <div style={{
            display:'flex',
            flexDirection:'column',
            height: 520,
            width:300,
            margin: 5,
            padding:2,
            border:'1px solid grey',
        }}>
        
            <img 
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${v.backdrop_path}`} 
                alt="" 
                width={300} 
                height={400}
                style={{
                    filter: v.adult ? 'blur(8px)' : '',
                }}
                className="myimage"
                
            />
            <div style={{
                display:'flex',
                flexDirection:'column',
            }}>
                <span style={{fontSize:20}}> {v.original_title} </span>
                <span style={{fontSize:10}}> {v.overview} </span>
            </div>
        </div>
    )
}

export default Block
