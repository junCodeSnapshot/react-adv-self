import { Formik, Form, Field, ErrorMessage } from 'formik';
import { MyCheckbox, MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

import "../styles/styles.css";

export const FormikAbstraction = () => {

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
                        jobType: Yup.string().notOneOf(['it-jr'], 'This option isn\'t valid').required('Required')
                    })}
            >
                {
                    (formik) => (
                        <Form>

                            <MyTextInput label='First Name' name='firstName' placeholder='Pedro'/>

                            <MyTextInput label='Last Name' name='lastName' placeholder='Cabernico'/>

                            <MyTextInput label='Email' name='email' placeholder='pedro@gmail.com' type='email'/>
                            
                            <MySelect label="Job Type" name="jobType">
                                <option value="sfsfsd">Pick something</option>
                                <option value="develeoper">develeoper</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT senior</option>
                                <option value="it-jr">IT junior</option>
                            </MySelect>


                            <MyCheckbox label="Terms & Conditions" name="terms" /> 

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
