const mongoose = require('mongoose');

const UserProfile = mongoose.model('UserProfile', {
  userId: mongoose.Schema.Types.ObjectId,
  email: String,
  publicEmail: String,
  name: String,
  bio: String,
  url: String, 
  company: String,
  location: String,
  profileImageUrl: String,
  facebookUrl: String, 
  stackoverflowUrl: String, 
  linkedinUrl: String, 
  behanceUrl: String,
  dribbbleUrl: String,
  mediumUrl: String,
  instagramUrl: String,
  twitterUrl: String,
});

module.exports = UserProfile;
