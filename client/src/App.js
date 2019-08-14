import React,{Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import {Paper, TableRow,TableCell,Table, TableHead, TableBody, CircularProgress } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import { async } from 'rxjs/internal/scheduler/async';
import CustomerAdd from './components/CustomerAdd';

const styles = theme => ({
  root:{
    width:"100%",
    marginTop:theme.spacing.unit * 3,
    overflowX:"auto"
  },
  table:{
    minWidth:1080
  },
  progress : {
    margin:theme.spacing.unit * 2
  }
})


class App extends Component{

  state = {
    customers:"",
    completed : 0  
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({customers:res}))
    .catch(err => console.log(err));
  }

  componentWillMount(){
    clearInterval(this.timer);
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const {completed} = this.state;
    this.setState({completed : completed >= 100 ? 0: completed +1});
  }


  render(){
    const {classes} = this.props;
    return(
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? this.state.customers.map(c =>{
                return <Customer key={c.ID} id={c.ID} image={c.IMAGE} name ={c.NAME} birthDay={c.BIRTHDAY} gender={c.GENDER} job={c.JOB} />
              }):
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
                </TableCell>
              </TableRow>
              }
              
            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd/>
      </div>
    )
  }
}

export default withStyles(styles)(App);
