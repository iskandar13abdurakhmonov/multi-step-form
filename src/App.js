/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter as Router } from 'react-router-dom'
import FormContainer from './components/FormContainer/FormContainer'
import Sidebar from './components/Siderbar/Sidebar'
import { GlobalStorage } from './hooks/GlobalContext'
import Form from './components/Form/Form'

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <main className="main">
                    <div className="main__container containerMain">
                        <FormContainer>
                            <GlobalStorage>
                                <Router>
                                    <Sidebar />
                                    <Form />
                                </Router>
                            </GlobalStorage>
                        </FormContainer>
                    </div>
                </main>
                <footer className="footer">
                    <div className="footer__container">
                        <div class="attribution">
                            Challenge by
                            <a
                                href="https://www.frontendmentor.io?ref=challenge"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Frontend Mentor
                            </a>
                            . Coded by
                            <a href="https://www.frontendmentor.io/profile/iskandar13abdurakhmonov">
                                eescan
                            </a>
                            .
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default App
