import React from 'react';

function InputformSignin({onchange}) {
   
    return ( 
                <div>
                <article class="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-4">
                <main class="pa4 black-80">
                <form class="measure center">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    <legend class="f4 fw6 ph0 mh0">Sign In</legend>
                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div class="mv3">
                        <label class="db fw6 lh-copy f6" for="password">Password</label>
                        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                    
                    </fieldset>
                    <div class="">
                    <button 
                     onClick={()=>onchange("home")}
                     class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer" value="Sign in">Sign In
                     </button>    
                    </div>
                    <div class="lh-copy mt3">
                    <p href="#0" class="f6 link dim black db" 
                    onClick ={()=>onchange("register")}
                    >Register</p>
                   
                    </div>
                </form>
                </main>
                </article>
                </div>
    
  );
}

export default InputformSignin;
