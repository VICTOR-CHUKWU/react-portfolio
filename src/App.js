import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <section className='container-fluid'>
    <div className='row mx-0'>
     <div className='col-4 profile-pics-container'></div>
     <div className='col-8 profile-container ml-2'>
    <Profile />
     </div>
    </div>
    </section>
  );
}

export default App;
