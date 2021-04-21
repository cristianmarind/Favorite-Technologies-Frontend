import React, { Suspense } from 'react'

const TechListManagment = React.lazy(() => import('../components/techs/techListManagment/TechListManagment'))


const TechList = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Suspense fallback={<div>Loading...</div>}>
          <TechListManagment />
        </Suspense>
      </div>
    </div>
  )

}


export default TechList
