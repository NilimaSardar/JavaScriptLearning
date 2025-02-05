import React, { useState } from 'react'

const LearnForm8 = () => {

    let [name, setName] = useState("");
    let [designation, setDesignation] = useState(true);
    let [salary, setSalary] = useState("");
    let [gender, setGender] = useState("male");

    const handleSubmit = (e) =>{
        e.preventDefault();

        let employee = {
            name: name,
            designation: designation,
            salary: salary,
            gender: gender,
        }
        console.log(employee);
        
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
                    <label htmlFor="">Designation</label>
                    <input type="checkbox" checked={designation}
                    onChange={(e)=>{
                        setDesignation(e.target.checked)
                    }} />
                </div>
                <div>
                    <label htmlFor="">Salary</label>
                    <input type="number" 
                        value={salary}
                         onChange={(e)=>{
                            setSalary(e.target.value)
                        }}/>
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

export default LearnForm8