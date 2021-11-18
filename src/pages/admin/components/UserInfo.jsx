import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Spinner from '../../../components/Spinner'
import { deletUser, loadAllUsers } from '../../../redux/apiCalls'
import EditModel from './EditModel'

const Container = styled.div`
    padding: 20px;
`
const TopHeading = styled.h2`
    text-align: center;
`
const DisplayData = styled.div``

const Icon = styled.i`
    padding: 2px 10px;
    cursor: pointer;
`


const UserInfo = () => {
    const [showModel, setShowModel] = useState(false);
    const [userId, setUserId] = useState();
    const {allUsers: users, isEditing} = useSelector(state => state.admin.users)
    const dispatch = useDispatch()

    useEffect(() => {
        loadAllUsers(dispatch)
    },[dispatch])

    const handleEdit = (id) => {
        console.log('Id', id); 
        setUserId(id)      
        setShowModel(true)    
    }

    const handleDelete = (id) => {
        console.log('Delete hit...!');
        deletUser(dispatch, id)
    }
    return (
        <>
            {
                showModel && <EditModel id={userId} setShowModel={setShowModel} />
            }
            <Container>
                <TopHeading>
                    Our Users
                </TopHeading>
                {
                    isEditing? <Spinner />: (
                        <DisplayData>
                                {
                                    users.length === 0? <h2 style={{textAlign: 'center'}}>Loding...!</h2>: (
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Created At</th>
                                                    <th scope="col">Operation</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    users.map(user => (
                                                        <tr key={user._id}>
                                                            <th scope="row">{user._id}</th>
                                                            <td>{user.username}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.createdAt}</td>
                                                            <td>
                                                                <Icon className="fas fa-user-edit" onClick={() => handleEdit(user._id)}></Icon>
                                                                <Icon className="fas fa-user-minus" onClick={() => handleDelete(user._id)}></Icon>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    )
                                }
                        </DisplayData>
                    )
                }
            </Container>
        </>
    )
}

export default UserInfo
