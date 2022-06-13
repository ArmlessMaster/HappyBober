import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useHttp } from "../../hooks/http.hook";
import { RadioButton } from '../../components/RadioButton/RadioButton';
import { FireBaseUploader } from '../../components/FireBaseUploader/FireBaseUploader';
import { storage } from '../../firebase/firebase';
import './CreateAdPage.css';

export const CreateAdPage = () => {

    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);

    const auth = useContext(AuthContext);

    const [gender, setGender] = React.useState('');

    const [form, setForm] = useState({
        type: '', gender: '', color: '', information: '', age: 0, breed: '', price: 0, animalName: '', picture: ['']
    });

    const { loading, request } = useHttp();

    const changeHandler = event => {
        form.gender = gender;
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const handleMaleChange = () => {
        setGender('male');
    };

    const handleFemaleChange = () => {
        setGender('female');
    };

    const createAdHandler = async () => {
        try {
            form.picture = urls;
            const data = await request('/api/create/createad', 'POST', { ...form }, { Authorization: `Bearer ${auth.token}` });
            console.log(data);
        } catch (e) {

        }
    };


    const handleChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }
    };


    const handleUpload = () => {
        const promises = [];
        images.forEach((image) => {
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            promises.push(uploadTask);
            uploadTask.on(
                "state_changed",
                null,
                (error) => {
                    console.log(error);
                },
                async () => {
                    await storage
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then((urls) => {
                            setUrls((prevState) => [...prevState, urls]);
                        });
                }
            );
        });

        Promise.all(promises)
            .then(() => console.log("All images uploaded"))
            .catch((err) => console.log(err));
    };


    return (
        <div >
            <div>
                <FireBaseUploader handleChange={handleChange} handleUpload={handleUpload} />
            </div>
            <div >
                <input type="text" name="animalName" autoComplete="off" required
                    value={form.animalName}
                    onChange={changeHandler} />
                <label forhtml="animalName" >
                    <span >
                        NAME
                    </span>
                </label>
            </div>
            <div >
                <input type="text" name="type" autoComplete="off" required
                    value={form.type}
                    onChange={changeHandler} />
                <label forhtml="type" >
                    <span >
                        TYPE OF ANIMAL
                    </span>
                </label>
            </div>
            <div >
                <input type="text" name="breed" autoComplete="off" required
                    value={form.breed}
                    onChange={changeHandler} />
                <label forhtml="breed" >
                    <span >
                        BREED
                    </span>
                </label>
            </div>
            <div >
                <input type="number" min={0} name="age" autoComplete="off" required
                    value={form.number}
                    onChange={changeHandler} />
                <label forhtml="age" >
                    <span >
                        AGE
                    </span>
                </label>
            </div>
            <div >
                <input type="number" min={0} name="price" autoComplete="off" required
                    value={form.price}
                    onChange={changeHandler} />
                <label forhtml="price" >
                    <span >
                        PRICE
                    </span>
                </label>
            </div>
            <div >
                <input type="text" name="color" autoComplete="off" required
                    value={form.color}
                    onChange={changeHandler} />
                <label forhtml="color">
                    <span >
                        COLOR
                    </span>
                </label>
            </div>
            <div >
                <RadioButton
                    label="Male"
                    value={gender === 'male'}
                    onChange={handleMaleChange}
                ></RadioButton>
                <RadioButton
                    label="Female"
                    value={gender === 'female'}
                    onChange={handleFemaleChange}
                ></RadioButton>
            </div>
            <div >
                <textarea type="text" name="information" autoComplete="off" required value={form.information}
                    onChange={changeHandler} />
                <label forhtml="color">
                    <span >
                        INFORMATION
                    </span>
                </label>
            </div>
            <button disabled={loading} onClick={createAdHandler}>Create</button>
        </div >
    );
};
