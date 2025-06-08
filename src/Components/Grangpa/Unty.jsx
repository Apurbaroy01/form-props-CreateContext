import Cusin from "./Cusin/Cusin";


const Unty = ({asset}) => {
    return (
        <div>
            <h1>Unty</h1>
            <section className="flex">
                <Cusin name={"Mamshed"}></Cusin>
                <Cusin asset={asset} name={"Rubaiya"}></Cusin>
            </section>
        </div>
    );
};

export default Unty;