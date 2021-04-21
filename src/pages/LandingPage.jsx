import React, { Suspense } from 'react'
import Loading from '../components/generals/loading/Loading'

const Greeting = React.lazy(() => import('../components/landingPage/greeting/Greeting'))
const Presentation = React.lazy(() => import('../components/landingPage/presentation/Presentation'))
const Benefits = React.lazy(() => import('../components/landingPage/benefits/Benefits'))
const Parting = React.lazy(() => import('../components/landingPage/parting/Parting'))

const LandingPage = () => {


  return (
    <div>
      <Suspense fallback={<Loading />}>
        <div className="containerY">
          <div id="greeting">
            <Greeting />
          </div>

          <div id="presentation">
            <Presentation />
          </div>

          <div id="benefits">
            <Benefits />
          </div>
          <div id="parting">
            <Parting />
          </div>

        </div>
      </Suspense>
    </div>
  )

}

export default LandingPage