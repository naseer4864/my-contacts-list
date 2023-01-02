import { Component } from 'react';
import './App.css';
import Cardlist from './Components/Card-list';
import { contacts } from './Components/Data';
import Searchinput from './Components/Search-input';
import Header from './Components/Header';
import Footer from './Components/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      contacts,
      searchField:""
    }
  }

  onchangeSearch = (event)=>{
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(()=>{
      return {searchField}
    })

  }

  render(){
    const {onchangeSearch}= this;
    const filtercontact = this.state.contacts.filter((contact)=>{
      return contact.name.toLocaleLowerCase().includes(this.state.searchField)
    }) 
    return(
      <div className='App'>
        <Header />
        <Searchinput onchangeinput={onchangeSearch}
        placeholder="Search contact"/>
        <Cardlist contacts={filtercontact} />
        <Footer/>
      </div>
    )
  }
}

export default App;
