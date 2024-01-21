import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { control, user } from './App';

function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const minPasswordLength = 4;
  const maxPasswordLength = 6;
  const navigate = useNavigate();
  const {setLoggedIn} = useContext(control);
  const {setLoginUser} = useContext(user);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)



    if (email.length === 0 || password.length === 0) {
      alert("Please fill in all the required fields");
      return;
    }
   

    fetch("http://localhost:5000/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      
      const checkemail = data.find((item)=>item.email===email && item.password===password)
      if(checkemail){
        setLoggedIn(true)
        data.filter((item)=>{
          if(item.email===email){
            setLoginUser("Welcome " + item.fname + " " + item.lname)
          }
        })
        
        navigate("/")
      }else{
        alert("Email or Password Incorrect")
      }
    });

  };

  return (
    <div>
<div className="container-login100" style={{ backgroundImage: "url('https://colorlib.com/etc/lf/Login_v9/images/bg-01.jpg')" }}>
        <div className="wrap-login100 px-5 pt-5 pb-5">
          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <span className="login100-form-title pb-5 fw-bold">
              Sign In
            </span>
            <div className="mb-4">
              <input value={email} onChange={(e)=>{setEmail(e.target.value)}}  className="input100" type="email"  placeholder="Enter your email.."/>
              {email.length==0 && <span className='text-danger'>* Enter email</span>}
            </div>
           


            <div className="mb-3">
              <input value={password} onChange={(e)=>{setPassword(e.target.value)}}  className="input100" type="password"  placeholder="Enter your password.."/>
              {password ? "" : <span className='text-danger'>* Enter password</span>}

              {(password.length > 0 && (password.length < minPasswordLength || password.length > maxPasswordLength)) &&
                <span className='text-danger'>* Password must be between {minPasswordLength} and {maxPasswordLength} characters</span>
              }
            </div>
            

            <div className="container-login100-form-btn">
              <button className="login100-form-btn mt-3">
                Sign In
              </button>
            </div>

            <div className="text-center pt-5 pb-3">
              <span className="txt1">
                Or login with
              </span>
            </div>

            <div className="flex-c pb-5">
              <Link to='/' href="#" className="login100-social-item me-3">
                <i className="fa fa-facebook-f"></i>
              </Link>
              <Link to='/' className="login100-social-item">
                <img src="https://colorlib.com/etc/lf/Login_v9/images/icons/icon-google.png" alt="GOOGLE"/>
              </Link>
            </div>
            <div className="text-center mt-5">
              <Link to='/' className="txt2 hov1">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
</div>
  );
}

export default Signin;
