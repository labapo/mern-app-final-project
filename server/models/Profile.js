import mongoose from 'mongoose'; 

const ProfileSchema = new mongoose.Schema ({
    creator: {
        //connects the user model by ID
        type: String
    },
    name: {
        type: String
    },
    profileImage: {
        type: String
    },
    linkedin: {
        type: String,
        required: true
    },
    facebook: {
        type: String
    },
    instagram: {
        type: String
    },
    twitter: {
        type: String
    },
    tiktok: {
        type: String
    },
    reddit: {
        type: String
    },
    soundCloud: {
        type: String
    },
    flickr: {
        type: String
    },
    personalWebsite: {
        type: String
    }
})

module.exports = Profile = mongoose.model('Profile', ProfileSchema)