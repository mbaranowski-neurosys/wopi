import * as enums from './WopiRequestType';

export class WopiRequest {
    Id: string;
    RequestType: enums.WopiRequestType;
    AccessToken: string;
}
