import React from 'react'
import HomeLandingPage from '../home'
import ObjectivePage from '../objective'
import VissionMission from '../vission_mission'
import DirectorialDisha from '../directorial_disha'
import TopicContent from '../topic_and_content'
import Footer from '../footer'

const LandingPage = () => {
  return (
    <div>
      <HomeLandingPage/>
      <ObjectivePage/>
      <VissionMission/>
      <DirectorialDisha/>
      <TopicContent/>
      <Footer/>
    </div>
  )
}

export default LandingPage
