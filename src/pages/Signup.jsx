import React, { Suspense } from 'react'
import Loading from '../components/generals/loading/Loading'

const SignupForm = React.lazy(() => import('../components/auth/SignupForm'))


const Signup = () => {
  return (
    <Suspense fallback={<Loading />}>
      <SignupForm />
    </Suspense>
  )

}

export default Signup