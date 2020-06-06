import React, {Component} from 'react';

class MainContent extends Component {
    
    constructor(props)
    {
        super(props);
    }

    // componentDidMount () {
    //     fetch('/data.json')
    //         .then(res => res.json())
    //         .then(this.onLoad);
    // }

    // parseData (response) {
    //     return response.data;
    // }

    // onLoad = (data) => {
    //     this.setState({
    //         data: this.parseData(data)
    //     });
    // }

    // render () {
    //     const { data } = this.state;

    //     return data ?
    //         this.renderData(data) :
    //         this.renderLoading()
    // }

    // renderData (data) {
    //     if (data && data.length) {
    //         return (
    //         <div>
    //             {
    //             data.map(item => (
    //                 <div key={item.id}>
    //                 <a href={`mailto:${item.email}`}>{item.name}</a> {item.company}
    //                 </div>
    //             ))
    //             }
    //         </div>
    //         );
    //     } else {
    //         return <div>No items found</div>
    //     }
    // }

    // renderLoading () {
    //     return <div>Loading...</div>
    // }

	render() {
        
		return (
            <table className="responsive-table centered highlight z-depth-4">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Color</th>
                    <th>Brand</th>
                    <th>Status</th>
                </tr>
                </thead>

                <tbody>
                {this.props.data.map(s => (
                    <tr style={{fontSize:'1.5em'}}>
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