import React, {Component} from 'react';
  
class MainContent extends Component {
    
    constructor(props)
    {
        super(props);
    }

	render() {
        let sn = 1;
		return (
            <table className="responsive-table centered highlight z-depth-4">
                <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Product Id</th>
                    <th>Image</th>
                    <th>Color</th>
                    <th>Brand</th>
                    <th>Status</th>
                </tr>
                </thead>

                <tbody>
                {this.props.data.map(s => (
                    <tr style={{fontSize:'1.5em'}}>
                        <td>{sn++}</td>
                        <td>{s.name}</td>
                        <td><img style={{height:'100px',width:'100px'}} src={window.location.origin+`/images/${s.url}`} ></img></td>
                        <td>{s.color}</td>
                        <td>{s.brand}</td>
                        <td>{s.sold_out==='1'?'Sold Out':'Available'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default MainContent;