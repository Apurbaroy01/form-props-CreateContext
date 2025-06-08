import { useState } from "react";



const About = () => {

    const [name, setName]=useState(null)
    const [email, setEmail]=useState(null)
    const [pas, setPass]=useState(null)

    const handleSubmit=(h)=>{
        h.preventDefault()
        console.log(name,email,pas)
    }

    const handlerNameChange=(n)=>{
        // console.log(n.target.value)
        setName(n.target.value)
    }
    const handlerEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    const handelPasswordChange=(h)=>{
        setPass(h.target.value)
    }

    
   
    return (
        <div className="text-center text-3xl">
           <form onSubmit={handleSubmit}>
                <div className="text-center text-5xl p-5">
                    Login section 
                </div>
                <div className="space-y-4">
                    <input onChange={handlerNameChange} className="w-1/2 border-2" type="text" placeholder="Type-Name"/><br/>
                    <input onChange={handlerEmailChange} className="w-1/2 border-2" type="text" placeholder="Type Email"/><br />
                    <input onChange={handelPasswordChange} className="w-1/2 border-2" type="password" placeholder="password"/><br />
                    <input className=" border-2" type="submit" value="Submit" />
                </div>
           </form>
            
        </div>
    );
};

export default About;