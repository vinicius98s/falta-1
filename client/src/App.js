import React, { Component } from 'react';
import UsersWrapper from './components/UsersWrapper';
import User from './components/User';
import Header from './components/Header';
import Loading from './components/Loading';

class App extends Component {
  state = {
    users: false,
    loading: true,
    error: false,
  }

  getUsers = () => {
    fetch('/users')
      .then(res => res.json())
      .then(data => this.setState({ users: data, loading: false }))
      .catch(err => this.setState({ error: err }))
  }

  splitUsersGroup = () => {
    const { users } = this.state

    const getRandomGroup = (number) => {
      return Math.floor(Math.random(number) * 4) + 1
    }

    const group1 = [], group2 = [], group3 = [], group4 = [];
    
    users.forEach(user => {
      if(getRandomGroup(user.registered.age) === 1) {
        group1.push(user)
      } else if(getRandomGroup(user.registered.age) === 2) {
        group2.push(user)
      } else if(getRandomGroup(user.registered.age) === 3) {
        group3.push(user)
      } else if(getRandomGroup(user.registered.age) === 4) {
        group4.push(user)
      }
    })

    this.setState({ users: [group1, group2, group3, group4] })
  }
  
  componentDidMount() {
    this.getUsers();
  }

  render() {
    if(this.state.error) {
      return (
        <h1>Alguma coisa deu errado!</h1>
      )
    }

    if(this.state.loading) {
      return (
        <Loading />
      )
    }

    return (
      <div>
        <Header splitUsersGroup={this.splitUsersGroup} users={this.state.users} />
        {this.state.users.length === 117 && (
          <UsersWrapper>
            {this.state.users.map(user => <User key={user.registered.date} user={user} />)}
          </UsersWrapper>
        )}

        {this.state.users.length === 4 && (
          this.state.users.map((group, key) => (
            <UsersWrapper key={key}>
              {group.map(user => <User key={user.registered.date} user={user} />)}
            </UsersWrapper>
          ))
        )}
      </div>
    );
  }
}

export default App;
