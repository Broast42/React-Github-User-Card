import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';
import styled from 'styled-components';
import Header from './components/Header';

const PageWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      userData: [],
      data: [],
      user: "Broast42"
    }
  }

  componentDidMount(){

    axios
      .get(` https://api.github.com/users/Broast42`)
      .then(res=>{
        console.log("result", res.data);
        this.setState({userData: res.data});
      })
      .catch(err => {
        console.log(err.response);
      })

    axios
      .get(` https://api.github.com/users/Broast42/followers`)
      .then(res=>{
        //console.log("result", res.data);
        this.setState({data: res.data});
      })
      .catch(err => {
        console.log(err.response);
      })
  }

  componentDidUpdate(prevProp, prevState){
    if(this.state.user !== prevState.user){

      axios
      .get(` https://api.github.com/users/${this.state.user}`)
      .then(res=>{
        console.log("result", res.data);
        this.setState({userData: res.data});
      })
      .catch(err => {
        console.log(err.response);
      })

      axios
      .get(` https://api.github.com/users/${this.state.user}/followers`)
      .then(res=>{
        //console.log("result", res.data);
        this.setState({data: res.data});
      })
      .catch(err => {
        console.log(err.response);
      })
    }
    
  }

  setUser = (userName) => {
    this.setState({
      user: userName
    })
  }

  render(){
    //console.log("state", this.state.data);
    return(
      <PageWrapper>
        <Header setUser={this.setUser}/>
        <UserCard data={this.state.userData} followers={this.state.data} setUser={this.setUser}/>
      </PageWrapper>
    );
  }


}

export default App;
