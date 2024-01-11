import React from 'react'
import "./customcss.css"
import { useNavigate } from 'react-router-dom'

export default function Start() {

    const navigate = useNavigate()
  return (
    <div>
      <div className='' style={{height:"100vh", backgroundColor:"#23272C",alignItems:"center",justifyContent:"center",display:"flex"}}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <div className='text-white fw-bold fs-4'>
                PLACE THE CARD ON THE TIMELINE IN THE CORRECT ORDER.
            </div>
            <div className='btn mt-4 pt-1 pb-1 ps-3 pe-3 startbutton' style={{}} onClick={() => {navigate("/game")}}>
                START GAME
            </div>
        </div>
      </div>
    </div>
  )
}
