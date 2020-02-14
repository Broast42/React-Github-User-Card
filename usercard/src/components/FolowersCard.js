import React from 'react';

const FolowersCard = props =>{
    return(
        <div>
            <img className="folowers" src={props.data.avatar_url} alt={props.data.login} />
            <h2>{props.data.login}</h2>    
        </div>
    );
}

export default FolowersCard;