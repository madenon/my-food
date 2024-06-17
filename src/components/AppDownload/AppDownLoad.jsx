import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/assets'




const AppDownLoad = () => {
  return (
    <div className='app-download' id='app-download'>
      <p> Pour une meilleure expérience, téléchargez <b/> ​​l'application Food Fast  </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
      
    </div>
  )
}

export default AppDownLoad
