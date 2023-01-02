import  { Component } from "react";
import "./Style.css"

class Cardlist extends Component {

    render(){
        const {contacts}=this.props;
        return(
            <div className="cards">
            {contacts.map((contact)=>(
               <div key={contact.id} className="card-container">
                <img src={contact.pic} alt="/" className="contact-images" />
               <h3>{contact.name}</h3>
               <a href={`tel: ${contact.phone}`}>{contact.phone}</a>
               <p>{contact.location}</p>
            </div>
             )

        )}
            </div>
        )
    }
}

export default Cardlist;