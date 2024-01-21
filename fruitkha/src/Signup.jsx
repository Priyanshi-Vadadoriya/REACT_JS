import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {

    const [id,setid] = useState("");
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmpassword] = useState("");
    const minPasswordLength = 4;
    const maxPasswordLength = 6;
    const navigate = useNavigate();

  
    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (fname.length === 0 || lname.length === 0 || phone.length === 0  || email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
          alert("Please fill in all the required fields");
          return;
        }
        navigate("/signin")
        
        const userdata = {id,fname,lname,phone,email,password,confirmPassword}
        fetch("http://localhost:5000/users",{
            method:"Post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(userdata)
        })
        .then((res)=>{

            if(res)
            {
                alert("Saved Successfully..!");
            }

        })
        .then((data)=>{

          setid(data.id)
          setLname(data.fname)
          setFname(data.lname)
          setEmail(data.email)
          setPassword(data.password)
        })
         .catch((err)=>{
            console.log(err.message)
         })

    }


  return (
    <div>
      <div className="page-wrapper bg-gra-01 py-100 font-poppins">
        <div className="wrapper wrapper--w780">
          <div className="card card-3">
            <div className="card-heading"></div>
            <div className="card-body">
              <h2 className="title">Registration Info</h2>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input value={fname} onChange={(e)=>{setFname(e.target.value)}}  className="input--style-3" type="text" placeholder="Firstname" />
                  {fname.length==0 && <span className='text-danger'>* Enter first name</span>}
                </div>
                <div className="input-group">
                  <input value={lname} onChange={(e)=>{setLname(e.target.value)}}  className="input--style-3" type="text" placeholder="Lirstname" />
                  {lname.length==0 && <span className='text-danger'>* Enter last name</span>}
                </div>
                <div className="input-group">
                  <input value={phone} onChange={(e)=>{setPhone(e.target.value)}}  className="input--style-3" type="phone" placeholder="Phone" />
                  {phone.length==0 && <span className='text-danger'>* Enter Phone number</span>}
                </div>
                <div className="input-group">
                  <input value={email} onChange={(e)=>{setEmail(e.target.value)}}  className="input--style-3" type="email" placeholder="Email" />
                  {email.length==0 && <span className='text-danger'>* Enter email</span>}
                </div>
                <div className="input-group">
                  <input value={password} onChange={(e)=>{setPassword(e.target.value)}}  className="input--style-3" type="text" placeholder="Password" />
                  {password.length==0 && <span className='text-danger'>* Enter password</span>}
                  {(password.length > 0 && (password.length < minPasswordLength || password.length > maxPasswordLength)) &&
                 <span className='text-danger'>* Password must be between {minPasswordLength} and {maxPasswordLength} characters</span>
                    }

                </div>
                <div className="input-group">
                  <input value={confirmPassword} onChange={(e)=>{setConfirmpassword(e.target.value)}}  className="input--style-3" type="text" placeholder="Confirmpassword" />
                  {confirmPassword ? "" : <span className='text-danger'>* Enter confirmPassword</span>}

                    {(confirmPassword.length > 0 && password !== confirmPassword) &&
                    <span className='text-danger'>* Passwords do not match</span>
                    }


                </div>
                <div className="p-t-10">
                  <button className="btn btn--pill btn--green" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
