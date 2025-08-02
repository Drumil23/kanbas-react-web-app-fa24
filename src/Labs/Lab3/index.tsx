import Float from "../Lab2/Float";
import Classes from "./Classes";
import VarAndConst from "./VarAndConst";
import Addition from "./Addition";
import Square from "./Square";
import Highlight from "./Highlight";

export default function Lab3() {
    return (
        <div>
            <h2>Lab 3</h2>
            <VarAndConst /><hr />
            <Classes />
            <Addition b={10} a={5} /><hr />
            <h3>Square Component</h3>
            <Square>5</Square><br /><hr />
            <h3>Highlight Component</h3>
            <Highlight>Salaam Rocky Bhai!</Highlight>
        </div>
    );
}
