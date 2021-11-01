import React from 'react'
import { Button } from '@material-ui/core'
import { useFormikContext } from 'formik'


const ButtonWrapper = ({children, ...otherProps}) => {
    const {submitForm} = useFormikContext()
    const handleSubmit = () => {
        submitForm()
    }
    const configButton = {
        variant: 'contained',
        fullWidth: true,
        onClick: handleSubmit
    }
    return (
        <Button {...configButton} style={{letterSpacing: '2px', backgroundColor: ' rgb(1 111 129)', color: 'white'}} >
            {children}
        </Button>
    )
}

export default ButtonWrapper
