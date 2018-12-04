var UserProfileModel = require('../../../models/UserProfile.model');

class UserProfile {
  constructor(doc) {
    // this.userId = userId;
    if (doc) {
      Object.keys(doc).forEach(key => {
        this[key] = doc[key]
      })
    }
  }


  async save() {
    var _userProfile = new UserProfileModel({
      email: this.email,

    });
    return _userProfile.save()
  }

  /**
   * get all info user by user id
   */
  async findById(id) {
    return UserProfileModel.findById(id)
  }

  /**
   * get user info by email
   */
  async findByEmail(email) {
    return UserProfileModel.findOne({email})
  }
}

module.exports = UserProfile;
