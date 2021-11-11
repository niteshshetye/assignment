import * as Yup from 'yup';

export const initialValues = {
    username: '',
    password: ''
}

export const validationSchema = Yup.object({
    username: Yup.string().min(3, 'Username Atleast of 3 Charecters').required('Required'),
    password: Yup.string().min(4, 'Password must be greater than 4 charecters').required("Required")
})
