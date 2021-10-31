import React from "react";
import {addMessageAC, InitialStateType, updateNewMessageTextAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";

import {Dispatch} from "redux";

type DialogsType = {
    // dialogsPage: DialogPageType
    // dispatch: (action: ActionsType) => void
    // store: StoreType
}

type mapStateToPropsType = {
    dialogsPage: InitialStateType
}

type mapDispatchToPropsType = {
    onMessageChange: (text: string) => void
    addMessageText: (text: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onMessageChange: (text: string) => {
            dispatch(updateNewMessageTextAC(text))

        },
        addMessageText: (text: string) => {
            dispatch(addMessageAC(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;