import { ErrorMessage, useField } from "formik"


interface MyTextInputProps{
    label: string,
    name: string,
    type?: 'text' | 'email' | 'password',
    placeholder?: string,
    [x: string]: any,
}

//...props storage all the rest props into props
export const MyTextInput = ({label, ...props}: MyTextInputProps) => {

    //MetaData refeers to all the other information like if the component was touched or etc
    const [field] = useField(props)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            {/* //destructure all the input information and the extra props we sent to 
            this input also this is only for flexibility*/}
            <input className="text-input" {...field} {...props} />
            <ErrorMessage name={props.name} component="span"/> 


            {/* {
                metaData.touched && metaData.error && (
                    <span>{metaData.error}</span>
                )
            } */}
        </>
    )
}
