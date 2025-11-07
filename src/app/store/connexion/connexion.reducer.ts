import { createReducer, on } from "@ngrx/store";
import { ConnexionState } from "./connexion.state";
import { connexion, deconnexion } from "./connexion.action";


const initialState: ConnexionState = {isConnected: false};

export const connexionReducer = createReducer(
    initialState,
    on(connexion, (state) => ({...state, isConnected: true}) ),
    on(deconnexion, (state) => ({...state, isConnected: false}) )
);