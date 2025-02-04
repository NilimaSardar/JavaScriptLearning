import React, { useState } from 'react'

const LearnForm3 = () => {

        let [jobTitle, setJobTitle] = useState("");
        let [salary, setSalary] = useState("");
        let [location, setLocation] = useState("");
    
        const handleSubmit = (e)=>{
            e.preventDefault();
    
            let job = {
                jobTitle: jobTitle,
                salary: salary,
                location: location,
            };
    
            console.log(job);
            
        }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor="">Job Title</label>
                    <input 
                        type="text" 
                        value={jobTitle}
                        onChange={(e)=>{
                            setJobTitle(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">Salary</label>
                    <input type="number" 
                        value={salary}
                         onChange={(e)=>{
                            setSalary(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">Location</label>
                    <input type="text" 
                        value={location}
                         onChange={(e)=>{
                            setLocation(e.target.value)
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

export default LearnForm3