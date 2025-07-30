export default function VarAndConst() {
    // Variables and constants in JavaScript
    let x = 10; // Variable
    var y = 20; // Variable
    const z = x + y; // Constant
    return (
        <div>
            <h2>Variables and Constants</h2>

            <h3>x = {x}</h3>
            <h3>y = {y}</h3>
            <h3>z = {z}</h3>
        </div>
    );
}
