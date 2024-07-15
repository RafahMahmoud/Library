import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function SignUp(){
    const [userData,setData]=useState({name:"" , email:"" , pass:""})

    let navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/');
      };

      return (
        <div className="auth-container ml-28 mt-20">
          <h2 className="text-xl font-bold mb-8">Create an acount</h2>
          <form onSubmit={handleSubmit}>

            <div className="input-group ml-8 mb-4">
              <label htmlFor="username" className="text-lg font-semibold mr-4">User Name:</label>
              <input className=" mb-2 p-2 border border-gray-300 rounded w-1/3" type="text" id="username"  value={userData.name} onChange={(e)=>{
                setData({...userData , name:e.target.value })
              }}/>
            </div>

            <div className="input-group ml-8 mb-4">
              <label htmlFor="email" className="text-lg font-semibold mr-16">Email:</label>
              <input className=" mb-2 p-2 border border-gray-300 rounded w-1/3" type="email mb-2 p-2 border border-black-300 rounded" id="email"  value={userData.email} onChange={(e) =>
                setData({...userData , email:e.target.value})
              } />
            </div>


            <div className="input-group ml-8 mb-4">
              <label htmlFor="password" className="text-lg font-semibold mr-8">Password:</label>
              <input className=" mb-2 p-2 border border-gray-300 rounded w-1/3" type="password" id="password"  value={userData.pass} onChange={(e)=>{
                setData({...userData , pass:e.target.value})
              }}/>
            </div>
            <button type="submit" className="btn ml-8 mt-8 mb-52 px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded hover:bg-blue-700">Create</button>
          </form>
        </div>
      );
    }


{/* // const SignUp = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState(''); 
//     const win =window.localStorage
//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         setName(name);
//         setEmail(email);
//         setPassword(password);
// }

// useEffect (()  => {
//     if(win.getItem('name'))
//         setName(win.getItem('name'));
//     if(win.getItem('email'))
//         setEmail(win.getItem('email'));
//     if(win.getItem('password'))
//         setPassword(win.getItem('password'));
// },[]);
// useEffect (()  => {
//   win.setItem('name',name);
//   win.setItem('email',email);
//   win.setItem('password',password);
// },[name,email,password]);
   
// return (
// <section>
// <form onSubmit={handleSubmit}>
//     <div className='feild'>
//     <label>Enter your name: </label>
//     <br/>
//         <input type="text" value={name} 
//         onChange={(e) => setName(e.target.value)} />
//     </div>
//     <br/>
//        <br/>
//        <div className='feild'>
//        <label>Enter your email: </label>
//        <br/>
//         <input type="email" value={email} 
//         onChange={(e) => setEmail(e.target.value)} />
//        </div>
//         <br/>
//         <br/>
//         <div className='feild'>
//         <label>Enter a password: </label>
//         <br/>
//         <input type="password" value={password} 
//         onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <br/>
//         <div className='feild'>
//         <button type='submit'>Submit</button>
//         </div>
//     </form>
// </section>    
//   )
// }

//   export default SignUp;
// import './Sign-up.css';
// import React, { useState, useEffect } from 'react';

// const SignUp = ({ onRegister }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Save user data to local storage
//     localStorage.setItem('userData', JSON.stringify({ name, email, password }));
//     // Pass user data back to parent component
//     onRegister({ name, email });
//   };

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem('userData'));
//     if (userData) {
//       setName(userData.name);
//       setEmail(userData.email);
//       setPassword(userData.password);
//     }
//   }, []);

//   return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <div className='field'>
//           <label>Enter your name: </label>
//           <br/>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <br/>
//         <div className='field'>
//           <label>Enter your email: </label>
//           <br/>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <br/>
//         <div className='field'>
//           <label>Enter a password: </label>
//           <br/>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <br/>
//         <div className='field'>
//           <button type='submit'>Submit</button>
//         </div>
//       </form>
//     </section>    
//   );
// }

export default SignUp; */}
