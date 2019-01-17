import React from 'react';
import "../styles/index.scss";

export const Card = props => {
    return (
        <section className="Card">
            <section className="Card__Container">
                {props.children}
            </section>
        </section>);
};