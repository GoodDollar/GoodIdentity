
type SocialMedia = {
        facebook:string,
        twitter:string,
        linkedin:string,
        instagram:string,
        github:string,
}

type Profile =  {
    publicKey: string,
    appPrivateKey: string,
    authResponseToken: string,
    coreSessionToken: string,
    decentralizedID: string,
    hubUrl: string,
    identityAddress: string,
    photo:string,
    username:string,
    firstname:string,
    lastname:string,
    socialMedia:SocialMedia
 
}

type idProposal =  {
    ethOffering: Number,
    publicKey: string,
    hashed_profile:string,
}

type UserProfile = {
    profile: string, // The profile
    hashed_profile: string, // The hashed data of the user at the point of creating this instance
}

const emptyUserProfile = {
    profile: '', 
    hashed_profile:'',
}

type UserStoredData = {
    userDataHash: string, // The hashed data of the user at the point of creating this instance
    dataPath: string, // A path to the user profile in a third party (V1.0: GunDB)
}



