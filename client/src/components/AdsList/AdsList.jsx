import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './AdsList.scss';
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";

export const AdsList = ({ ads }) => {


    const { request, loading } = useHttp();

    const { token } = useContext(AuthContext);

    if (!ads.length) {
        return <p className="center">Ads = 0</p>
    }
    return (
        <div className="adsList">
            <div className="ads-List_Wrapper">
                <div className="ads-List">
                <div className="header"></div>


                    <div className="adsList-flex">
                        {ads.map((ad, index) => {
                            return (
                                
                                <div className="adsList-element" key={ad._id}>
                                    <Link to={`/ad/${ad._id}`}>
                                        <div className="img-container">
                                            <img src={ad.picture[0]} alt="" />
                                        </div>
                                        <div className="adsList-element__flex">
                                            <div>{ad.animalName}</div>
                                            <div>{ad.price}$</div>
                                        </div>
                                        <div className="ads-List-element-info">
                                            <span>{ad.gender}</span> / <span>{ad.age}</span> / <span>{ad.breed}</span>
                                        </div>
                                    </Link>
            
                                    <div className="adsList-element__flex-bottom">
                                        <div>{ad.location}</div>
                                        <div>
                                            <button disabled={loading} onClick={async () => {
                                                const adId = ad._id;
                                                try {
                                                    await request('/api/favourites/addfavourite', 'POST', { adId }, {
                                                        Authorization: `Bearer ${token}`
                                                    });
                                                } catch (e) {

                                                }
                                            }}>❤</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div >
            </div>
        </div>
        
        
    )

}