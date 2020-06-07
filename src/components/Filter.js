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
        this.changeStatus = this.changeStatus.bind(this);
        this.selectBrand = this.selectBrand.bind(this);
        this.sortBy = this.sortBy.bind(this);
        // this.paginate = this.paginate.bind(this);
    }

    // shouldComponentUpdate() {
    //     return false;
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevState.data);
    //     console.log(this.state.data);
    // }
    
    searchColor = (e) => {
        // console.log(e.target.value);
        const newData = myData.filter(d => d.color.toLowerCase().includes(e.target.value.toLowerCase()));
        this.setState({data : newData});
    }

    searchBrand = (e) => {
        // console.log(e.target.value);
        const newData = myData.filter(d => d.brand.toLowerCase().includes(e.target.value.toLowerCase()));
        this.setState({data : newData});
    }

    compareName = (a, b) => {
        let comparison = 0;
        if (a.name > b.name) {
          comparison = 1;
        } else if (a.name < b.name) {
          comparison = -1;
        }
        return comparison;
    }
    compareColor = (a, b) => {
        let comparison = 0;
        if (a.color > b.color) {
          comparison = 1;
        } else if (a.color < b.color) {
          comparison = -1;
        }
        return comparison;
    }
    compareBrand = (a, b) => {
        let comparison = 0;
        if (a.brand > b.brand) {
          comparison = 1;
        } else if (a.brand < b.brand) {
          comparison = -1;
        }
        return comparison;
    }

    sortBy = (e) => {
        // console.log(e.target.value);
        let newData = myData;
        if(e.target.value==="1"){
            newData = myData.sort(this.compareName);
        }
        else if(e.target.value==="2"){
            newData = myData.sort(this.compareColor);
        }
        else if(e.target.value==="3"){
            newData = myData.sort(this.compareBrand);
        }
        this.setState({data : newData});
    }

    changeStatus = (e) => {
        const el = document.getElementsByName('status');
        if(el[0].checked) {
            this.setState({data: myData.filter(d => {
                return d.sold_out==='0';
            })});
        }
        else if(el[1].checked) {
            this.setState({data: myData.filter(d => {
                return d.sold_out==='1';
            })});
        }
    }

    selectBrand = () => {
        let newData = myData.filter(d => {
            return document.getElementById(d.brand).checked;
        })
        if(newData.length===0){
            newData = myData;
        }
        this.setState({data : newData});
    }
    // paginate = (pgNo) => {
    //     // lastItem = pgNo * this.state.itemsPerPage;
    //     // firstItem = lastItem - this.state.itemsPerPage;
    //     this.setState({lastItem: pgNo * this.state.itemsPerPage});
    //     // this.setState({lastItem});
    // }
    render(){
        
        const UniqueBrands = Array.from(new Set(
            myData.map(d => d.brand)
        )).sort();

        console.log('In Render',this.state);
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
                <div className="col s12 m6 center" onChange={this.changeStatus} style={{marginTop:'6px'}}>
                    Display Only: &nbsp;
                    <label>
                    <input className="with-gap" name="status" value="Available" type="radio"/>
                    <span>Available&nbsp;&nbsp;</span>
                    </label>
                    <label>
                    <input className="with-gap" name="status" value="SoldOut" type="radio"/>
                    <span>Sold Out</span>
                    </label>
                </div>
                <div className="col s12 m12 center" style={{marginTop:'6px'}}>
                <div><br/>Check These Out:</div>
                {UniqueBrands.map(brand => 
                        <label htmlFor brand style={{marginRight:"10px"}}>
                            <input id={brand} value={brand} type="checkbox" onClick={this.selectBrand}/>
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
