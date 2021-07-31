export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userJob = document.querySelector(jobSelector);
    this._userAvatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return (this._profileData = {
      name: this._userName.textContent,
      about: this._userJob.textContent,
    });
  }

  setUserInfo({ name, about, avatar }) {
    this._userName.textContent = name;
    this._userJob.textContent = about;
    this._userAvatar.src = avatar;
  }
}
