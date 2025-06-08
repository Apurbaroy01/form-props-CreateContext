import { useContext } from "react";
import { AssetContext } from "../Grandpa";


const Spasal = ({asset}) => {
    const gift=useContext(AssetContext)
    return (
        <div>
            <h2>Spasal</h2>
            <p>{asset}</p>
            <p>{gift}</p>
        </div>
    );
};

export default Spasal;