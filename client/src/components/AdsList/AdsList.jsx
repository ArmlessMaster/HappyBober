import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './AdsList.scss';
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import Select from 'react-select';

export const AdsList = ({ ads, setAds, location }) => {


    const { request, loading } = useHttp();

    const { token, accountId } = useContext(AuthContext);

    const [visible, setVisible] = useState(15);

    const showMoreItems = () => {
        setVisible(prevValue => prevValue + 5);
    }


    if (!ads.length) {
        return <p className="center">Ads = 0</p>
    }
    return (
        <div className="adsList">
            <div className="ads-List_Wrapper">
                <div className="ads-List">
                    <div className="adsList-flex">
                        {ads.slice(0, visible).map((ad, index) => {
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
                                            {token && <button disabled={loading} onClick={async () => {
                                                const adId = ad._id;
                                                try {
                                                    await request('/api/favourites/addfavourite', 'POST', { adId }, {
                                                        Authorization: `Bearer ${token}`
                                                    });
                                                } catch (e) {

                                                }
                                            }}>❤</button>}                                        
                                        </div>
                                        {(location === 'myadspage') && <button disabled={loading} onClick={async () => {
                                                try {
                                                    await request(`/api/ads/adremove/${ad._id}`, 'DELETE', null, {
                                                        Authorization: `Bearer ${token}`
                                                    });
                                                    setAds(ads.filter(item => item._id !== ad._id))
                                                } catch (e) {

                                                }
                                            }}>remove</button>}
                                            {(location === 'myfavouritespage') && <button disabled={loading} onClick={async () => {
                                                try {
                                                    await request(`/api/favourites/favouritesremove/${ad._id}`, 'POST', null, {
                                                        Authorization: `Bearer ${token}`
                                                    });
                                                    setAds(ads.filter(item => item._id !== ad._id))
                                                } catch (e) {

                                                }
                                            }}>remove</button>}
                                            {(location === 'myadspage') && <Link to={`/editad/${ad._id}`}><button>Edit</button></Link>}                                         
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <button style={ads.length > 0 && visible >= ads.length ? {display: 'none'} : {display: 'all'}} onClick={showMoreItems}>More</button>
                </div >
            </div>
            
        </div>
        
        
    )

}