
import Friend from "../Friend/Friend";
import { AssetContext } from "../Grandpa";


const Cusin = ({asset,name}) => {
    
    return (
        <div>
            <h2>Cousin</h2>
            <h3>{name}</h3>
            
            <p>{asset}</p>
            {name==="Sohana" &&<Friend></Friend>}
            
            
        </div>
    );
};

export default Cusin;