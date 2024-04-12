import './App.css';
import ContactForm from './components/ContactForm';
import ContactUs from './components/ContactUs';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div className='container'>
      <Navigation />
      <ContactUs />
      <ContactForm />
    </div>
  )
}

export default App