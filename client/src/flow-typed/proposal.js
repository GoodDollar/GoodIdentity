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
    image:[{
        contentUrl:string,
    }],
    profile: Profile,
    username:string,
    firstname:string,
    lastname:string,
    socialMedia:SocialMedia
  
}



