import React from 'react';

const HeaderCard = ({ name }) => {
    return (
        <section className="sidebar--key-information">
            <h1>{name}</h1>
            <h2>delegate #23</h2>
        </section>
    );
};

export default HeaderCard;
