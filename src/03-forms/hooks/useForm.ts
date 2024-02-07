import { ChangeEvent, useState } from "react"


//<T> Generic Hook it take all that comes with the initState as signature.
export const useForm= <T>(initialState: T) => {
    const [formData, setFormData] = useState(initialState);

    const onChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        let { name, value } = target
        setFormData( oldState =>({
            ...oldState,
            [name]: value
        }))
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const resetForm = () => {
        setFormData({...initialState})
    }

    return{
        formData,
        onChange,
        resetForm,
        isValidEmail,
        ...formData
    }
}
