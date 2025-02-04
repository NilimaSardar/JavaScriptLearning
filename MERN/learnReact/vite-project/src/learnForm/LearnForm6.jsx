import React, { useState } from 'react'

const LearnForm6 = () => {

    let [name, setName] = useState("");
    let [country, setCountry] = useState("nepal");
    let [gender, setGender] = useState("male");
    let [isMarried, setIsMarried] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();

        let data = {
            name: name,
            country: country,
            gender: gender,
            isMarried: isMarried,
        }
        console.log(data);
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" value={name}
                    onChange={(e)=>{
                        setName(e.target.value)
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
                    <label htmlFor="">Country</label>
                    <select  value={country}
                    onChange={(e)=>{
                        setCountry(e.target.value)
                    }}>
                        <option value="india">India</option>
                        <option value="china">China</option>
                        <option value="america">America</option>
                        <option value="nepal">Nepal</option>
                        <option value="pakistan">Pakistan</option>
                    </select>
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

export default LearnForm6