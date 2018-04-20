import React, { Component } from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {reset, updateImage} from '../ducks/reducer';

class Wiz3 extends Component {
    componentDidMount(){
        if (!this.props.user.username){
            this.props.history.push('/');
        }
    }
    render() {
        const {reset, img, updateImage} = this.props;
        return (
            <div className='dashboard'>
                <Header/>
                <div className='wizHeader'>
                    <span>Add Listing</span>
                    <button onClick={() => {reset(); this.props.history.push('/dash')}}>Cancel</button>
                </div>
                <div className='wizNav'>
                    <h3>Step 3</h3>
                    <div className='circleBox'>
                        <div className='circle active'><i className='fas fa-check'></i></div>
                        <div className='circle active'><i className='fas fa-check'></i></div>
                        <div className='circle active'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                </div>
                <div className='wizWrap wiz2'>
                    <div className='imgPreview'>
                        <img src={img} alt='preview'/>
                    </div>
                    <div className='propTitle'>
                        <span>IMG URL</span>
                    </div>
                    <input className='propInput' onChange={(e) => updateImage(e.target.value)} />
                    <div className='nextBox prevBox'>
                        <Link to='/wiz/2'><button>Previous Step</button></Link>
                        <Link to='/wiz/4'><button>Next Step</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state,{reset, updateImage})(Wiz3);