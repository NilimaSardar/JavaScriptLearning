import React, { useState } from 'react'

const LearnForm2 = () => {

    let [name, setName] = useState("");
    let [surname, setSurname] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [age, setAge] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        let data = {
            name: name,
            surname: surname,
            email: email,
            password: password,
            age: age,
        };

        console.log(data);
        
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
                    <label htmlFor="">Surname</label>
                    <input type="text" 
                        value={surname}
                         onChange={(e)=>{
                            setSurname(e.target.value)
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
                <div>
                    <label htmlFor="">Age</label>
                    <input type="number" 
                        value={age}
                         onChange={(e)=>{
                            setAge(e.target.value)
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

export default LearnForm2