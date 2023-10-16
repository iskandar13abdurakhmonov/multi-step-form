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
                    <div className="footer__container">footer</div>
                </footer>
            </div>
        </div>
    )
}

export default App
