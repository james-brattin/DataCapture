import { Injectable } from '@angular/core';
import { IodpLoginService, EncryptObject, DestinationObject } from 'iodplogin';
import { environment } from '../../../environments/environment';

@Injectable()
export class StartupService {

  constructor(private login: IodpLoginService) {
    this.login.setDestination(this._destinationSettings);
    this.login.setEncryption(this._encryptSettings);
  }

  load() {}

  private _destinationSettings: DestinationObject = {
    'server': environment.server,
    'group': 'autherW',
    'service': 'AuthorizationGet',
    'application': 'TEMPLATEMANAGER'
  }
  private _encryptSettings: EncryptObject = {
    'iv': 'F27D5C9927726BCEFE7510B1BDD3D137',
    'salt': '3FF2EC019C627B945225DEBAD71A01B6985FE84C95A70EB132882F88C0A59A55',
    'keySize': 128,
    'iterationCount': 10000,
    'passPhrase': 'IODP'
  }
}