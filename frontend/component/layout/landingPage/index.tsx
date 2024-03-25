import React from 'react'
import Footer from '../footer'
import HomeLandingPage from '../home'
import LeadingResponsibleBusiness from '../leading_responsible_business/login'
import ObjectivePage from '../objective'
import VissionMission from '../vission_mission'
import DirectorialDisha from '../directorial_disha'
import TopicContent from '../topic_and_content'
import OrganizationAffiliations from '../organization_affiliations'

const LandingPage = () => {
  return (
    <div>
      <HomeLandingPage/>
      <LeadingResponsibleBusiness/>
      <ObjectivePage/>
      <VissionMission/>
      <DirectorialDisha/>
      <TopicContent/>
      <OrganizationAffiliations/>
      <Footer/>
    </div>
  )
}

export default LandingPage
