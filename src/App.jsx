
import { useState } from "react";
import "./pricecard.css"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

 

function App() {
    const free ={
      price :{value : '$ 0/month'},
      unlimitedusers :{style : 'abled'},
      storage :{style : 'abled'},
      communityaccess :{style : 'disabled'},
      unlimitedprivateprojects :{style : 'disabled'},
      freesubdomain :{style : 'disabled'},
      monthlystatusreports :{style : 'disabled'},

      
    }
    const paid ={
      price :{value : '$ 14/month'},
      unlimitedusers :{style : 'abled'},
      storage :{style : 'abled'},
      communityaccess :{style : 'abled'},
      unlimitedprivateprojects :{style : 'abled'},
      freesubdomain :{style : 'disabled'},
      monthlystatusreports :{style : 'disabled'},

      
    }
    const premium = {
      price :{value : '$ 49/month'},
      unlimitedusers :{style : 'abled'},
      storage :{style : 'abled'},
      communityaccess :{style : 'abled'},
      unlimitedprivateprojects :{style : 'abled'},
      freesubdomain :{style : 'abled'},
      monthlystatusreports :{style : 'abled'},
    }
    const[count,setcount] = useState(0)

  return (
    <div className="bg">
    <Pricecard type={free} setcount = {setcount} count = {count}/>
    <Pricecard type={paid} setcount = {setcount} count = {count}/>
    <Pricecard type={premium} setcount= {setcount} count = {count}/>
    {/* <h1>counter : {count}</h1> */}
    </div>
  

  );
}

export default App

function Pricecard({type,setcount,count}){

 const [oldone,newone] = useState(true)

  return (
    
    <div className="container">
    <h4>PLUS</h4>
    <h1>{type.price.value}</h1>
    <div className="innercontainer">
     
    <p className={type.unlimitedusers.style}> Unlimited users</p>
    <p className={type.storage.style}>Storage</p>
    <p className={type.communityaccess.style}>Community access</p>
    <p className={type.unlimitedprivateprojects.style}>Unlimited private projects</p>
    <p className={type.freesubdomain.style}>Free subdomain</p>
    <p className={type.monthlystatusreports.style}>Monthly status reports</p>
   { oldone===true ? <button onClick={()=>{newone(!oldone); setcount(count = count + 1)}}>PAY NOW</button> : <button onClick={()=>{newone(!oldone);setcount(count = count - 1)}}>REMOVE</button> }
    
    </div>
    
    </div>
    
  )

}