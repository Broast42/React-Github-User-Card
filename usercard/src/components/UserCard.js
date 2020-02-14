import React from 'react';

const FolowersList = props =>{
    return(
        <div>
            <img src={props.data.avatar_url} alt={props.data.login} />
            <h2>{props.data.login}</h2> 
           
        </div>
    );
}

export default FolowersList;