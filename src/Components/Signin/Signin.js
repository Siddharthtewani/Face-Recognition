import React from 'react';

function InputformSignin({onchange}) {
   
    return ( 
                <div>
                <article className="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-4">
                <main className="pa4 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                    
                    </fieldset>
                    <div >
                    <button 
                     onClick={()=>onchange("home")}
                     className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer" value="Sign in">Sign In
                     </button>    
                    </div>
                    <div className="lh-copy mt3">
                    <p href="#0" className="f6 link dim black db" 
                    onClick ={()=>onchange("register")}
                    >Register</p>
                   
                    </div>
                </div>
                </main>
                </article>
                </div>
    
  );
}

export default InputformSignin;
