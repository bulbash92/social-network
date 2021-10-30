import * as React from "react";
import {StoreType} from "./Redux/redux-store";

const StoreContext = React.createContext({} as StoreType)
//export type StoreContextType = typeof StoreContext

type ProviderType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (<StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
};


export default StoreContext