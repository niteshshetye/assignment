import React from 'react'
import {useLocation} from 'react-router-dom'
const SuccessPage = () => {
    const location = useLocation();
    console.log('location hit',location)
    return (
        <div>
            Success
        </div>
    )
}

export default SuccessPage
