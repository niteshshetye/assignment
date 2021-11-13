import React,{useState} from 'react'
import styled from 'styled-components'

// components
import NavBar from './NavBar';
import DisplayInformation from './DisplayInformation'

const Section = styled.div`
    display: flex;
    position: relative;
`

const Admin = () => {
    const [display, setDisplay] = useState('userInfo')
    return (
        <React.Fragment>
            <NavBar setDisplay={setDisplay} />
            <Section>
                <DisplayInformation display={display} />
            </Section>
        </React.Fragment>
    )
}

export default Admin
