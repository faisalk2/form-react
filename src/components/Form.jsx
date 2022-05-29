import React from 'react'

const Form = ({data,setData}) => {
    
    const [form,setForm]=React.useState({
        name:"",
        age:0,
        address:"",
        department:"",
        salary:0,

    });

const handleChange=(e)=>{
let {value,name}=e.target;
setForm({...form,[name]:value});
}

const formData=(e)=>{
    e.preventDefault();
setData([...data,form]);
// console.log(data);
}

  return (
    <div>
        <h1>Enter Employee Details</h1>
        <form onSubmit={formData} >
            <label>Name:-</label>
            <input type="text" name="name" value={form.name} placeholder='Enter name' onChange={handleChange} />
            <br />
            <label >Age:-</label>
            <input type="number" value={form.age} name="age" onChange={handleChange} />
            <br />
            <label >Address:-</label>
            <input type="text" name="address" value={form.address} placeholder='Enter Adddress' onChange={handleChange}/>
            <br />
            <label >Department:-</label>
            <select name="department" value={form.name} onChange={handleChange} >
                <option value="">select</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="Front End Developer">Front End Developer</option>
                <option value="Back End Developer">Back End Developer</option>
            </select>
            <br />
            <label >Salary</label>
            <input type="number" value={form.salary} name="salary" onChange={handleChange}/>
            <br />
            <label >Maretial Status</label>
            <br />
            <input type="radio" checked={form.married} name="status" value={"married"} onChange={handleChange} />
            <label >Married</label>
            <input type="radio" name="status" value={"single"} onChange={handleChange}  />
            <label >Single</label>
            <br />
            <input type="submit" name="submit"  />
        </form>
    </div>
  )
}

export default Form