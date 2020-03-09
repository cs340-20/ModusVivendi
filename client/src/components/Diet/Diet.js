import React, { Component } from 'react';
import DietTable from './DietTable'

class Diet extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({users}, () => console.log('Users fetched...', users)));
  }

  render() {
    const authenticated = this.props.is_authenticated
    console.log(authenticated)
    if(authenticated === true) {
      return (
      <div>
            {this.state.users.map(user =>
                <div className="diet">
                    <DietTable name={ user.name } 
                                goal={ user.primary_goal }
                                gender={ user.gender }
                                age={ user.age }
                                height={ user.height }
                                weight={ user.weight }
                    />
                </div>
            )}
        </div>
        
      );
    }
    else return null;
  }
}

export default Diet;
