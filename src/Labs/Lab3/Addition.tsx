export default function Addition({a,b}: {a: number, b: number}) {
    return ( 
        <div>
            <h2>Addition of Parameterized Components</h2>
            <p>a = {a}</p>
            <p>b = {b}</p>
            <p>a + b = {a + b}</p>
        </div>  
    );
}
