import React, {Component} from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY} from '../config/api';

class ViewItem extends Component{

    async componentDidMount(){
        const resp = await axios.get(`${BASE_URL}/${this.props.match.params.item_id + API_KEY}`);
        console.log('Get Item response', resp);
    }


    render(){
        console.log('View Item Props:', this.props)
        return(
            <div>
                <h1 className="center">View Item</h1>
            </div>
        )
    }
}

export default ViewItem; 