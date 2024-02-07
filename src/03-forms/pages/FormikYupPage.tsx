import { useFormik } from 'formik';
import * as Yup from 'yup';

import "../styles/styles.css";

export const FormikYupPage = () => {



    const { handleSubmit, errors, touched, getFieldProps} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        //This will execute when our form was validaded 
        async onSubmit(values) {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'should be 15 characters or less').required('Required'),
            lastName: Yup.string().max(10, 'Should be 10 characteres or less').required('Required'),
            email: Yup.string().email('This is not a valid email').required('Required')
        })
    })

    return (
        <div>
            <h1>Yup Formik tutorial</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    // onBlur={ handleBlur }
                    // onChange={handleChange}
                    {...getFieldProps('firstName')}
                    // value={values.firstName}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    {
                        ...getFieldProps('lastName')
                    }
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    {
                        ...getFieldProps('email')
                    }
                />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
