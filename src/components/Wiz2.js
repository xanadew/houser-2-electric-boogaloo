import React, { Component } from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {reset, updateAddress, updateCity, updateState, updateZip} from '../ducks/reducer';

class Wiz2 extends Component {
    componentDidMount(){
        if(!this.props.user.username){
            this.props.history.push('/');
        }
    }
    render() {
        const {reset, address,city,state,zip,updateAddress,updateCity,updateState,updateZip} = this.props;
        return (
            <div className='dashboard'>
                <Header/>
                <div className='wizHeader'>
                    <span>Add Listing</span>
                    <button onClick={() => {reset(); this.props.history.push('/dash')}}>Cancel</button>
                </div>
                <div className='wizNav'>
                    <h3>Step 2</h3>
                    <div className='circleBox'>
                        <div className='circle active'><i className='fas fa-check'></i></div>
                        <div className='circle active'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                </div>
                <div className='wizWrap wiz2'>
                    <div className='propTitle'>
                        <span>Address</span>
                    </div>
                    <input className='propInput' onChange={(e) => updateAddress(e.target.value)} value={address}/>
                    <div className='addressMiddle'>
                        <div className='middleHalf'>
                            <div className='propTitle'>
                                <span>City</span>
                            </div>
                            <input className='propInput' onChange={(e) => updateCity(e.target.value)} value={city}/>
                        </div>
                        <div className='middleHalf'>
                            <div className='propTitle'>
                                <span>State</span>
                            </div>
                            <input className='propInput' onChange={(e) => updateState(e.target.value)} value={state}/>
                        </div>
                    </div>
                    <div className='addressMiddle'>
                        <div className='middleHalf'>
                            <div className='propTitle'>
                                <span>ZIP</span>
                            </div>
                            <input className='propInput' onChange={(e) => updateZip(e.target.value)} value={zip}/>
                        </div>
                    </div>
                    <div className='nextBox prevBox'>
                        <Link to='/wiz/1'><button>Previous Step</button></Link>
                        <Link to='/wiz/3'><button>Next Step</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state,{reset,updateAddress,updateCity,updateState,updateZip})(Wiz2);