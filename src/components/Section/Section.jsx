import React from "react";

const Section = ({ title, children }) => {
    return (
        <div>
            {title && <div>{title}</div>}
            {children}
        </div>
    );
}

export default Section;