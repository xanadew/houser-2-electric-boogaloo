import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from '../ducks/reducer';
import auth_logo from '../assets/auth_logo.png';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }
    login(){
        const {username,password} = this.state;
        axios.post('/api/auth/login', {username, password})
        .then(res => {
            if(res.data){
            this.props.updateUser({
                username:res.data.username,
                id:res.data.id
            });
            this.props.history.push('/dash');
        }
        })
    }
    register(){
        const {username,password} = this.state;
        axios.post(`/api/auth/register`, {username,password})
        .then(res => {
            if(res.data){
            this.props.updateUser({
                username: res.data.username,
                id: res.data.id
            });
            this.props.history.push('/dash');
        }
        })
    }
    changeUsername(val){
        this.setState({username: val});
    }
    changePassword(val){
        this.setState({password: val});
    }
    render() {
        return (
            <div className='login'>
                <img src={auth_logo} alt='logo'/>
                <span className='loginHeader'>Username:</span>
                <input className='loginput' onChange={(e) => this.changeUsername(e.target.value)}/>
                <span className='loginHeader'>Password:</span>
                <input className='loginput' type='password' onChange={(e) => this.changePassword(e.target.value)}/>
                <div className='authBtns'>
                    <button className='loginBtn' onClick={this.login}>Login</button>
                    <button className='regBtn' onClick={this.register}>Register</button>
                </div>
            </div>
        );
    }
}

export default connect(state => state, {updateUser})(Login);