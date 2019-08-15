import React, {Component} from 'react';
import {Button,Dialog,DialogTitle,DialogContent,DialogActions,Typography} from '@material-ui/core';
class CustomerDelete extends Component{

    constructor(props){
        super(props);
        this.state = {
            open :false
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handlsClose = this.handleClose.bind(this);
    }

    handleClickOpen(){
        this.setState({
            open:true
        })
    }
    handleClose(){
        this.setState({
            open:false
        })
    }

    deleteCustomer(id){
        const url = '/api/customers/'+id;
        fetch(url,{
            method:'DELETE'
        });
        this.props.stateRefresh();
    }
    render(){
        return(
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
                    삭제
                </Button>
                <Dialog onClose={this.handleClose} open={this.state.open}>
                    <DialogTitle onClose={this.handleClose}>
                        삭제 경고
                    </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            선택한 고객정보가 삭제됩니다.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
            // <button onClick={(e)=> {this.deleteCustomer(this.props.id)}}>삭제</button>
        )
    }
}

export default CustomerDelete;