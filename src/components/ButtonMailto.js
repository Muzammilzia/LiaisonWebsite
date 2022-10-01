import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, children }) => {
    return (
        <a
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {children}
        </a>
    );
};

export default ButtonMailto;