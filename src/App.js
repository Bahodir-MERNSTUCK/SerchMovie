import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Main from './Layout/Main';
import Mother from './Component/Mother';

function App() {
  return (
    <>
      <Header />
      <Mother>
      <Main />
      </Mother>
      <Footer />
    </>
  );
}

export default App;
