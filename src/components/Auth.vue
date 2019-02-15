<template>
  <div>
    <slot v-if="authenticated"></slot>
    <slot name="login-error" :errorMessage="errorMessage" v-if="hasError"></slot>
    <slot name="login-progress" v-if="!authenticated && !hasError"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { graph } from '@pnp/graph';
import { sp } from '@pnp/sp';
import * as AuthenticationContext from 'adal-angular';

import { adalConfig } from '../adal/adalConfig';
import { PnPFetchClient } from '@/pnp/PnPFetchClient';

export const authContext: AuthenticationContext = new AuthenticationContext(
  adalConfig,
);

@Component
export default class Auth extends Vue {
  public authenticated: boolean = false;
  public renewIframe: boolean = false;
  public errorMessage: string = '';
  public hasError: boolean = false;

  public beforeMount(): void {
    authContext.handleWindowCallback();

    // we are inside renew iframe, thus do nothing
    if (authContext.isCallback(window.location.hash)) {
      this.renewIframe = true;
      return;
    }

    // no user context, let's redirect to authentication page
    if (!authContext.getCachedToken(adalConfig.clientId) || !authContext.getCachedUser()) {
      authContext.login();
    } else // show error if there is an error response from Office 365
    if (authContext.getLoginError()) { 
      this.hasError = true;
      this.errorMessage = authContext.getLoginError();
    } else { // user was authenticated, show child content and initialize pnp.js
      this.authenticated = true;

      // pnp.js initialization
      const fetchClientFactory = () => {
        return new PnPFetchClient(authContext);
      };

      sp.setup({
        sp: {
          fetchClientFactory,
          baseUrl: process.env.VUE_APP_SP_SITE_URL,
        },
      });

      graph.setup({
        graph: {
          fetchClientFactory,
        },
      });
    }
  }
}
</script>

