import React, { Component } from 'react';
import Customer from './components/Customer.js'
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'http://placeimg.com/64/64/1',
    'name': '류재경',
    'birthday': '940426',
    'gender': '여자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'http://placeimg.com/64/64/2',
    'name': '김성규',
    'birthday': '951119',
    'gender': '남자',
    'job': '회시원'
  },
  {
    'id': 3,
    'image': 'http://placeimg.com/64/64/3',
    'name': '제이키',
    'birthday': '940426',
    'gender': '여자',
    'job': '회시원'
  },
]

class App extends Component {
  render() {
    return(
      <div>
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
      
      
    );
  }
}
export default App;
