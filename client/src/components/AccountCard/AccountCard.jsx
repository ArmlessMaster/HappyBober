import React from "react";



export const AccountCard = (account) => {
    account = account.account;
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
            <p>{account.favourites}</p>
        </div>
    )
}