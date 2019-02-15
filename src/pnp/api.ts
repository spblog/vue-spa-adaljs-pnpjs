import { sp } from '@pnp/sp';

export class Api {
    public static async getWebInfo(): Promise<any> {
        return await sp.web.get();
    }
}
