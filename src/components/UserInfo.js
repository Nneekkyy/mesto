export default class UserInfo {
    constructor({name, about}){
        this._name = name;
        this._about = about;
    }

    getUserInfo() {
      return {
              name: this._name.textContent,
             about: this._about.textContent
      };
    }

    setUserInfo(profileData) {
        this._name.textContent = profileData.name;
        this._about.textContent = profileData.about;
    }
}
