import Dad from "./Dad";
import Uncle from "./Uncle";
import Unty from "./Unty";
import './Grandpa.css'
import { createContext, useState } from "react";


export const AssetContext=createContext('gold')
export const Money=createContext()

const Grandpa = () => {
   
    const asset="Diamond";
    const [money, setMoney]=useState(0)

    
    return (
        <div className=" grandpa ">
            <h2>Grangpa</h2>
            <Money.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="Gold">
                    <section className="flex">
                        
                        <Dad asset={asset}></Dad>
                            <Uncle></Uncle>
                        <Unty asset={asset}></Unty>
                        
                    </section>
                </AssetContext.Provider>
            </Money.Provider>
        </div>
    );
};

export default Grandpa;