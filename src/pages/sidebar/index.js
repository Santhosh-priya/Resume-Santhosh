import React from 'react'
import style from "./sidebar.module.sass"
import profilepic from '..//..//images/download.jfif' 
const Sidebar = () => {
  return (
    <div Style='width : 25%'>
        <div className={style.sidebar}>
           
                <div className={style.side}>
                <img src={profilepic} alt=''  className={style.img1}   />
                </div>
                <div>
                    <div className={style.fistbox}>CARRER OBJECTIVE</div>
                    <div className={style.box1}>To make the company elite by my  agile participation in all the assigned work</div>
                </div>
                <div>
                    <div className={style.fistbox}>PERSONAL DETAILS</div>
                    <div className={style.details}>
                    <div className={style.box2}>DOB : 29-05-2004</div>
                    <div className={style.box2}>Gende : Male</div>
                    <div className={style.box2}>NATIONALITY : Indian</div>
                    <div className={style.box2}>MARITAL STATUS : Single</div>
                    <div className={style.box2}>Father's Name : A.Selvaraj</div>
                    <div className={style.box2}>Mother's Name : S.Pichamal</div>
                    <div className={style.box2}>Address :</div>
                    <div className={style.box2}>NO.3 kuppusamy Naudu Compound,alwarpurm Madurai-2 </div>
                      

                    <div>
                    <div className={style.fistbox}>CONTACT</div>
                    <div className={style.box2}>9360771947</div>
                    <div className={style.box2}>santhoshselvaraj492@gmal.com</div>


                    <div className={style.fistbox}>EXPERTISE</div>
                    <ul>
                     <li className={style.box2}>Management Skills</li>
                    <li className={style.box2}>Good Communication Skills</li>
                    <li className={style.box2}>Negotiation</li>
                    <li className={style.box2}>Positive Attitude</li>
                    <li className={style.box2}>Adaptability In Any Circumstance</li>
                    <div className={style.box2}>Negotiation</div>
                    </ul>

                    <div className={style.fistbox}>Declaration</div>
                    <div className={style.box2}>I hereby declare that all information furnished above is true and correct</div>
                    <div className={style.sign}>S.Velankanni Santhosh</div>
                    

                    


                    
                    

                    
                    
                </div>
                    
                   

                  
                    </div>
                  
                    

                    

                </div>
            

        </div>
      
    </div>
  )
}

export default Sidebar
