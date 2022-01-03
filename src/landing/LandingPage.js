import React from 'react'
import HeroImage from '../landing/HeroImage'
import LandingContactUs from '../landing/LandingContactUs'
import LandingImmersionSec from '../landing/LandingImmersionSec'

function landingPage() {
    return (
        <div>
            <HeroImage />
            <LandingImmersionSec />
            <LandingContactUs />
        </div>
    )
}

export default landingPage
