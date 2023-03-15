import React from 'react'

export default function Card(props) {

    return(
        <div 
            id={props.id}
            onClick={props.onClick}>
            <img
                className='object-cover h-96'
                src={props.src}
                alt={props.alt}></img>
            <div className='text-center'>
                <div>{props.name}</div>
                <div>{props.price}</div>
            </div>
        </div>
    )
}