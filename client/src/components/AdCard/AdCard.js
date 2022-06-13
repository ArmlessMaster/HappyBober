import React from "react";
import './AdCard.css';

export const AdCard = ({ ad }) => {

    return (
        <>
            <h2>Ad</h2>
            <p>Type <strong>{ad.type}</strong></p>
            <p>Gender <strong>{ad.gender}</strong></p>
            <p>Color <strong>{ad.color}</strong></p>
            <p>Information <strong>{ad.information}</strong></p>
            <p>Age <strong>{ad.age}</strong></p>
            <p>Breed <strong>{ad.breed}</strong></p>
            <p>Price <strong>{ad.price}</strong></p>
            <p>animalName <strong>{ad.animalName}</strong></p>
            <p>picture <strong>{ad.picture.map((link, index) => {
                return <img width={100} alt="1" src={link} />
            })}</strong></p>
            <p>isTop <strong>{ad.isTop}</strong></p>
            <p>account <strong>{ad.account}</strong></p>
            <p>date <strong>{ad.date}</strong></p>
        </>
    )
}