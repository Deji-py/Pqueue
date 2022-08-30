import React from 'react'
import { UserAuth } from '../../Auth-Context'
import { InfoCard } from '../../components/Infocard'
import { StudentInfocard } from '../../components/StudentInfoCard'
import { StyledCard } from '../../components/StyledCard'
import Header from '../../GlobalComp/Header/header'
import { Activities } from './Acitivities'

function StudentDash() {
  const {setUsertype} = UserAuth()
  setUsertype("admin")
  return (
    <div >
    <Header/>
    <div style={{width:"100vw", display:"flex",flexDirection:"column", justifyContent:'center' }}>
      <StyledCard/>
       <Activities/>
    </div>
    </div>
    
  )
}

export default StudentDash