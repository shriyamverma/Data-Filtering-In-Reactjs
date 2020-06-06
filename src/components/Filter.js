import React, { Component } from 'react';
import '../App.css';
import MainContent from './MainContent';
import myData from '../assets/product.json';

class Filter extends Component {

    constructor(){
        super();
        this.state = {
            data: myData,
        }
        this.searchColor = this.searchColor.bind(this);
        this.searchBrand = this.searchBrand.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.searchAvailability = this.searchAvailability.bind(this);
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
        // const { brand } = this.state;
        // const updatedList = this.state.list.sort((a, b) => a - b)
        // this.setState({ list : updatedList });
    }

    removeItem(id){
        console.log("removed");
        const updatedList = this.state.list.filter(item => item.id !== id);
        this.setState({list : updatedList});
    }
    
    searchAvailability(event){
        console.log(event);
        const updatedList = this.state.list.filter(item => item.availability === 0);
        this.setState({list : updatedList});
    }
    
    sortAscendingBrand = () => {
        const { brand } = this.state;
        const updatedList = this.state.list.sort((a, b) => a - b)
        this.setState({ list : updatedList });
    }

    sortAscendingColor = () => {
        const { colour } = this.state;
        const updatedList = this.state.list.sort((a, b) => a - b)
        this.setState({ list : updatedList });
    }

    render(){

        // const {data, searchBrand} = this.state;

        // return (
        //     <Search 
        //       onChange={this.searchBrand} 
        //       value={searchBrand}
        //       onChangeColor={this.searchColor}
        //       onClick={this.searchAvailability}
        //       >Search Brand Here: </Search><br></br><br></br>
        //       <Table
        //       list={list}
        //       searchBrand = {searchBrand}
        //       searchColor = {this.state.searchColor}
        //       removeItem = {this.removeItem}
        //       />
        //       <button onClick={this.sortAscendingBrand}>Sort by Brand</button>&nbsp;&nbsp;
        //       <button onClick={this.sortAscendingColor}>Sort by Color</button><br></br>
        //   </div>
        // );
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
                <label for brand style={{marginRight:"10px"}}>
                        <input id="brand" type="checkbox" />
                        <span>Brands</span>
                    </label>
                    <label for brand style={{marginRight:"10px"}}>
                        <input id="brand" type="checkbox" />
                        <span>Brands</span>
                    </label>
                    <label for brand style={{marginRight:"10px"}}>
                        <input id="brand" type="checkbox" />
                        <span>Brands</span>
                    </label>
                    <label for brand style={{marginRight:"10px"}}>
                        <input id="brand" type="checkbox" />
                        <span>Brands</span>
                    </label>
                    <label for brand style={{marginRight:"10px"}}>
                        <input id="brand" type="checkbox" />
                        <span>Brands</span>
                    </label>
                    <label for brand style={{marginRight:"10px"}}>
                        <input id="brand" type="checkbox" />
                        <span>Brands</span>
                    </label>
                    <label for brand style={{marginRight:"10px"}}>
                        <input id="brand" type="checkbox" />
                        <span>Brands</span>
                    </label>
                    <br></br><br></br><br></br><br></br>
                </div>
                <MainContent key="__id" data={this.state.data}/>
            </div>
        );
    }
}

/*
const Search = ({onChange,value,onChangeColor,onClick,children}) => 
<form>
{children}
<label htmlFor="brand"></label>
<input type="text" onChange={onChange} value={value}/><br></br>
<label htmlFor="color">Colour: </label>
<input type="text" onChange={onChangeColor} /><br></br><br></br>
<button type="button" onClick={onClick}>Show Available! </button><br></br>
</form>

const Table = ({list, searchBrand,searchColor,removeItem}) =>
<div>
  {
    list.filter(isSearchedBrand(searchBrand)).filter(isSearchedColor(searchColor)).map(item =>
    <div key={item.id}>
      <img src={item.reference} alt="Image"></img>
      <p>{item.colour} | {item.brand} | {item.availability} | <Button type="button" onClick={ ()=> removeItem(item.id) }>Remove</Button><br></br></p>
    </div>
    )
  }
</div>

const Button = ({onClick, children}) => <button onClick = { onClick } > {children} </button>
*/

export default Filter;
