import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';


const customers = [
  {
    "id":1,
    "image":"https://placeimg.com/64/64/any",
    'name':'홍길동',
    "birthDay":"961222",
    "gender":"남자",
    "job":"대학생"
  },
  {
    "id":2,
    "image":"https://placeimg.com/64/64/any",
    'name':'이승재',
    "birthDay":"900430",
    "gender":"남자",
    "job":"회사원"
  },
  {
    "id":3,
    "image":"https://placeimg.com/64/64/any",
    'name':'이순신',
    "birthDay":"961222",
    "gender":"남자",
    "job":"대학생"
  }
]

class App extends Component{
  render(){
    return(
      <div>
        {customers.map(c =>{
          return <Customer key={c.id} id={c.id} image={c.image} name ={c.name} birthDay={c.birthDay} gender={c.gender} job={c.job} />
        })}
      </div>
    )
  }
}

export default App;
