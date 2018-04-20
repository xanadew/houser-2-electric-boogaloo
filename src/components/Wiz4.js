import React, { Component } from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {reset, updateLoan, updateMort} from '../ducks/reducer';


class Wiz4 extends Component {
    componentDidMount(){
        if (!this.props.user.username){
            this.props.history.push('/');
        }
    }
    render() {
            const {reset,loan, updateLoan, mort, updateMort} = this.props;
            return (
                <div className="dashboard">
                    <Header />
                    <div className="wizHeader">
                        <span> Add Listing </span>
                        <button onClick={() => {reset(); this.props.history.push('/dash');}}> Cancel </button>
                    </div>
                    <div className="wizNav">
                        <h3>Step 4</h3>
                        <div className="circleBox">
                            <div className="circle active"><i className="fas fa-check"></i></div>
                            <div className="circle active"><i className="fas fa-check"></i></div>
                            <div className="circle active"><i className="fas fa-check"></i></div>
                            <div className="circle active"></div>
                            <div className="circle"></div>
                        </div>
                    </div>
                    <div className="wizWrap wiz2">
                        <div className="propTitle">
                            <span>Loan Amount</span>
                        </div>
                        <input className="propInput" type="number" onChange={(e) => updateLoan(e.target.value)} value={loan} />
                        <div className="propTitle mort">
                            <span>Monthly Mortgage</span>
                        </div>
                        <input className="propInput" type="number" onChange={(e) => updateMort(e.target.value)} value={mort} />
                        <div className="nextBox prevBox">
                            <Link to="/wiz/3"><button>Previous Step</button></Link>
                            <Link to="/wiz/5"><button>Next Step</button></Link>
                        </div>
                    </div>
                </div>
        );
    }
}

export default connect(state => state,{reset, updateLoan,updateMort})(Wiz4);