import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './contexts/state'
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

function App() {
    const [active, setActive] = useState(false)

    const [activeForm, setActiveForm] = useState(1)
    console.log(activeForm)

    const handeNextClick = (id) => {
        if (activeForm < 4) {
            setActiveForm()
        }
    }

    const handlePrevClick = () => {
        if (activeForm > 1) {
            setActiveForm((prev) => prev - 1)
        }
    }

    const handleClick = () => {
        setActive(steps.map((step) => (step.isActive = true)))
    }

    return (
        <div className="App">
            <AppProvider>
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div className="wrapper">
                                    <main className="main">
                                        <div className="main__container containerMain">
                                            <FormContainer>
                                                <Sidebar
                                                    active={active}
                                                    steps={steps}
                                                    activeForm={activeForm}
                                                    onNextClick={handeNextClick}
                                                    onPrevClick={
                                                        handlePrevClick
                                                    }
                                                    onaHandleClick={handleClick}
                                                />
                                                <Form />
                                            </FormContainer>
                                        </div>
                                    </main>
                                    <footer className="footer">
                                        <div className="footer__container">
                                            footer
                                        </div>
                                    </footer>
                                </div>
                            }
                        />
                    </Routes>
                </Router>
            </AppProvider>
        </div>
    )
}

export default App
