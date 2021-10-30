import React from "react";
import {addMessageAC, updateNewMessageTextAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

type DialogsType = {
    // dialogsPage: DialogPageType
    // dispatch: (action: ActionsType) => void
    // store: StoreType
}

function DialogsContainer(props: DialogsType) {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                // const state = store.getState()

                const addMessageText = (text: string) => {
                    store.dispatch(addMessageAC(text))
                }

                const onMessageChange = (text: string) => {
                    store.dispatch(updateNewMessageTextAC(text))

                }
                return <Dialogs
                    onMessageChange={onMessageChange}
                    addMessageText={addMessageText}
                    dialogsPage={store.getState().dialogsPage}
                />
            }
        }
        </StoreContext.Consumer>

    )
}

export default DialogsContainer;