import { InjectionToken } from '@angular/core';
import { environment } from '@environments'

export const baseUrl = new InjectionToken<string>('baseUrl', {
  providedIn: 'root',
  factory: () => environment.host,
});
