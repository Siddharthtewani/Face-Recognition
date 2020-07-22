import React,{Component ,setState} from 'react';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation'; 
import Logo from './Components/Logo/Logo';
import FaceRecoganition from './Components/FaceRecoganition/FaceRecoganition';
import ImageLinkForm from './Components/ImageLinkForm/ImageLink' ;
import Rank from './Components/Rank/Rank';
import './App.css';
import Particles from 'react-particles-js';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
const app= new Clarifai.App({
  apiKey :"609f365d239a4f028cccaf2380563fde"
 });

const particleoptions={
  particles:{
    number:{
      value:100 ,
      density:{
        enable:true,
        value_area:900
      }
    }
  }
}

class App extends Component {

      constructor(){
        super();
        this.state={
          input : "" ,
          imageurl:"",
          box:{},
          route:'signin',
          isSignedin:'false',
        }

      }
 
  calculateboxdimentions=(data)=>{
  const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
  const image=document.getElementById("imageofperson");  
  const height=Number(image.height);
  const width=Number(image.width);

   
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  

  }   
  
  displayflexbox=(box)=>{
     
     this.setState({box:box});
     console.log(box);
  }
  onInputChange=(event)=>{
    this.setState({input:event.target.value});
  }
  onRoutechange=(routechange)=>{



    if(routechange==='signout'){
      this.setState({isSignedin:false});
    }else if(routechange==='home'){
      this.setState({isSignedin:true});
    }
    this.setState({route:routechange});


  }
 
  onSubmit=()=>{
    this.setState({imageurl:this.state.input});
  
  

    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input
      ).then(response=> this.displayflexbox( this.calculateboxdimentions(response))
      .catch(error=>console.log(error))
  );
  }
   
  render(){
  

    return (
      <div className="App" id="baseapp">

        
         <Particles
         id="particlefunction"
          params={particleoptions}
         />
         <Navigation onchange={this.onRoutechange} isSignedin={this.state.isSignedin}/>
        {  
      
        
        this.state.route ==='home'
         ?<div>
         <Logo/>
         <Rank/>
         <ImageLinkForm onInputChange={this.onInputChange}  onSubmit={this.onSubmit}/>
         <FaceRecoganition box={this.state.box} imageurl={this.state.imageurl}/>
        
         </div> 
         
         :(
           this.state.route==="signin"
           ?<Signin onchange={this.onRoutechange}/>  
           :<Register onchange={this.onRoutechange}/>
         )  
           
        }
       
      </div>
    );
  }
  
}

export default App;
