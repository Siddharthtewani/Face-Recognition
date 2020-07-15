import React from 'react';
import 'tachyons' ;

function NavigationLink({onchange,isSignedin}) {
    if(isSignedin){
       return( 
        <nav className="tr f3 dim link underline pa3 pointer" onClick={()=>onchange("signin")}>
        Signout
        </nav>
       ); 
    }
    
    else{
      return(
        <div>
              <nav style={{display:'flex', justifyContent: 'flex-end'}} >
            
                <p className="tr f3 dim link underline pa3 pointer" onClick={()=>onchange("signin")}> Sign In</p> 
                <p className="tr f3 dim link underline pa3 pointer" onClick={()=>onchange("register")}> Register</p> 
            
              </nav>
        </div>
        );
    }
    
    
}

export default NavigationLink;
