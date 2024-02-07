import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import "../styles/styles.css";

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components Tutorial</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string().max(15, 'should be 15 characters or less').required('Required'),
                        lastName: Yup.string().max(10, 'Should be 10 characteres or less').required('Required'),
                        email: Yup.string().email('This is not a valid email').required('Required')
                    })}
            >
                {
                    (formik) => (
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type='text' />
                            <ErrorMessage name='firstName' component='span'/>

                            <label htmlFor="lastName">Last Name</label>
                            <Field name='lastName' type='text' />
                            <ErrorMessage name='lastName' component='span'/>

                            <label htmlFor="email">Email Address</label>
                            <Field name='email' />
                            <ErrorMessage name='email' component='span'/>

                            <label htmlFor="terms">Terms and Conditions</label>
                            <Field name='terms' type="checkbox" style={{width: '15px'}}/>
                            <ErrorMessage name='email' component='span'/>


                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>


        </div>
    )
}
