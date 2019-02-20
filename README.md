# Sample Vue.js SPA with [adal.js](https://github.com/AzureAD/azure-activedirectory-library-for-js) and [PnP.js](https://github.com/pnp/pnpjs) integration

Blog post [Vue.js Single Page Application with adal.js and PnP.js: step by step guide](https://spblog.net/post/2019/02/20/vue-js-single-page-application-with-adal-js-and-pnp-js-step-by-step-guide)

## How to run:
1. Create a new app registration in Azure AD and provide read access to SharePoint, enable implicit oauth flow by modifying `manifest.json`
2. Add `http://localhost:8080/` as a valid reply url for the app registration
3. Open `src/adal/adalConfig.ts` and update `clientId` and `tenant` parameters
4. Edit `.env.development` SharePoint site url
5. `$ npm i`
6. `$ npm run serve`
