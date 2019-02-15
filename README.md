# Sample Vue.js SPA with [adal.js](https://github.com/AzureAD/azure-activedirectory-library-for-js) and [PnP.js](https://github.com/pnp/pnpjs) integration

Blog post [to be added](to be added)

## How to run:
1. Create a new app registration in Azure AD and provide read access to SharePoint 
2. Add `http://localhost:8080/` as a valid reply url for the app registration
3. Open `src/adal/adalConfig.ts` and update `clientId` and `tenant` parameters
4. Edit `.env.development` SharePoint site url
5. `$ npm i`
6. `$ npm run serve`