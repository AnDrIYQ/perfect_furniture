import { makeAutoObservable } from "mobx";
import MainService from "../services/MainService";
import { $refreshApi } from "../http";

export default class MainStore {
    // Fields
    constructor() {
        makeAutoObservable(this);
        // window.GLOBAL_AUTH = this;
    }

    // Mutations

    // Actions (async)
}