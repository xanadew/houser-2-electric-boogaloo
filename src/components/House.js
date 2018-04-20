import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateHouses} from '../ducks/reducer';

class House extends Component {

    deleteHouse(id){
        axios.delete(`/api/houses/${id}`).then(res => {
            console.log(res.data);
            this.props.updateHouses(res.data);
             this.getHouses();
        })
       
    }
    getHouses(){
        axios.get('/api/houses').then(res => this.props.updateHouses(res.data));
    }
    render() {
        let {id, name, housedesc, address, city, state, zip, img, loan, mort, desiredrent} = this.props;
        console.log(this.props);
        return (
            <div className='houseBox'>
                <div className='imgBox'>
                    <img src={img} alt='home' />
                </div>
                <div className='houseProps'>
                    <div className='descWrapper'>
                        <div className='desc'>
                            <span className='descName'>{name}</span>
                            <span className='descDesc'>{housedesc}</span>
                        </div>
                    </div>
                    <div className='detailWrapper'>
                        <div className='details'>
                            <span>Loan: ${loan}</span>
                            <span>Monthly Mortgage: ${mort}</span>
                            <span>Desired Rent: ${desiredrent}</span>
                            <span>Address: {address}</span>
                            <span>City: {city}</span>
                            <span>State: {state}</span>
                            <span>ZIP: {zip}</span>
                            <button className='delete' onClick={() => {this.deleteHouse(id)}}></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        user: state.user,
        houses: state.houses
    }
}
export default connect(mapStateToProps,{updateHouses})(House);