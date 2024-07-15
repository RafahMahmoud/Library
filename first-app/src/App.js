import './App.css';
import { Routes, Route, Link , useNavigate} from 'react-router-dom';
import About from './About-us';
import Contact from './Contact';
import SignUp from './SignUp';
import Home from './Home';
import Fire from './BookCatalog';

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}
function Header() {
  let navigate=useNavigate();
 const user = JSON.parse(localStorage.getItem('user'))
 console.log(user);
 
 let logout=()=>{
  localStorage.removeItem('user');
  navigate('/')
 }

 let signup=()=>{
  navigate('/SignUp')
 }
  return (
    <div className="rrr">
    <div className="nav-bar flex bg-gray-700 text-white px-16 py-4 space-x-96 ">
      <div className='text-xl font-bold'>Rafah Library</div>
      
      <div>
        <ul className='flex  space-x-16 text-lg font-bold'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/bookcatalog">Book Catalog</Link></li>
          {user?<li className='cursor-pointer' onClick={logout}>Log Out</li>:<li className='cursor-pointer' onClick={signup}>Sign up</li>}
          {/* {user?<li>{user.name}</li>:<></>} */}
        </ul>
      </div>
    </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/bookcatalog" element={<Fire/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
        </div>
   
  );
}

export default App;





