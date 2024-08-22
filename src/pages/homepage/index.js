import React from 'react'
import style from'./homepage.module.sass'

const Homepage = () => {
  return (
    <div >
      <div className={style.home1}>
      
        QUALIFICATION</div>
        
      <ul className={style.box1}>

      <li className={style.home12}>Bsc Computer Science From Walkboard College Madurai(Kamarajar university)</li>
      <li className={style.home12} >HSC 2020-2021 ST.Marry's Higher Secondary School,Madurai</li>
      <li className={style.home12}>SSLC 2018-2019 ST.Marry's Higher Secondary School,Madurai</li>

      </ul>


      <div className={style.home1}>
      
        CERTIFFICATION COURSE</div>
      <div className={style.box1}>

      <ul className={style.home12}> <li>Full Stack Developer</li></ul>
      
      </div>

      <div className={style.home1}>
      
      LANGUAGE</div>
    <div className={style.box1}>
      <ul>
    <li className={style.home12}>Tamil</li>
    <li className={style.home12}>English</li>
    </ul>
    
    </div>
    <div>
    <div className={style.home1}>PROFICIENT WITH</div>
    <div className={style.home12}>
      <ul>
  <li>Node JS</li>
  <li>React JS</li>
  <li>JavaScript</li>
  <li>HTML/CSS</li>
  <li>Session-Cookie</li>
  <li>Boostrap </li>
  <li>React JS</li>
  
</ul></div>
    </div>


    <div className={style.home1}>FAMILIER WITH</div>

    <div  className={style.home12}>
      <ul>
    <li>Java</li>
     <li>C</li>
     <li>Postman</li>
     <li>GitHub</li>
     </ul>
    </div>







      
      

      



      
    </div>
  )
}

export default Homepage
