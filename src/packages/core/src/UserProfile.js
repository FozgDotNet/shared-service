var UserProfileModel = require('../../../models/UserProfile.model');
var validateEmail = require('../../utils').validateEmail;
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
    if (this.email !== null && !validateEmail(this.email)) {
      throw new Error('Email invalid');
    }

    var _userProfile = new UserProfileModel({
      email: this.email, // unique
      userId: this.userId, // unique
      name: this.name,
      bio: this.bio,
      url: this.url, 
      company: this.company,
      location: this.location,
      profileImageUrl: this.profileImageUrl,
      facebookUrl: this.facebookUrl, 
      stackoverflowUrl: this.stackoverflowUrl, 
      linkedinUrl: this.linkedinUrl, 
      behanceUrl: this.behanceUrl,
      dribbbleUrl: this.dribbbleUrl,
      mediumUrl: this.mediumUrl,
      instagramUrl: this.instagramUrl,
      twitterUrl: this.twitterUrl,
    });
    return await _userProfile.save();
  }

  /**
   * get all info user by user id
   */
  async findById(id) {
    try {
      let doc = await UserProfileModel.findById(id);
      return doc;
    } catch(e) {
      return null;
    }
  }

  /**
   * get user info by email
   */
  async findByEmail(email) {
    try {
      let doc = await UserProfileModel.findOne({email});
      return doc;
    } catch (e) {
      return null;
    }
  }
}

module.exports = UserProfile;
