import React from 'react'

export const GiftItem = ({title,url}) => {
    console.log(title,url);
    return (
        <div className='card'>
            <img src={url} alt={title} />
        </div>
    )
}
