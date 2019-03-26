//@flow
import Web3 from 'web3'
import bs58 from 'bs58'
import Gun from 'gun/gun'
import IPFS from 'ipfs-mini'
import Secrets from './Secrets.json'
import stripHexPrefix from 'strip-hex-prefix'
 
export class Utils {
    web3:Object
    version: {
        major: string,
        minor: string,
        patch: string
    }


  async init(){
      console.log('initializing Utils & web3..')
      this.web3 = await this.getWeb3()
      console.log('web3 initialized')

  }


  getWeb3 = () =>{
  return new Promise((resolve, reject) => {
    let web3Provider = undefined
    //let useWebSocket = Meteor.settings.public.useWebSocket //TODO: change to config
    let useWebSocket = true

    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();
          // Acccounts now exposed
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else {
      
    //TODO: change to config
        //let network_id = Meteor.settings.public.network_id
        let network_id = 42
        let provider
        if (useWebSocket){
            // provider = Meteor.settings.public.websocketWeb3Provider + Secrets.ethereum[network_id].infura.api_key
            //TODO: change to config
            provider = "wss://kovan.infura.io/ws" + Secrets.ethereum[network_id].infura.api_key
            web3Provider = new Web3.providers.WebsocketProvider(provider);
        }else{
            //TODO: change to config
            provider = "https://kovan.infura.io/v3/" + Secrets.ethereum[network_id].infura.api_key
            web3Provider = new Web3.providers.HttpProvider(provider);
        }
        console.log("new web3 from provider:"+provider);
        const web3 = new Web3(provider);
        resolve(web3)

      }
    });
  })
};

  // Return bytes32 hex string from base58 encoded ipfs hash,
  // stripping leading 2 bytes from 34 byte IPFS hash
  // Assume IPFS defaults: function:0x12=sha2, size:0x20=256 bits
  // E.g. "QmNSUYVKDSvPUnRLKmuxk9diJ6yS96r1TrAXzjTiBcCLAL" -->
  // "0x017dfd85d4f6cb4dcd715a88101f7b1f06cd1e009b2327a0809d01eb9c91f231"
getBytes32FromData(data) {
  return "0x" + bs58.decode(data).slice(2).toString('hex')
}

// Return base58 encoded ipfs hash from bytes32 hex string,
// E.g. "0x017dfd85d4f6cb4dcd715a88101f7b1f06cd1e009b2327a0809d01eb9c91f231"
// --> "QmNSUYVKDSvPUnRLKmuxk9diJ6yS96r1TrAXzjTiBcCLAL"

getDataFromBytes32(bytes32Hex) {
  // Add our default ipfs values for first 2 bytes:
  // function:0x12=sha2, size:0x20=256 bits
  // and cut off leading "0x"
  const hashHex = "1220" + bytes32Hex.slice(2)
  const hashBytes = Buffer.from(hashHex, 'hex');
  const hashStr = bs58.encode(hashBytes)
  return hashStr
}

  getWeb3Old(){
    
    let web3Provider = undefined
    //let useWebSocket = Meteor.settings.public.useWebSocket //TODO: change to config
    let useWebSocket = true
    if ((typeof this.web3 !== 'undefined') && (this.parseVersionString(this.web3.version.api).major > 0 )){  // web3 version 1.0 and up
      web3Provider = this.web3.currentProvider;
      console.log("existing web3. is is metamask?",this.web3.currentProvider.isMetaMask);
  } else {

    //TODO: change to config
    //let network_id = Meteor.settings.public.network_id
    let network_id = 42
    let provider
    if (useWebSocket){
        // provider = Meteor.settings.public.websocketWeb3Provider + Secrets.ethereum[network_id].infura.api_key
        //TODO: change to config
        provider = "wss://kovan.infura.io/ws" + Secrets.ethereum[network_id].infura.api_key
        web3Provider = new Web3.providers.WebsocketProvider(provider);
    }else{
        //TODO: change to config
        provider = "https://kovan.infura.io/v3/" + Secrets.ethereum[network_id].infura.api_key
        web3Provider = new Web3.providers.HttpProvider(provider);
    }
    console.log("new web3 from provider:"+provider);
   }

  // use globally injected web3 to find the currentProvider and wrap with web3 v1.0
   this.web3 = new Web3(web3Provider);

    //console.log("web3 provider:",this.web3.currentProvider.constructor.name)
    console.log("web3 version:",this.web3.version.api || this.web3.version)

    return this.web3
  }

  parseVersionString(str:string):version {
    if (typeof(str) != 'string') { return undefined }
    var x = str.split('.');
    // parse from string or default to 0 if can't parse
    var maj = parseInt(x[0]) || 0;
    var min = parseInt(x[1]) || 0;
    var pat = parseInt(x[2]) || 0;
    return {
        major: maj,
        minor: min,
        patch: pat
    }
}

absoluteUrl = (function() {
	var a;

	return function(url) {
		if(!a) a = document.createElement('a');
		a.href = url;

		return a.href;
	};
})();

}



export default new Utils() // Singleton
