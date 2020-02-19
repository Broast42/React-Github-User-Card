import React from 'react';
import styled from 'styled-components';

const FCard = styled.div`
    width: 100px;
    margin: 5px;
    text-align: center;
`;

const FImg = styled.img`
    width: 60px; 
    border: 2px solid #66b3ff;
    border-radius: 50%;
    box-shadow: 1px 1px 1px black , -1px -1px 2px black;
`;


const FollowersCard = props =>{
    return(
        
        <FCard onClick={() => props.setUser(props.data.login) }>
            <FImg src={props.data.avatar_url} alt={props.data.login} />
            <h5>{props.data.login}</h5>   
        </FCard>      
        
    );
}

export default FollowersCard;