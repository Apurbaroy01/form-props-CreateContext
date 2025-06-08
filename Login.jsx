const Login = () => {

    const handelSubmit = (e) => {
        e.preventDefault(); 
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log('i am submit');
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <div className="space-y-4">
                    <input className="border-2" type="text" name="name" /><br />
                    <input className="border-2" type="text" name="email" /><br />
                    <input className="border-2" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Login;
