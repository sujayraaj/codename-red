import React from 'react';

import styles from '../index.css';

const bitmap = `0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,
1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,
1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,
1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,
0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,
0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,
1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,`;


const bitmap2 = `1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1
1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0
1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0
0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0
1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0`;
export const BitMapGen = () => {
  return (
    <svg style={{ width: '100%', height: '100%' }}>
        {bitmap.split('\n').map((valy,indy)=>{
          return valy.split(',').map((valx,indx)=>{
            return <rect x={6*indx} y={6*indy} width="5" height="5" fill={valx=='1'?'black':'white'} />

          })
        })}
    </svg>
  )

}


export const StarField = ({numberOfStars}) =>{
    const starArray = Array.apply(null, Array(numberOfStars)).map(() => <circle cx={Math.random()*100+'%'} cy={Math.random()*100+'%'} r="4" stroke="black" stroke-width="3" fill="white" />)
    
    return (
        <svg style={{width:'100%',height:'100%'}}>
        <g id="stars" className={styles.stars} transform="translate(100)" >
        {starArray}
        </g>
        <g id="stars" className={styles.stars} transform="translate(-100)">
       {starArray}
        </g>
        <g id="stars" className={styles.stars}>
        {starArray}
        </g>
        <g id="name"  className={styles.starName}>
        {bitmap.split('\n').map((valy,indy)=>{
          return valy.split(',').map((valx,indx)=>{
              if(valx!='1') return null;
            return <rect className={styles.nameRectangles} x={10*indx} y={10*indy} width="8" height="8" fill={valx=='1'?'white':'black'} />

          })
        })}
        </g>
        <g className={styles.starNameBanner}>
        <text x="50%" y="65%"
      style={{fontSize: '44px',
             stroke: '#000000',
             fill: '#ffffff'}}>
             DEVELOPER
  </text></g>
       {/*         <defs>
        <g id="stars">
        {
            Array.apply(null, Array(numberOfStars)).map(() => <circle cx={Math.random()*100+'%'} cy={Math.random()*100+'%'} r="4" stroke="black" stroke-width="3" fill="white" />)
        }
        </g>
        <g id="name">
        {bitmap2.split('\n').map((valy,indy)=>{
          return valy.split(',').map((valx,indx)=>{
            return <rect className={styles.nameRectangles} x={6*indx} y={6*indy} width="5" height="5" fill={valx=='1'?'white':'black'} />

          })
        })}
        </g>
        </defs>
<use href="#stars" className={styles.stars} transform="translate(100)" />
        <use href="#stars" className={styles.stars} transform="translate(-100)"/>
        <use href="#stars" className={styles.stars} />
    <use href="#name" className={styles.starName}/> */}
        </svg>
        )
        
}

export default StarField;