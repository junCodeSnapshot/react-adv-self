import { Form, Formik } from "formik"
import formJSON from '../data/custom-forms.json'
import { MySelect, MyTextInput } from "../components"
import * as Yup from 'yup';


const initialValues: { [key: string]: any } = {};
const validationFields: { [key: string]: any } = {};

export const DynamicForms = () => {
    //first - this is why if there is a value in the input the field that is going
    //to generare will have the value sent from the backend.
    for (const input of formJSON) {
        initialValues[input.name] = input.value;
        if(!input.validation) continue;
        let schema = Yup.string();
        for (const rule of input.validation) {

            if(rule.type === 'required'){
                schema = schema.required('Campo requerido')
            }
            if(rule.type === 'minLength'){
                schema = schema.min( (rule as any).value || 2, `El minimo es ${rule.value || 2} caracteres` )
            }
            if(rule.type === 'email'){
                schema = schema.email("Debes de ingresar un email.")
            }
        }
        validationFields[input.name] = schema;
    }
        
    const validationSchema = Yup.object({...validationFields});
    //second the return
    return (
        <div>
            <h1>DynamicForms</h1>
            <Formik initialValues={
                initialValues
            }
                validationSchema={ validationSchema }
                onSubmit={values => console.log(values)}
            >
                {/*Just to know we have an object called formik*/}
                {(formik) => (
                    <Form>
                        {
                            formJSON.map(({ label, name, placeholder, type, options }) => {

                                if (type === 'input' || type === 'password' || type === 'email') {
                                    return <MyTextInput
                                        key={name}
                                        type={type as any}
                                        label={label}
                                        name={name}
                                        placeholder={placeholder}
                                    />
                                }
                                else if(type === 'select'){
                                    return(
                                        <MySelect 
                                            key={name}
                                            label={label}
                                            name={name}
                                        >
                                                <option value="">Select an option</option>
                                                {
                                                    options?.map( option => (
                                                        <option  
                                                            key={option.id} 
                                                            value={option.id}
                                                        >
                                                            {option.label}
                                                        </option>
                                                    ))
                                                }
                                        </MySelect>
                                    )
                                }
                                throw new Error(`El type ${type} no es soportado`)
                            })}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
