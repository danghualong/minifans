import { storage } from "@wxa/core";
import { SESSION_KEY } from "../setting/storage"

export default {

    login(sessionId) {
        return this._setSessionId(sessionId);
    },

    logout() {
        return this._clearSession();
    },

    isLogin() {
        return this._getSessionId() ? true : false;
    },

    sessionId() {
        return this._getSessionId() || '';
    },

    _getSessionId() {
        return storage.get(SESSION_KEY);
    },

    _setSessionId(sessionId) {
        return storage.set(SESSION_KEY, sessionId);
    },

    _clearSession() {
        return storage.clear();
    }
}
