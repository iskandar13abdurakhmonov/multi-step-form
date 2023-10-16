import { GlobalContext } from './GlobalContext'
import { useContext } from 'react'
import { useState } from 'react'

const useForm = () => {
    const { formData, setFormData } = useContext(GlobalContext)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        setErrors({
            ...errors,
            [e.target.name]: '',
        })
    }

    const validate = () => {
        let newErrors = {}
        for (let [field, value] of Object.entries(formData)) {
            if (!value) {
                newErrors[field] = `${
                    field.charAt(0).toUpperCase() + field.slice(1)
                } is required`
            } else if (field === 'email') {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    newErrors[field] = 'Invalid email address'
                }
            } else if (field === 'phone') {
                if (!/^\d{12}$/.test(value)) {
                    newErrors[field] = 'Invalid phone number'
                }
            }
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    return { formData, handleChange, errors, validate }
}

export default useForm
