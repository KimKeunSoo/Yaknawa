import React, { PureComponent } from 'react';
import axios from 'axios';
class Testapi extends PureComponent {

    constructor(props) {
        super(props);
        this.click_alert = this.click_alert.bind(this);
        this.state={
          
        }
    }

    click_alert(e) {
        e.preventDefault();
        axios.get("http://localhost:4000/").then((response) => {
            alert(response.data.items.item[0].npaySdivCdNm);
            console.log(response.data.items.item[0]);
          });
    }

    render() {
        return (
            <div className="testapi">
                <button onClick={this.click_alert}>버튼</button>
            </div>
        );
    }
}


export default Testapi;



