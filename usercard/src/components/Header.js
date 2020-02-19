import React from 'react';
import styled from 'styled-components';


const StyHeader = styled.header`
    width: 100%;
    background: #6600ff;
    border-bottom: 4px solid #66b3ff;
    padding: 0 10px;
    color: #66b3ff;
    text-shadow: 1px 1px 1px white, -1px -1px 1px black;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;

    ${props => (props.type === 'space-between' ? `justify-content: space-between` : null)}
`;

class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            search: ""
        }
    };

    handelChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    submitSearch = e => {
        e.preventDefault();
        this.props.setUser(this.state.search);
    }

    goHome = () => {
        this.props.setUser("Broast42")
        this.setState({
            search: ""
        })
    }


    render(){
        return(
            <StyHeader>
                <Flex type="space-between">
                    <h1>GitHub User Card</h1>
                    <Flex>
                        <form onSubmit={this.submitSearch}>
                            <input type="text" name="search" value={this.state.search} onChange={this.handelChange}/>
                            <button type="submit">Search Users</button>
                        </form>
                        <button onClick={this.goHome}>Home</button>  
                    </Flex>
                    
                </Flex>
            </StyHeader>
        );

    }
    
    
}

export default Header;