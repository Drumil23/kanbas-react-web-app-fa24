export default function VarAndConst() {
    // Variables and constants in JavaScript
    let x = 10; // Variable
    var y = 20; // Variable
    const z = x + y; // Constant
    return (
        <div>
            <h2>Variables and Constants</h2>

            <p>x = {x}</p>
            <p>y = {y}</p>
            <p>z = {z}</p>
        </div>
    );
}
