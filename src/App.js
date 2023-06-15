import './App.css';
import Video from './pages/Video'
import Header from './pages/components/header/Header'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='app__videos'>
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
