import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class BaseService {
  protected baseUrl!: string;

  constructor(protected httpClient: HttpClient) {}

  protected setEndpoint(hostUrl: string, endpoint: string) {
    if (endpoint.startsWith('/')) {
      endpoint = endpoint.replace(/^\/+/, '');
    }
    if (endpoint.endsWith('/')) {
      endpoint = endpoint.replace(/\/+$/, '');
    }
    if (hostUrl.endsWith('/')) {
      hostUrl = hostUrl.replace(/\/+$/, '');
    }
    this.baseUrl = `${hostUrl}/${endpoint}`;
  }

  protected createParams(params: { [key: string]: any }): HttpParams {
    return Object.keys(params).reduce((m, k) => {
      if (params[k] !== null) {
        return m.set(k, params[k].toString());
      }
      return m;
    }, new HttpParams());
  }

  protected createUrl(url: string) {
    if (!url.startsWith('/')) {
      url = '/' + url;
    }
    return this.baseUrl + url;
  }
}
