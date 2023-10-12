import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './contexts/state'
import FormContainer from './components/FormContainer/FormContainer'
import Sidebar from './components/Siderbar/Sidebar'
import Contact from './components/Contact/Contact'
import Plan from './components/Plan/Plan'
import AddOns from './components/AddOns/AddOns'

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
                                            element={<Contact />}
                                        />
                                        <Route
                                            path="/select-plan"
                                            element={<Plan />}
                                        />
                                        <Route
                                            path="/add-ons"
                                            element={<AddOns />}
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
