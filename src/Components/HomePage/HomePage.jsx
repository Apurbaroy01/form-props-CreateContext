import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

import Form from "../Form/Form";


const HomePage = () => {

    // const handleSubmits=(data)=>{
    //     console.log("sign Up data",data)
    // };
    const handelSubmit=(data)=>{
        console.log("Register",data)
   };
    const handelSubmits=(data)=>{
        console.log("Update",data)
   };
    



    return (
        <div className="w-screen">
            <Header></Header>
            <Outlet></Outlet>
            {/* <Russable formTitle={'Login'} handleSubmit={handlesignUpSubmit}></Russable>
            <Russable formTitle={'Sign up'} handleSubmit={handleUpdateProfile} submitText={'Update'}></Russable>
             */}
            
            <Form  handelSubmit={handelSubmit} submitText="Register" >
                <div className="text-center text-3xl">
                    <h1>Login</h1>
                </div>
            </Form>
            <Form  handelSubmit={handelSubmits} submitText={"Update"}>
                <div className="text-center text-3xl">
                    <h1>Sign up</h1>
                </div>
            </Form>
        </div>
    );
};

export default HomePage;