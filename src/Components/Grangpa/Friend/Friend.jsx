import { useContext } from "react";
import { AssetContext, Money } from "../Grandpa";


const Friend = () => {
    const gift= useContext(AssetContext)
    const [money, setMoney]=useContext(Money)
    return (
        
        <div>
            <h2>friend</h2>
            <p>{gift}</p>
            <p>Mony: {money}</p>
            <button className="btn" onClick={()=>setMoney(money+ 1000)}>Add-Money</button>
        </div>
    );
};

export default Friend;