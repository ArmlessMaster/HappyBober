import React from 'react';
import { connect } from 'react-redux';
import { Ad as AdBase } from '../components';

const Ad = ({ currentDialogId, user, dialogs }) => {
    if (!dialogs.length || !currentDialogId) {
        return null;
      }

    return (<AdBase/>);
}

export default connect(({dialogs, user}) => ({dialogs:dialogs.items, currentDialogId:dialogs.currentDialogId, user: user.data}))(Ad);