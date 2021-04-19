
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { mountAppAuthenticatedAction } from '../state/actions/authActions'

const AppConnectLS = ({ render }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(mountAppAuthenticatedAction())
    }, [dispatch])

    return render()
}

export default AppConnectLS