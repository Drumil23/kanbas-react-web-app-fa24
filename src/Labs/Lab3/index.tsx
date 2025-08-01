import Float from "../Lab2/Float";
import Classes from "./Classes";
import VarAndConst from "./VarAndConst";
import Addition from "./Addition";

export default function Lab3() {
    return (
        <div>
            <h2>Lab 3</h2>
            <VarAndConst />
            <Classes />
            <Addition b={10} a={5} />
        </div>
    );
}
