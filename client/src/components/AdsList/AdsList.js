import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './AdsList.css';
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";

export const AdsList = ({ ads }) => {


    const { request, loading } = useHttp();

    const { token } = useContext(AuthContext);

    if (!ads.length) {
        return <p className="center">Ads = 0</p>
    }
    return (
        <div>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Type</th>
                    <th>Gender</th>
                    <th>Color</th>
                    <th>Information</th>
                    <th>Age</th>
                    <th>Breed</th>
                    <th>Price</th>
                    <th>animalName</th>
                    <th>picture</th>
                    <th>isTop</th>
                    <th>account</th>
                    <th>date</th>
                    <th>location</th>
                </tr>
            </thead>

            <tbody>
                {ads.map((ad, index) => {
                    return (
                        <tr key={ad._id}>
                            <td>{index + 1}</td>
                            <td>{ad.type}</td>
                            <td>{ad.gender}</td>
                            <td>{ad.color}</td>
                            <td>{ad.information}</td>
                            <td>{ad.age}</td>
                            <td>{ad.breed}</td>
                            <td>{ad.price}</td>
                            <td>{ad.animalName}</td>
                            <td>{ad.picture.map((link, index) => {
                                return <img width={100} alt="img" src={link} />
                            })}</td>
                            <td>{ad.isTop}</td>
                            <td>{ad.account}</td>
                            <td>{ad.date}</td>
                            <td>{ad.location}</td>
                            <td>
                                <Link to={`/ad/${ad._id}`}>Open</Link>
                            </td>
                            <td>
                                <button disabled={loading} onClick={async () => {
                                    const adId = ad._id;
                                    try {
                                        await request('/api/favourites/addfavourite', 'POST', { adId }, {
                                            Authorization: `Bearer ${token}`
                                        });
                                    } catch (e) {

                                    }
                                }}>❤</button>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </div >
    )

}