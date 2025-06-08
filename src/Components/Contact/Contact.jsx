

const Contact = () => {
    const handleSubmit=(e)=>{
        e.preventDefault

    }

    return (
        <div className="text-center">
            <div className="text-center text-5xl p-5">
                Login section
            </div>
            <form onSubmit={handleSubmit}>
                
                <div className="space-y-4">
                    <input className="w-1/2 border-2" type="text" placeholder="Type-Name"/><br/>
                    <input className="w-1/2 border-2" type="text" placeholder="Type Email"/><br />
                    <input className="w-1/2 border-2" type="password" placeholder="password"/><br />
                    <input className=" border-2" type="submit" value="Submit" />
                </div>
           </form>
        </div>
    );
};

export default Contact;