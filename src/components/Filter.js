import React, { Component } from 'react';
import '../App.css';
import MainContent from './MainContent';
import myData from '../assets/product.json';
import Pagination from './Pagination';

class Filter extends Component {

    constructor(){
        super();
        this.state = {
            data: myData,
            pageNo: 1,
            itemsPerPage: 5,
        }
        this.searchColor = this.searchColor.bind(this);
        this.searchBrand = this.searchBrand.bind(this);
        // this.paginate = this.paginate.bind(this);
    }
    
    searchColor(e){
        // console.log(e.target.value);
        const newData = myData.filter(d => d.color.toLowerCase().includes(e.target.value.toLowerCase()));
        this.setState({data : newData});
    }

    searchBrand(e){
        // console.log(e.target.value);
        const newData = myData.filter(d => d.brand.toLowerCase().includes(e.target.value.toLowerCase()));
        this.setState({data : newData});
    }

    sortBy = (e) => {
        // console.log(e.target.value);
        if(e.target.value==="0"){
            this.setState({data : myData});
        }
    }

    // paginate = (pgNo) => {
    //     // lastItem = pgNo * this.state.itemsPerPage;
    //     // firstItem = lastItem - this.state.itemsPerPage;
    //     this.setState({lastItem: pgNo * this.state.itemsPerPage});
    //     // this.setState({lastItem});
    // }
    render(){
        
        const UniqueBrands = Array.from(new Set(
            this.state.data.map(d => d.brand)
        )).sort();

        return (
            <div className="row">
                <div className="input-field col s12 m6">
                    <input placeholder="Search by Color" onChange={this.searchColor} id="color" type="text" className="validate"/>
                </div>
                <div className="input-field col s12 m6">
                    <input placeholder="Search by Brand" onChange={this.searchBrand} id="brand" type="text" className="validate"/>
                </div>
                <div className="col s2 m1 center" style={{marginTop:'6px'}}>
                        Sort By:
                </div>
                <div className="col s10 m5">
                    <select className="browser-default" onClick={this.sortBy}>
                        <option value="0" selected>None</option>
                        <option value="1">Name</option>
                        <option value="2">Color</option>
                        <option value="3">Brand</option>
                    </select>
                </div>
                <div className="col s12 m6 center" style={{marginTop:'6px'}}>
                    Display Only: &nbsp;
                    <label>
                    <input className="with-gap" name="available" type="radio"/>
                    <span>Available&nbsp;&nbsp;</span>
                    </label>
                    <label>
                    <input className="with-gap" name="available" type="radio"/>
                    <span>Sold Out</span>
                    </label>
                </div>
                <div className="col s12 m12 center" style={{marginTop:'6px'}}>
                <div><br/>Check These Out:</div>
                {UniqueBrands.map(brand => 
                        <label htmlFor brand style={{marginRight:"10px"}}>
                            <input id={brand} type="checkbox" />
                            <span>{brand}</span>
                        </label>
                    )}
                    <br></br><br></br><br></br><br></br>
                </div>
                <MainContent key="__id" data={this.state.data}/>
                <Pagination postsPerPage='5' totalPosts={this.state.data.length} paginate={[]} />
            </div>
        );
    }
}

export default Filter;
