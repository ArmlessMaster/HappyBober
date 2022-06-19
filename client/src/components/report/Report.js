import React, { useContext, useState } from "react";
import { AuthContext } from '../../context/AuthContext';
import { useHttp } from "../../hooks/http.hook";
import { RadioButton } from '../../components/RadioButton/RadioButton';

export const Report = ({ reportType, ad, account }) => {

    const [cause, setCause] = useState('Spam');

    const [inputText, setInputText] = useState('');

    const auth = useContext(AuthContext);

    const { loading, request } = useHttp();

    const [complain, setComplain] = useState(false);

    const changeHandler = event => {
        setInputText('');
        setCause(event.target.name);
    }

    const inputChangeHandler = event => {
        setInputText(event.target.value);
        setCause(event.target.value);
    }

    const createReport = async () => {
        try {
            await request('/api/report/createreport', 'POST', { ad, account, cause, reportType }, { Authorization: `Bearer ${auth.token}` });
            setComplain(true);
        } catch (e) {

        }
    }

    if (complain === true) {
        return (<div><h1>Report sended</h1></div>)
    }

    return (
        <div>
            <RadioButton
                label="Spam"
                value={cause === 'Spam'}
                name='Spam'
                onChange={changeHandler}
            ></RadioButton>
            <RadioButton
                label="Invalid data"
                value={cause === 'Invalid data'}
                name="Invalid data"
                onChange={changeHandler}
            ></RadioButton>
            <RadioButton
                label="Prohibited goods"
                value={cause === 'Prohibited goods'}
                name="Prohibited goods"
                onChange={changeHandler}
            ></RadioButton>
            <RadioButton
                label="Irrelevant announcement"
                value={cause === 'Irrelevant announcement'}
                name="Irrelevant announcement"
                onChange={changeHandler}
            ></RadioButton>
            <RadioButton
                label="Fraud"
                value={cause === 'Fraud'}
                name="Fraud"
                onChange={changeHandler}
            ></RadioButton>
            <RadioButton
                label="Inappropriate behavior"
                value={cause === 'Inappropriate behavior'}
                name="Inappropriate behavior"
                onChange={changeHandler}
            ></RadioButton>
            <RadioButton
                label="Other..."
                value={cause === 'Other...' || (inputText !== '')}
                name="Other..."
                onChange={changeHandler}
            ></RadioButton>
            <textarea disabled={!(cause === 'Other...' || inputText !== '')} style={!(cause === 'Other...' || inputText !== '') ? { display: 'none' } : { display: 'inline' }} onChange={inputChangeHandler} value={inputText}></textarea>
            <button onClick={createReport}>Complain</button>
        </div>
    );

};