import ContactForm from './Components/ContactForm'
import ContactHeader from './Components/ContactHeader'
import Navbar from './Components/Navbar';

function App() {

  return (
    <div className="app">
      <Navbar />
      <div className="mainContainer">
        <ContactHeader />
        <ContactForm />
      </div>
    </div>
  )
}

export default App