import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FireBaseUploader } from '../FireBaseUploader/FireBaseUploader'
import { useHttp } from "../../hooks/http.hook";
import { storage } from "../../firebase/firebase";

export const MyAccountCard = ({ account }) => {

    const [url, setUrl] = useState(account.photo);


    const [images, setImages] = useState([]);


    const [accountData, setAccountData] = useState({
        id: account._id,
        firstName: (account.firstName ? account.firstName : ''),
        lastName: (account.lastName ? account.lastName : ''),
        email: (account.email ? account.email : ''),
        phone: (account.phone ? account.phone : ''),
        password: '',
        registeredAt: (account.registeredAt ? account.registeredAt : ''),
        lastLogin: (account.lastLogin ? account.lastLogin : ''),
        userType: (account.userType ? account.userType : ''),
        isSubscriber: (account.isSubscriber ? account.isSubscriber : ''),
        appLanguage: (account.appLanguage ? account.appLanguage : ''),
        expirySubscription: (account.expirySubscription ? account.expirySubscription : ''),
        photo: (account.photo ? account.photo : ''),
        region: (account.region ? account.region : ''),
        description: (account.description ? account.description : ''),
        website: (account.website ? account.website : '')
    });

    const changeHandler = event => {
        setAccountData({ ...accountData, [event.target.name]: event.target.value });
    }

    const handleChangePhoto = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);

        }
    };

    const { loading, request } = useHttp();

    const auth = useContext(AuthContext);


    const createAdHandler = () => {
        const promises = [];
        images.forEach((image) => {
            promises.push(uploadImageAsPromise(image));
        })
        Promise.all(promises).then(async () => {
            await request('/api/account/updatemyacc', 'POST', { ...accountData }, { Authorization: `Bearer ${auth.token}` });
        })
    }


    async function uploadImageAsPromise(image) {
        return new Promise(function (resolve, reject) {
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on(
                "state_changed",
                () => { },
                (error) => {
                    console.log(error);
                    reject(error);
                },
                async () => {
                    await storage
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then((urls) => {
                            setUrl(urls);
                            setAccountData({ photo: urls });
                            accountData.photo = urls;
                            resolve(urls);
                        });
                }
            );
        })

    }

    return (
        <div style={{ marginTop: '100px', display: "flex", flexDirection: 'column' }}>
            <input value={accountData.firstName}
                placeholder="firstName"
                id="firstName"
                type="text"
                name="firstName"
                onChange={changeHandler} />
            <input value={accountData.lastName}
                placeholder="lastName"
                id="lastName"
                type="text"
                name="lastName"
                onChange={changeHandler} />
            <input value={accountData.email}
                placeholder="email"
                id="email"
                type="text"
                name="email"
                onChange={changeHandler} />
            <input value={accountData.phone}
                placeholder="phone"
                id="phone"
                type="tel"
                name="phone"
                onChange={changeHandler} />
            <input value={accountData.password}
                placeholder="password"
                id="password"
                type="password"
                name="password"
                onChange={changeHandler} />
            <input value={accountData.region}
                placeholder="region"
                id="region"
                type="text"
                name="region"
                onChange={changeHandler} />
            <input value={accountData.description}
                placeholder="description"
                id="description"
                type="text"
                name="description"
                onChange={changeHandler} />
            <input value={accountData.website}
                placeholder="website"
                id="website"
                type="text"
                name="website"
                onChange={changeHandler} />
            <div><img src={accountData.photo}></img><button style={accountData.photo === '' ? { display: 'none' } : { display: 'all' }} onClick={() => {
                setAccountData({ ...accountData, photo: '' })
            }}>Delete</button></div>
            <FireBaseUploader handleChange={handleChangePhoto} isMultiple={false}>
            </FireBaseUploader>
            <button disabled={loading} onClick={createAdHandler}>Save</button>
            <button onClick={() => {
                setAccountData({
                    id: account._id,
                    firstName: (account.firstName ? account.firstName : ''),
                    lastName: (account.lastName ? account.lastName : ''),
                    email: (account.email ? account.email : ''),
                    phone: (account.phone ? account.phone : ''),
                    password: '',
                    registeredAt: (account.registeredAt ? account.registeredAt : ''),
                    lastLogin: (account.lastLogin ? account.lastLogin : ''),
                    userType: (account.userType ? account.userType : ''),
                    isSubscriber: (account.isSubscriber ? account.isSubscriber : ''),
                    appLanguage: (account.appLanguage ? account.appLanguage : ''),
                    expirySubscription: (account.expirySubscription ? account.expirySubscription : ''),
                    photo: (account.photo ? account.photo : ''),
                    region: (account.region ? account.region : ''),
                    description: (account.description ? account.description : ''),
                    website: (account.website ? account.website : '')
                })
            }} >Cancel</button>
        </div>
    )
}