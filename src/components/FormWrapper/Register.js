import * as Yup from 'yup';

export const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
}

function equalTo(ref, msg) {
    return Yup.mixed().test({
      name: 'equalTo',
      exclusive: false,
      // eslint-disable-next-line no-template-curly-in-string
      message: msg || '${path} must be the same as ${reference}',
      params: {
        reference: ref.path,
      },
      test: function(value) {
        return value === this.resolve(ref);
      },
    });
  }
Yup.addMethod(Yup.string, 'equalTo', equalTo);

export const validationSchema = Yup.object({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    email: Yup.string().email("Enter Valid Email").required("Required"),
    password: Yup.string().min(4, 'Password must be greater than 4 charecters').required("Required"),
    confirm_password: Yup.string().equalTo(Yup.ref('password'), 'Passwords must match').required('Password confirm is required')
})

export const handleSubmit = values => {
    console.log(values)
}
