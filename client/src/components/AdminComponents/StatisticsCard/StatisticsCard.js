import React, { useState, useContext, useEffect, useCallback } from "react";
import { Modal } from "../../modal/Modal";
import { Report } from "../../report/Report";
import { AuthContext } from "../../../context/AuthContext";
import "../../AccountCard/AccountCard.scss";
import RegionSvg from "../../../img/RegionSvg.svg";
import YellowBtn from '../../elements/YellowBtn/Yellowbtn';
import { Link } from "react-router-dom";
import { AdsListAdmin } from '../AdsListAdmin/AdsListAdmin'
import { useHttp } from "../../../hooks/http.hook";
import { Loader } from "../../Loader/Loader";
import { RewievForm } from "../../RewievForm/RewievForm";
import './StatisticsCard.scss'


export const StatisticsCard = ({ ads, accounts, rewievs, reports }) => {

    //quantity
    const numberOfAds = ads.length;
    const numberOfAccounts = accounts.length;
    const numberOfRewievs = rewievs.length;
    const numberOfReports = reports.length;

    //

    return (
        <div style={{ marginTop: '50px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr  1fr' }}>
                <h2>Number of ads <strong>{numberOfAds}</strong></h2>
                <h2>Number of accounts <strong>{numberOfAccounts}</strong></h2>
                <h2>Number of rewievs <strong>{numberOfRewievs}</strong></h2>
                <h2>Number of reports <strong>{numberOfReports}</strong></h2>
                <div className="widget">
                    <div className="left">
                        <span className="title">Ads</span>
                        <span className="counter">
                            {numberOfAds}
                        </span>
                        <Link to={'/admin/ads'}><span className="link">See all ads</span></Link>
                    </div>
                    <div className="right">
                        <div className="percentage positive">

                            123 %
                        </div>
                        123
                    </div>
                </div>
            </div>

        </div>
    )
}