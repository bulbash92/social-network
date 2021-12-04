import React from "react";
import {addMessage, InitialStateType, updateNewMessageText} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";

type mapStateToPropsType = {
    dialogsPage: InitialStateType
}



const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(Dialogs)

export default DialogsContainer;