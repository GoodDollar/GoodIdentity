type Profile =  {
        type: string,
        context: string,
        apps: {
            http: string
        }
}

type SocialMedia = {
        facebook:string,
        twitter:string,
        linkedin:string,
        instagram:string,
        github:string,
}

type Proposal =  {
    ethOffering: Number,
    appPrivateKey: string,
    authResponseToken: string,
    coreSessionToken: string,
    decentralizedID: string,
    hubUrl: string,
    identityAddress: string,
    photo:string,
    profile: Profile,
    username:string,
    firstname:string,
    lastname:string,
    socialMedia:SocialMedia
  
}

type UserStoredData = {
    userDataHash: string, // The hashed data of the user at the point of creating this instance
    dataPath: string, // A path to the user profile in a third party (V1.0: GunDB)
}



