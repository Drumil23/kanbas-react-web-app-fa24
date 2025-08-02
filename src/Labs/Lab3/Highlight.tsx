import React, {ReactNode} from "react";

export default function Highlight({children}: {children: ReactNode}) {
    return (
        <span style={{ backgroundColor: "yellow", fontWeight: "bold" }}>
            {children}
        </span>
    );
}
// Usage example:
// <Highlight>This text is highlighted</Highlight>