import { Component } from "react";
import "./Style.css"


class Searchinput extends Component {
    render(){
        return(
            <div>
                <input
                type="search"
                placeholder={this.props.placeholder}
                onChange={this.props.onchangeinput}
            />
            </div>
        )
    }
}

export default Searchinput;