import React, { Component } from 'react';
import Header from './Header';
import House from './House';
import {Link} from 'react-router-dom';
import {updateHouses} from '../ducks/reducer';
import axios from 'axios';
import {connect} from 'react-redux';

class Dash extends Component {
    constructor(props){
        super(props);
        this.state = {
            desiredrent:0,
            houses:[]
        }
    }
    componentDidMount(){
        if (!this.props.user.username){
            this.props.history.push('/');
        }
        this.getHouses();
    }
    getHouses(){
        axios.get('/api/houses')
        .then(res => {
            if(res.data){
            console.log(res.data);
            this.props.updateHouses(res.data);
            //this.setState({houses:res.data});
            }
        })
    }
    getFiltered(){
        axios.get(`/api/houses?rent=${this.state.desiredrent}`)
        .then(res => {
            this.props.updateHouses(res.data);
            this.setState({houses:res.data});
        }).catch(err => console.log('nope'));
    }
    filterHouses(val){
        this.setState({
            desiredrent: val
        })
    }
    render() {
        console.log('houses from props: ',this.props);
        let houses = this.props.houses.map((house,i) => (
                <House
                    key={i}
                    id={house.houseid}
                    address={house.address}
                    city={house.city}
                    housedesc={house.housedesc}
                    desiredrent={house.desiredrent}
                    img={house.img}
                    loan={house.loan}
                    mort={house.mort}
                    name={house.housename}
                    state={house.state}
                    zip={house.zip} />
              ));
        return (
            <div className='dash'>
                <Header/>
                <Link to='/wiz/1'><button className='addNew'>Add New Property</button></Link>
                <div className='filterBox'>
                    <span>List properties with "desired rent" greater than: $</span>
                    <input onChange={(e) => this.filterHouses(e.target.value)} value={this.state.desiredrent}/>
                    <button onClick={() => this.getFiltered()} className='filterBtn'>Filter Properties</button> 
                    <button onClick={() => this.getHouses()} className='resetBtn'>Reset</button> 
                </div>
            <div className='listingBox'>
                <span>Home Listings</span>
                <div className='listings'>
                {houses}
                </div>
            </div>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    const {user, houses} = state;
    return {user, houses};
}

export default connect(mapStateToProps,{updateHouses})(Dash);