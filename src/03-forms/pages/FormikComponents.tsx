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
                        email: Yup.string().email('This is not a valid email').required('Required'),
                        terms: Yup.boolean().oneOf([true], 'You need to accept the terms and conditions'),
                        jobType: Yup.string().notOneOf(['it-jr'], 'This option isn\'valid').required('Required')
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

                            <label htmlFor="jobType">Job type</label>
                            <Field name='jobType' as="select">
                                <option value="sfsfsd">Pick something</option>
                                <option value="develeoper">develeoper</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT senior</option>
                                <option value="it-jr">IT junior</option>
                            </Field>
                            <ErrorMessage name='jobType' component='span'/>

                            <label>
                                <Field name='terms' type="checkbox" style={{width: '15px'}}/>
                                Terms and Conditions
                            </label>
                            <ErrorMessage name='terms' component='span'/>


                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>


        </div>
    )
}
