import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';


const customer = {
  'name':'홍길동',
  "birthDay":"961222",
  "gender":"남자",
  "job":"대학생"
}

class App extends Component{
  render(){
    return(
      <Customer
        name={customer.name}
        birthDay={customer.birthDay}
        gender={customer.gender}
        job={customer.job}
      />
    )
  }
}

export default App;
