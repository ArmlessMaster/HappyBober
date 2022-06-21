import React, {useState, useContext, useEffect, useCallback} from "react";
import { Modal } from "../modal/Modal";
import { Report } from "../report/Report";
import { AuthContext } from "../../context/AuthContext";
import "./AccountCard.scss";
import RegionSvg from "../../img/RegionSvg.svg";
import YellowBtn from '../elements/YellowBtn/Yellowbtn';
import { Link } from "react-router-dom";
import { AdsList } from "../AdsList/AdsList";
import { useHttp } from "../../hooks/http.hook";
import { Loader } from "../Loader/Loader";

export const AccountCard = ({account}) => {
    const [modalActive, setModalActive] = useState(false);

    const { accountId , token} = useContext(AuthContext);
    
    const [ads, setAds] = useState([]);

    const { loading, request } = useHttp();

    const fetchAds = useCallback(async () => {
        try {
            const fetched = await request(`/api/ads/getads/${account._id}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            });
            setAds(fetched);
        } catch (e) {

        }
    }, [token, request]);

    useEffect(() => {
        fetchAds();
    }, [fetchAds]);

    return (
        <div className = "AccountCard" style={{marginTop: '4vw'}}>
            <div className="big-flex-accountCard">
                <div className="flex-accountCard">
                    <div className="left">
                        <div className="circle-photo">
                            <img src={account.photo}/>
                        </div>
                    </div>
                    <div className="right">
                        <p className="left-big">{account.firstName} {account.lastName}</p>
                        <p className="left-medium">On HappyBober since  {account.registeredAt.substring(0, account.registeredAt.length - 14)}</p>
                    </div>   
                </div>
                <div className="right-region">
                    <img src={RegionSvg} alt=""/>
                    <span>{account.region}</span>
                </div>
            </div>
            
            <div className="AccountCard-Info">
                <p className="AccountCard-Info-Elem__Main">Account Info</p>
                <p className="AccountCard-Info-Elem"><span className="AccountCard-Info-low">Phone:</span> <span className="AccountCard-Info-high">{account.phone}</span></p>
                <p  className="AccountCard-Info-Elem"><span className="AccountCard-Info-low">Email:</span> <span className="AccountCard-Info-high">{account.email}</span></p>
                <p  className="AccountCard-Info-Elem"><span className="AccountCard-Info-low">Website:</span> <span className="AccountCard-Info-high">{account.website}</span></p>
                <p  className="AccountCard-Info-Elem"><span className="AccountCard-Info-low">Description:</span></p>
                <p  className="AccountCard-Info-Elem"><span className="AccountCard-Info-high">{account.description}</span></p>
            </div>
            <div className="AccountCard-Info">
                <div className="AccountCard-Ads"><p className="AccountCard-Info-Elem__Main">Ads:</p>
                {loading && <Loader></Loader>}
                {!loading && <AdsList ads={ads} setAds={setAds}  />}
                </div>
            </div>
           

            <div className="AccountCard-Info">
                <p className="AccountCard-Info-Elem__Main">Rewiws:</p>
                <div className="flex-accountCard-btns">                
                    <YellowBtn info="Add Rewiew"/>
                </div>
                <div className="rewiew-list">
                    <div className="rewiew-element">
                        <div className="big-flex-accountCard">
                            <div className="flex-accountCard">
                                <div className="left">
                                    <div className="circle-photo">
                                        <img src={account.photo}/>
                                    </div>
                                </div>
                                <div className="right">
                                    <p className="left-big">{account.firstName} {account.lastName}</p>
                                    <p className="left-medium">On HappyBober since  {account.registeredAt.substring(0, account.registeredAt.length - 14)}</p>
                                </div>   
                            </div>
                        </div>
                        <p className="Rewiws-Element-text">Rewiew description. Rewiew description. Rewiew description. Rewiew description. Rewiew description. Rewiew description.</p>
                    </div>
                </div>
                <div className="rewiew-list">
                    <div className="rewiew-element">
                        <div className="big-flex-accountCard">
                            <div className="flex-accountCard">
                                <div className="left">
                                    <div className="circle-photo">
                                        <img src={account.photo}/>
                                    </div>
                                </div>
                                <div className="right">
                                    <p className="left-big">{account.firstName} {account.lastName}</p>
                                    <p className="left-medium">On HappyBober since  {account.registeredAt.substring(0, account.registeredAt.length - 14)}</p>
                                </div>   
                            </div>
                        </div>
                        <p className="Rewiws-Element-text">Rewiew description. Rewiew description. Rewiew description. Rewiew description. Rewiew description. Rewiew description.</p>
                    </div>
                </div>
                <div className="rewiew-list">
                    <div className="rewiew-element">
                        <div className="big-flex-accountCard">
                            <div className="flex-accountCard">
                                <div className="left">
                                    <div className="circle-photo">
                                        <img src={account.photo}/>
                                    </div>
                                </div>
                                <div className="right">
                                    <p className="left-big">{account.firstName} {account.lastName}</p>
                                    <p className="left-medium">On HappyBober since  {account.registeredAt.substring(0, account.registeredAt.length - 14)}</p>
                                </div>   
                            </div>
                        </div>
                        <p className="Rewiws-Element-text">Rewiew description. Rewiew description. Rewiew description. Rewiew description. Rewiew description. Rewiew description.</p>
                    </div>
                </div>
                <div className="flex-accountCard-btns">                
                    <YellowBtn info="More"/>

                </div>
            </div>
            {!(accountId === null || accountId ===  account._id) && <button onClick={() => setModalActive(true)}>Report</button>}
            {accountId ===  account._id && <Link to='/myaccount'><button>Edit my profile</button></Link>}
            <Modal active={ modalActive} setActive={setModalActive} children={<Report reportType={'user'} account={account}></Report>}></Modal>
        </div>
    )
}
