import React, {useState, useContext} from "react";
import { Modal } from "../modal/Modal";
import { Report } from "../report/Report";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";


export const AccountCard = ({account}) => {
    const [modalActive, setModalActive] = useState(false);

    const { accountId } = useContext(AuthContext);

    return (
        <div style={{marginTop: '100px'}}>
            <div>{account.firstName}</div>
            <p>{account.lastName}</p>
            <p>{account.email}</p>
            <p>{account.phone}</p>
            <p>{account.password}</p>
            <p>{account.registeredAt}</p>
            <p>{account.lastLogin}</p>
            <p>{account.userType}</p>
            <p>{account.isSubscriber}</p>
            <p>{account.appLanguage}</p>
            <p>{account.expirySubscription}</p>
            <p>{account.photo}</p>
            <p>{account.region}</p>
            <p>{account.description}</p>
            <p>{account.website}</p>
            {/*<p>{account.favourites}</p>*/}
            {!(accountId === null || accountId ===  account._id) && <button onClick={() => setModalActive(true)}>Report</button>}
            <Modal active={ modalActive} setActive={setModalActive} children={<Report reportType={'user'} account={account}></Report>}></Modal>
            {accountId ===  account._id && <Link to='/myaccount'><button>Edit my profile</button></Link>}
        </div>
    )
}