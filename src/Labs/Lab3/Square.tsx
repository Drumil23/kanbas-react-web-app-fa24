import React, {ReactNode} from "react";

export default function Square({children}: {children: ReactNode}) {
    const sq = Number(children);
    return (
        <span id="wd-square">Squared Number = {sq * sq}</span>
    );
    
}

