import React, { Component } from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {reset, updateName, updateDescription} from '../ducks/reducer';

class Wiz1 extends Component {
    componentDidMount(){
                if (!this.props.user.username){
            this.props.history.push('/');
    }
}
    render() {
        const {reset, updateDescription, updateName, name, housedesc} = this.props;
        return (
            <div className='dashboard'>
                <Header/>
                <div className='wizHeader'>
                    <span>Add Listing</span>
                    <button onClick={() => {reset(); this.props.history.push('/dash');}}>Cancel</button>
                </div>
                <div className='wizNav'>
                    <h3>Step 1</h3>
                    <div className='circleBox'>
                        <div className='circle active'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                </div>
                <div className='wizWrap'>
                    <div className='propTitle'>
                        <span>Property Name</span>
                    </div>
                    <input className='propInput' onChange={(e) => updateName(e.target.value)} value={name}/>
                    <div className='propTitle propDescr'>
                        <span>Property Description</span>
                    </div>
                    <textarea className='propText' onChange={(e) => updateDescription(e.target.value)} value={housedesc}/>
                    <div className='nextBox'>
                        <Link to='/wiz/2'><button>Next Step</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state, {updateName, reset, updateDescription})(Wiz1);