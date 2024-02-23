import { ErrorMessage, useField } from "formik"


interface MyTextInputProps {
    label: string,
    name: string,
    [x: string]: any,
}

//...props storage all the rest props into props
export const MyCheckbox = ({ label, ...props }: MyTextInputProps) => {

    //MetaData refeers to all the other information like if the component was touched or etc
    const [field] = useField({ ...props, type: 'checkbox' })

    return (
        <>
            <label>
                <input type="checkbox" {...field} {...props} />
                {label}
                <ErrorMessage name={props.name} component="span"/>

                {/* 
                {
                    metaData.touched && metaData.error && (
                        <span>{metaData.error}</span>
                    )
                } */}

            </label>
        </>
    )
}
