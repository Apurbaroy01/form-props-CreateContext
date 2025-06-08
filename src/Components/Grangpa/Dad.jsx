import Brother from "./MySelf/Brother";
import MySelf from "./MySelf/MySelf";
import Sister from "./MySelf/Sister";


const Dad = ({asset}) => {
    return (
        <div>
            <h1>Dad</h1>
            <section className="flex">
                <MySelf asset={asset}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;