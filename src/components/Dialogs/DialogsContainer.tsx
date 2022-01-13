import {addMessage, InitialStateType} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {ComponentType} from "react";

type mapStateToPropsType = {
    dialogsPage: InitialStateType
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
export default compose<ComponentType>(connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialogs);