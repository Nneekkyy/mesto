export default class UserInfo {
    constructor({name, about, avatar}){
        this._name = name;
        this._about = about;
        this._avatar = avatar;
    }

    getUserInfo() {
      return {
          name: this._name.textContent,
          about: this._about.textContent,
          qavatar: this._avatar.src
      };
    }

    setUserInfo(profileData) {
        this._name.textContent = profileData.name;
        this._about.textContent = profileData.about;
        this._avatar.src = profileData.avatar;
    }
}
