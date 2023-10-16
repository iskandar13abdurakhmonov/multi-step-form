import React from 'react'
import FormHeader from './FormHeader'
import style from './AddOns.module.css'
import Checkbox from '../../UI/Checkbox'
import { GlobalContext } from '../../hooks/GlobalContext'
import Button from '../../UI/Button'
import { useContext } from 'react'

export const options = [
    {
        name: 'Online Service',
        description: 'Access to multiplayer games',
        pricePerMonth: 1,
        pricePerYear: 10,
    },
    {
        name: 'Larger Stroage',
        description: 'Extra 1TB of cloud save',
        pricePerMonth: 2,
        pricePerYear: 20,
    },
    {
        name: 'Customizable Profile',
        description: 'Custom theme on your profile',
        pricePerMonth: 2,
        pricePerYear: 20,
    },
]

const AddOns = () => {
    const { addOns, setAddOns, step, setStep } = useContext(GlobalContext)

    return (
        <>
            <FormHeader
                title="Pick add-ons"
                info="Add-ons help enhance your gaming experiance"
            />
            <Checkbox
                options={options}
                value={addOns}
                setValue={setAddOns}
            />
            <div className={style.flexParent}>
                <div className={style.buttonWrapper}>
                    <Button
                        onClick={() => setStep(step - 1)}
                        id="back"
                        buttonInfo="Go Back"
                    />
                    <Button
                        onClick={() => {
                            setStep(step + 1)
                        }}
                        id="next"
                        buttonInfo="Next Step"
                    />
                </div>
            </div>
        </>
    )
}

export default AddOns