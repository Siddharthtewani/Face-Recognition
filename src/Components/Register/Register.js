import React, { Component } from 'react';
import './Register.css';
class InputformRegisterin extends Component {
   constructor(props){
      super(props);
      this.state={
          email:'',
          password:'',
          name:''
      }
   }
   onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }
  
  Registering= () => {
    console.log(this.state);
    fetch('http://localhost:3000/register',{
    method:'post', 
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
      
        name:this.props.name,
            email:this.props.email,
            password:this.props.password
      
    })
    })
  } 
    render(){
 
   const {onchange}=this.props;
    return ( 
                <div >
                <article class="outerbox" class="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main class="outerbox" class="pa4 black-80">
                <div id="tablecenter" class="measure center">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    <legend class="f1 fw6 ph0 mh0">Register</legend>
                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                        <input 
                        onChange={this.onNameChange}
                        class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                        onChange={this.onEmailChange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div class="mv3">
                        <label class="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" htmlFor="email-address">Confirm Password</label>
                        <input 
                        onChange={this.onPasswordChange}
                        class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="email-address"  id="email-address"/>
                    </div>
                    
                    </fieldset>
                    <div class="">
                    <button 
                     onClick={this.Registering()} 
                     class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer" value="Sign in">Register
                     </button>    
                    </div>
                  
                </div>
                </main>
                </article>
                </div>
    
  );
}
}

export default InputformRegisterin;
