import React from 'react';
import FollowersCard from './FollowersCard';
import styled from 'styled-components';

const FollowCard = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;

const FollowersList = props =>{
    return(
        <FollowCard>
            {props.data.map((x,i)=>(
                <FollowersCard key={i} data={x} setUser={props.setUser}/>
            ))}
        </FollowCard>
    );
}

export default FollowersList;