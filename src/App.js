import Form from './components/Form/Form'
import FormContainer from './components/FormContainer/FormContainer'
import Sidebar from './components/Siderbar/Sidebar'

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <main className="main">
                    <div className="main__container containerMain">
                        <FormContainer>
                            <Sidebar />
                            <Form />
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
