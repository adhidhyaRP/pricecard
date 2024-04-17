import { useState } from "react"





function Container(){
    let [img,setImg] = useState('')
    let [qrdata,setQrdata] = useState("")
    let [qrsize,setQrsize] = useState("")
    function GenerateQR(){
        console.log(sizeinput.value)
        try {
            setImg(`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${qrdata}`)
        } catch (error) {
            console.log(error)
        }

        
        // alert('ad')
    }
    console.log(img)
return <div className="bg">
   
<div className="Container">
    <div className='img'>
       {img && <img src={img} alt="" />}
    </div>
    <div>
    <label htmlFor="datainput"  className="labelname">Data for QR code</label>
    <input type="text" id="datainput" value={qrdata} onChange={(e)=>{setQrdata(e.target.value)}} placeholder="Enter Data"/>
    <label htmlFor="sizeinput"  className="size">Enter Size</label>
    <input type="text" id="sizeinput" value={qrsize} onChange={(e)=>{setQrsize(e.target.value)}} placeholder="Enter size"/>
    <button className="Generate" onClick={()=>{GenerateQR()}} >Generate QR</button>
    <button className="Download">Download QR</button>
    </div>
</div>
</div>
}

export const Qrcode = () => {
  return <Container/>
    
 
}
