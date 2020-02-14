import React from 'react';
import './App.css';
import axios from 'axios';
import FolowersList from './components/FolowersList';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      userData: [],
      data: []
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

  render(){
    //console.log("state", this.state.data);
    return(
      <div>
        <h1>GitHub User Cards</h1>
        <UserCard data={this.state.userData} />
        <FolowersList data={this.state.data}/>
      </div>
    );
  }


}

export default App;
