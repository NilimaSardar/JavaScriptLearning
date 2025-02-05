import React, { useState } from 'react'

const LearnForm7 = () => {

    let [name, setName] = useState("");
    let [location, setLocation] = useState("");
    let [hasHigherSchool, setHasHigherSchool] = useState(false);
    let [hasBus, setHasBus] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();

        let school = {
            name: name,
            location: location,
            hasHigherSchool: hasHigherSchool,
            hasBus: hasBus,
        }
        console.log(school);
        
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
                    <label htmlFor="">Location</label>
                    <select  value={location}
                    onChange={(e)=>{
                        setLocation(e.target.value)
                    }}>
                        <option value="Brt">Brt</option>
                        <option value="Dharan">Dharan</option>
                        <option value="Ktm">Ktm</option>
                        <option value="Ithari">Ithari</option>
                        <option value="Lalitpur">Lalitpur</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Has Higher School</label>
                    <input type="checkbox" checked={hasHigherSchool}
                    onChange={(e)=>{
                        setHasHigherSchool(e.target.checked)
                    }} />
                </div>
                <div>
                    <label htmlFor="">Has Bus</label>
                    <input type="checkbox" checked={hasBus}
                    onChange={(e)=>{
                        setHasBus(e.target.checked)
                    }} />
                </div>
                
            </div>
            <div>
                <button>Create</button>
            </div>
        </form>
    </div>
  )
}

export default LearnForm7