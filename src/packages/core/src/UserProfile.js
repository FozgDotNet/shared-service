var UserProfileModel = require('../../../models/UserProfile.model');

class UserProfile {
  constructor(userId) {
    this.userId = userId;
  }

  /**
   * get all info user by user id
   */
  async getUserProfileById(userId) {
    return UserProfileModel.findById(this.userId)
  }

  /**
   * get user info by email
   */
  async getUserProfileByEmail(email) {
    return UserProfileModel.findOne({email})
  }
}

module.exports = UserProfile;
