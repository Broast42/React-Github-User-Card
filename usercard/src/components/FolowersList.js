import React from 'react';
import FolowersCard from './FolowersCard';

const FolowersList = props =>{
    return(
        <div>
            {props.data.map((x,i)=>(
                <FolowersCard key={i} data={x} />
            ))}
        </div>
    );
}

export default FolowersList;