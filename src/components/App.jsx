import ContactsForm from './contactForm/contactForm'

import React, {Component} from "react"


class App extends Component{

  state = {
    contacts: [],
  }

  formSabmitHendel = data => {
    console.log(data)
  }


  render () {
    return (
      <div>
        <ContactsForm onSubmit={this.formSabmitHendel}/>
      </div>
    );
  }
 
};

export default App
