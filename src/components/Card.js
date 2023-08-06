import React from 'react';

const Card = ({name, email, id}) => {
    return(
        <div className='tc bg-yellow dib br3 pa3 ma2 grow txt black bw2 shadow-5'>
            <img alt='robobitch' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card