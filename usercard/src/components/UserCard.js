import React from 'react';
import FollowersList from './FollowersList';
import styled from 'styled-components';

const Card = styled.div`
    width: 100%;
    margin: 5px 0;
    border: 4px solid #66b3ff;
    border-radius: 20px;
    box-shadow 2px 2px 3px #0000ff;
    background: linear-gradient(to bottom, #8c8c8c 0%, #4d4d4d 100%);
    padding: 20px;
    
`;

const FlexDiv = styled.div`
    display: flex;
    align-items: center;

    ${props => (props.type === 'space-around' ? `justify-content: space-around; margin-bottom: 10px;` : null)}
`;

const FlexItem = styled.div`
    width: 50%;
    
    ${props => (props.type === 'center' ? `text-align: center` : null)}
    
`;

const Img = styled.img`
    width: 200px; 
    border: 4px solid #6600ff;
    border-radius: 50%;
    box-shadow: 2px 2px 2px white , -2px -2px 2px white;
`;

const Centered = styled.div`
    text-align: center;
    margin-bottom: 10px;

    ${props => (props.type === 'lable' ? `border-bottom: 3px solid #6600ff` : null)}
`;

const InfoBox = styled.div`
    background: #cccccc;
    border-radius: 15px;
    width: 75%;
    padding: 10px;
    margin: 0 auto;
`;

const P = styled.p`
    font-size: 1.5rem;
`;

const Followers = styled.div`
    margin-top: 20px;
    width: 100%;
    border: 3px solid #cccccc;
    border-radius: 20px;
    background: #a6a6a6;
    padding: 15px;

`;

const ExtraSpace = styled.div`
    margin-bottom: 20px;
`;

const CustomButton = styled.a`
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 1px 0px 2px black;
    padding: 2px 6px;
    text-decoration: none;
    color: black;

    &:hover{
        background: #66b3ff;
    }

`;



const UserCard = props =>{
    return(
        <Card>
            <FlexDiv>
                <FlexItem type='center'>
                   <Img src={props.data.avatar_url} alt={props.data.login} /> 
                </FlexItem>
                <FlexItem>
                    <InfoBox>
                        <Centered type="lable">
                            <h2>{props.data.login}</h2>
                            <h3>{props.data.name}</h3>
                        </Centered>
                        <ExtraSpace>
                            <Centered>
                                <P>{props.data.bio}</P>
                            </Centered>
                            <FlexDiv type="space-around">
                                <h4>Location: </h4>
                                <h4>{props.data.location}</h4>
                            </FlexDiv> 
                            <FlexDiv type="space-around">
                                <P>Repos: {props.data.public_repos}</P>
                                <P>Following {props.data.following} users.</P>
                            </FlexDiv>            
                        </ExtraSpace>
                        <Centered>
                            <CustomButton href={props.data.html_url}>
                                Click Here to go to {props.data.login}'s GitHub Profile
                            </CustomButton> 
                        </Centered>   
                    </InfoBox>     
                </FlexItem>      
            </FlexDiv>
            <Followers>
                <Centered>
                    <h4>{props.data.followers} Followers</h4>
                </Centered>
                <FollowersList data={props.followers} setUser={props.setUser}/>
            </Followers>
         </Card>
    );
}

export default UserCard;