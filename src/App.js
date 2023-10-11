import { useState } from 'react'
import Form from './components/Form/Form'
import FormContainer from './components/FormContainer/FormContainer'
import Sidebar from './components/Siderbar/Sidebar'

const steps = [
    {
        stepId: 1,
        stepNum: 'STEP 1',
        stepText: 'YOUR INFO',
        isActive: false,
    },
    {
        stepId: 2,
        stepNum: 'STEP 2',
        stepText: 'SELECT PLAN',
        isActive: false,
    },
    {
        stepId: 3,
        stepNum: 'STEP 3',
        stepText: 'ADD-ONS',
        isActive: false,
    },
    {
        stepId: 4,
        stepNum: 'STEP 4',
        stepText: 'SUMMARY',
        isActive: false,
    },
]

const formActive = [
    {
        formTitle: 'Personal Info',
        formDescr: 'Please provide your name, email address, and phone number.',
        formMain: [
            {
                formLable: 'Name',
                formInput: 'e.g Stephen King',
            },
            {
                formLable: 'Email Address',
                formInput: 'e.g. stephenking@lorem.com',
            },
            {
                formLable: 'Phone Number',
                formInput: 'e.g. +1 234 567 890',
            },
        ],
        isActive: false,
    },
    {
        formTitle: 'Select your plan',
        formDescr: 'You have option of monthtly or yearly billing',
        formOptions: [
            {
                optionImage: '../public/images/icon-arcade.svg',
                optionName: 'Arcade',
                optionPlan: '$9/mo',
            },
            {
                optionImage: '../public/images/icon-advanced.svg',
                optionName: 'Advanced',
                optionPlan: '$12/mo',
            },
            {
                optionImage: '../public/images/icon-pro.svg',
                optionName: 'Pro',
                optionPlan: '$15/mo',
            },
        ],
        isActive: false,
        isMonthly: true,
        isYearly: false,
    },
]

function App() {
    const [active, setActive] = useState(false)

    const [activeForm, setActiveForm] = useState(1)
    console.log(activeForm)

    const handeNextClick = () => {
        if (activeForm < 4) {
            setActiveForm(activeForm + 1)
        }
    }

    const handlePrevClick = () => {
        if (activeForm > 1) {
            setActiveForm(activeForm - 1)
        }
    }

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <div className="App">
            <div className="wrapper">
                <main className="main">
                    <div className="main__container containerMain">
                        <FormContainer>
                            <Sidebar
                                active={active}
                                steps={steps}
                            />
                            <Form
                                handleClick={handleClick}
                                activeForm={activeForm}
                                onNextClick={handeNextClick}
                                onPrevClick={handlePrevClick}
                            />
                        </FormContainer>
                    </div>
                </main>
                <footer className="footer">
                    <div className="footer__container">footer</div>
                </footer>
            </div>
        </div>
    )
}

export default App
