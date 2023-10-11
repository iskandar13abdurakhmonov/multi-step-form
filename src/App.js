import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './contexts/state'
import { useState } from 'react'
import Form from './components/Form/Form'
import FormContainer from './components/FormContainer/FormContainer'
import Sidebar from './components/Siderbar/Sidebar'

function App() {
    return (
        <div className="App">
            <AppProvider>
                <div className="wrapper">
                    <main className="main">
                        <div className="main__container containerMain">
                            <FormContainer>
                                <Router>
                                    <Sidebar />
                                    <Routes>
                                        <Route
                                            path="/"
                                            element={<Form />}
                                        />
                                    </Routes>
                                </Router>
                            </FormContainer>
                        </div>
                    </main>
                    <footer className="footer">
                        <div className="footer__container">footer</div>
                    </footer>
                </div>
            </AppProvider>
        </div>
    )
}

export default App
