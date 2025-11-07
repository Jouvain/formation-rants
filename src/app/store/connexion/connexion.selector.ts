import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ConnexionState } from "./connexion.state";


export const selectConnexionState = createFeatureSelector<ConnexionState>('connexion');

export const selectConnexion = createSelector(
    selectConnexionState,
    (state: ConnexionState) => state.isConnected
);