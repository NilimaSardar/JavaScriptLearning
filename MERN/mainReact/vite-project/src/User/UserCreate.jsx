import React, { useState } from 'react'

const UserCreate = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [age, setAge] = useState("");
    const [isMarried, setIsMarried] = useState(false);
    const [gender, setGender] = useState("male");

    const handleSubmit = async (e) =>{
        e.preventDefault();

        let data = {
            name: name,
            email: email,
            password: password,
            age: age,
            isMarried: isMarried,
            gender: gender,
        }
        // console.log(data);

        //hit api
        try {
            let result = await axios({
                url : "http://localhost:8000/product",
                method: "POST",
                data: data,
            });
            toast.success(result.data.message)
            setName("");
            setEmail("");
            setPassword("");
            setAge("");
            setIsMarried(false);
            setGender("");
        } catch (error) {            
            toast.error(error.response.data.message)
        }
        
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input 
                    type="text" 
                    value={name} 
                    onChange={(e)=>{
                        setName(e.target.value);
                    }} />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input 
                    type="email" 
                    value={email} 
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }} />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input 
                    type="password" 
                    value={password} 
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }} />
                </div>
                <div>
                    <label htmlFor='age'>Age:</label>
                    <input 
                    type="text" 
                    value={age} 
                    onChange={(e)=>{
                        setAge(e.target.value);
                    }} />
                </div>
                <div>
                    <label htmlFor="">Is Married</label>
                    <input type="checkbox" checked={isMarried}
                    onChange={(e)=>{
                        setIsMarried(e.target.checked)
                    }} />
                </div>
                <div>
                    <label htmlFor="">Gender</label>
                    <select 
                        value={gender}
                        onChange={(e)=>{
                            setGender(e.target.value)
                        }}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div>
                <button>Create</button>
            </div>
        </form>
    </div>
  )
}

export default UserCreate