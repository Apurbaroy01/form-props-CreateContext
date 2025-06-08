


const Form = ({handelSubmit, submitText, children}) => {
    
    const handleSubmits=(e)=>{
       e.preventDefault();
       const data={
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.name.value

       }
       console.log(data)
       handelSubmit(data)
    }

    



    return (
        <div>
            <form onSubmit={handleSubmits}>
                {children}
                <div className="space-y-4 text-center mt-20">
                    <input className="border-1" type="text" name="name"  /><br />
                    <input className="border-1" type="text" name="email"  /><br />
                    <input className="border-1" type="text" name="password"  /><br />
                    <input className="border-1" type="submit" value={submitText}  />
                </div>
            </form>
        </div>
    );
};

export default Form;