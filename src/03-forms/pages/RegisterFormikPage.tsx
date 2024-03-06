import * as Yup from 'yup';
import { Form, Formik } from 'formik'
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

    return (
        <Formik initialValues={{
            name: '',
            email: '',
            password1: '',
            password2: '',
        }}
            onSubmit={values => { console.log(values) }}
            validationSchema={
                Yup.object({
                    'name': Yup.string().min(2, 'Should have 2 character at least').max(15, 'Should be 15 characters or less').required('Required.'),
                    'email': Yup.string().email().required('Required.'),
                    'password1': Yup.string().min(6, 'Should be 6 characters at least').required('Required.'),
                    'password2': Yup.string().oneOf([Yup.ref('password1')], 'Passwords should match').required('Required.')
                })
            }
        >
            {({ isSubmitting, dirty, handleReset, handleSubmit }) => {
                return (
                    <Form onSubmit={handleSubmit} noValidate>
                        <MyTextInput label='Name' name='name' placeholder='Name' />
                        <MyTextInput label='Email' name='email' placeholder='Email Address' type='email' />
                        <MyTextInput label='Password' name='password1' placeholder='Create new password' type='password' />
                        <MyTextInput label='Confirm Password' name='password2' placeholder='Confirm password' type='password' />

                        <button type='reset' onClick={handleReset} disabled={!dirty}>Reset</button>
                        <button type='submit' disabled={isSubmitting}>Submit</button>
                    </Form>
                )
            }}
        </Formik>
    )
}
