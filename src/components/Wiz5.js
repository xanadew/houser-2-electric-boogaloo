import React, { Component } from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {reset, updateRent, updateHouses} from '../ducks/reducer';

class Wiz5 extends Component {
    constructor(props){
        super(props);
      //  this.state
    this.addToDb = this.addToDb.bind(this);
    }
    componentDidMount(){
        if(!this.props.user.username){
            this.props.history.push('/');
        }
    }
    addToDb(){
        const {user,reset,name,housedesc,address,city,state,zip,img,loan,mort,desiredrent,history} = this.props;
        const userid = user.id;
        axios.post('/api/houses', {
            name,
            housedesc,
            address,
            city,
            state,
            zip,
            img,
            loan,
            mort,
            desiredrent,
            userid
        }).then(res => {
            console.log('adding: ', res.data);
            updateHouses(res.data);
            history.push('/dash');
        });
        reset();
        
    }
    render() {
        const {reset,desiredrent, updateRent, mort, history} = this.props;
        const recommended = parseInt(mort, 10) * 1.25;
        return (
            <div className="dashboard">
                <Header />
                <div className="wizHeader">
                    <span> Add Listing </span>
                    <button onClick={() => {reset(); history.push('/dash');}}> Cancel </button>
                </div>
                <div className="wizNav">
                    <h3>Step 5</h3>
                    <div className="circleBox">
                        <div className="circle active"><i className="fas fa-check"></i></div>
                        <div className="circle active"><i className="fas fa-check"></i></div>
                        <div className="circle active"><i className="fas fa-check"></i></div>
                        <div className="circle active"><i className="fas fa-check"></i></div>
                        <div className="circle active"></div>
                    </div>
                </div>
                <div className="wizWrap wiz2">
                    <span className="reco">Recommended Rent ${recommended}</span>
                    <div className="propTitle rent">
                        <span>Desired Rent</span>
                    </div>
                    <input className="propInput" type="number" onChange={(e) => updateRent(e.target.value)} value={desiredrent} />

                    <div className="nextBox prevBox">
                        <Link to="/wiz/4"><button>Previous Step</button></Link>
                        <button className="complete" onClick={() => {this.addToDb(); }}>Complete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state, {reset, updateRent, updateHouses})(Wiz5);