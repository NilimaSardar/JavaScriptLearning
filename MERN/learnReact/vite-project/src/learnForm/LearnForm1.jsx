import React from 'react'

const LearnForm1 = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("form is submitted successfully.");
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder='name' />
                <input type="number" />
                <input type="email" />
                <input type="password" />
                <input type="file" />
                <input type="checkbox" />
                <select>
                    <option value="nepal">Nepal</option>
                    <option value="china">China</option>
                    <option value="india">India</option>
                </select>
            </div>
            <div>
                <button>Create</button>
            </div>
        </form>
    </div>
  )
}

export default LearnForm1