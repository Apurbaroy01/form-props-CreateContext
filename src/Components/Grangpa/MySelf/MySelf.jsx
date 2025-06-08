
import Spasal from "./Spasal";



const MySelf = ({asset}) => {
    
    return (
        <div>
            <h1>MySelf</h1>
            <section>
                <Spasal></Spasal>
                <p>{asset}</p>
                
            </section>
        </div>
    );
};

export default MySelf;