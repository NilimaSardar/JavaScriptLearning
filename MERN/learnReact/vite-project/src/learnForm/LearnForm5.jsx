import React, { useState } from 'react'

const LearnForm5 = () => {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        let user = {
            name: name,
            email: email,
            password: password,
        };

        console.log(user);
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor="">Name</label>
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" 
                        value={email}
                         onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" 
                         onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                    />
                </div>
            </div>
            <div>
                <button>Create</button>
            </div>
        </form>
    </div>
  )
}

export default LearnForm5