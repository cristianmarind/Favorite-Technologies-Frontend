import React, { Suspense } from 'react'
const SignupForm = React.lazy(() => import('../components/auth/SignupForm'))


const Signup = () => {
  return (
    <div className="containerX x-center pt-5">
      <div className="pt-4">
        <Suspense fallback={<div>Loading...</div>}>
          <SignupForm />
        </Suspense>
      </div>
    </div>
  )

}

export default Signup