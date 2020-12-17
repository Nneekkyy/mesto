export default class UserInfo {
    constructor({name, about}){
        this._name = name;
        this._about = about;
    }

    getUserInfo() {
        this._profileInfo = {};

        this._profileInfo.name = this._name.textContent;
        this._profileInfo.about = this._about.textContent;

       return this._profileInfo;

    }

    setUserInfo(profileData) {
        this._name.textContent = profileData.name;
        this._about.textContent = profileData.about;
    }
}
