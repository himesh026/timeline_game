import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./customcss.css"

export default function Game() {
  return (
    <div>
      <div style={{backgroundColor:"#23272C" , height:"100%"}}>
            <div style={{display:"flex",flexDirection:"column" , justifyContent:"center", alignItems:"center"}}>
                <div className="mt-4" style={{display:"flex",flexDirection:"row",width:"fit-content"}} >
                    <FontAwesomeIcon icon={faHeart} className='text-danger  p-2 ' style={{fontSize:"50px"}}/>
                    <FontAwesomeIcon icon={faHeart} className='text-danger  p-2' style={{fontSize:"50px"}}/>
                    <FontAwesomeIcon icon={faHeart} className='text-danger  p-2' style={{fontSize:"50px"}}/>
                </div>
                <div className='mt-5 p-3 mycard' style={{border:"2px dashed #ffffff ", padding:"10px",borderRadius: "0.375rem",display:"flex",flexDirection:"column"}}>
                    <div className="card" style={{display:"flex",flexDirection:"column"}} draggable="true">
                        <div className='text-black fw-bold m-2'>
                            demo title
                        </div>
                        <div className='text-black   ms-2 mb-1'>
                            demo text
                        </div>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Golfstrom.jpg/300px-Golfstrom.jpg' style={{height:"140px" , width:"140px"}} draggable="false"/>
                        <div className='text-center text-white fw-bold' style={{backgroundColor:"#007FFF",borderRadius: "0 0 0.375rem 0.375rem"}}>discovered</div>
                    </div>
                </div>
                <div  style={{
                        width:"100%" , height:"2px" , backgroundColor:"transparent" , border:"2px dashed #ffffff" ,margin :"300px 0"
                    }}>
                   
                </div>
            </div>
      </div>
    </div>
  )
}
