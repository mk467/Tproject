import React from 'react'
import './NavBar.css'

export const NavBar = () => {
  return (
    <div style={{width:"100%",height:"15vh",backgroundColor:"lightblue" ,display:"flex",alignItems:"center",borderBottom:"2px solid red"}}>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"80%",width:"5%",marginLeft:"2%",borderRadius:"10px"}}>
        <a href="/" style={{scale:"10%"}}>
          <img src="https://www.svgviewer.dev/static-svgs/492227/link.svg"  alt=""/>
        </a>
      </div>
      <div style={{width:"60%",height:"90%",marginLeft:"10%",marginTop:"-1%"}}>
        <table border="1px" width="70%" height="90%">
          <tr>
            <th><a href="/Home" style={{textDecoration:"none",color:"grey"}}>Home</a></th>
            <th><a href="/Products" style={{textDecoration:"none",color:"grey"}}>Product</a></th>
            <th><a href="/About" style={{textDecoration:"none",color:"grey"}}>About</a></th>
            
          </tr>
        </table>

      </div>
    </div>
  )
}
