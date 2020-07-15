import React from 'react';
import './Register.css';
function InputformRegisterin({onchange}) {
   
    return ( 
                <div >
                <article class="outerbox" class="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main class="outerbox" class="pa4 black-80">
                <form id="tablecenter" class="measure center">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    <legend class="f4 fw6 ph0 mh0">Register</legend>
                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="email-address">Name</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div class="mv3">
                        <label class="db fw6 lh-copy f6" for="password">Password</label>
                        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="email-address">Confirm Password</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="email-address"  id="email-address"/>
                    </div>
                    
                    </fieldset>
                    <div class="">
                    <button 
                     onClick={()=>onchange("home")} 
                     class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer" value="Sign in">Register
                     </button>    
                    </div>
                  
                </form>
                </main>
                </article>
                </div>
    
  );
}

export default InputformRegisterin;
