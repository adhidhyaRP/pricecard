// // import React from 'react'

const arrofstudents = [
  {
    NAME:'ADHIDHYA',
    COURSE: 'MECH',
    COLLEGE: 'KCT',
    COLLEGEFULL: 'KUMARAGURU COLLEGE OF TECHNOLOGY',
    IMAGE: 'src\adhi.jpg',
    BATCH: '2020-2024',
    COLOR: 'orange',


  },
  {
    NAME:'ARAVIND',
    COURSE: 'CIVIL',
    COLLEGE: 'CIT',
    COLLEGEFULL: 'COIMBATORE INSTITUTE OF TECHNOLOGY',
    IMAGE: 'src\adhi.jpg',
    BATCH: '2020-2024',
    COLOR: 'blue',


  },
  {
    NAME:'LAXMI',
    COURSE: 'EIE',
    COLLEGE: 'KCT',
    COLLEGEFULL: 'KUMARAGURU COLLEGE OF TECHNOLOGY',
    IMAGE: 'src\LVP.jpg',
    BATCH: '2020-2024',
    COLOR: 'orange',


  },
]

// function IndividualStudent(props){
//   return <div className="container">
//       <h1>Student Card</h1>
//       <img src={props.image} alt="" />
//       <h3>name : {props.name}</h3>
//       <h3>dept :{props.dept}</h3>
//       <h3>college :{props.college}</h3>
//   </div>
  
    
  
// }

function IndividualStudent(props){
  return <div className="container">
    <h2 className={props.COLLEGE}>{props.COLLEGEFULL}</h2>
    <h3>STUDENT ID CARD</h3>
    <img src='src\adhi.jpg' alt="why" />
    <h4>NAME : {props.NAME}</h4>
    <h4>COURSE : {props.COURSE}</h4>
    <h4>BATCH : {props.BATCH}</h4>
    <div className={props.COLOR}></div>
    


  </div>
}

export const Student = () => {
  return <>
 
    
  
  {
  arrofstudents.map((val,ind) => (
    <IndividualStudent NAME={val.NAME} IMAGE={val.IMAGE} COURSE={val.COURSE}
    COLLEGE={val.COLLEGE} COLLEGEFULL={val.COLLEGEFULL}  BATCH={val.BATCH} 
    COLOR = {val.COLOR} />
  ))
}
  </>
    
  
}

{/* <IndividualStudent name='Adhidhya' dept='mechanical' college = 'KCT'/> */}