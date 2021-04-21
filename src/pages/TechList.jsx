import React, { Suspense } from 'react'
import Loading from '../components/generals/loading/Loading'

const TechListManagment = React.lazy(() => import('../components/techs/techListManagment/TechListManagment'))


const TechList = () => {
  return (
    <div className="pt-5 pb-5">
      <div className="pt-5 containerY">
        <Suspense fallback={<Loading />}>
          <TechListManagment />
        </Suspense>
      </div>
    </div>
  )

}


export default TechList
