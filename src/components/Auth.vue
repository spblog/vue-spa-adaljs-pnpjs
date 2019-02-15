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

    if (authContext.isCallback(window.location.hash)) {
      this.renewIframe = true;
      return;
    }

    if (
      !authContext.getCachedToken(adalConfig.clientId) ||
      !authContext.getCachedUser()
    ) {
      authContext.login();
    } else if (authContext.getLoginError()) {
      this.hasError = true;
      this.errorMessage = authContext.getLoginError();
    } else {
      this.authenticated = true;

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

