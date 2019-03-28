import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@hisptz/ngx-dhis2-http-client';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OrgUnitGroupService {
  constructor(private httpClient: NgxDhis2HttpClientService) {}

  loadAll() {
    return this.httpClient
      .get(`organisationUnitGroups.json?fields=id,name&paging=false`)
      .pipe(map((res: any) => res.organisationUnitGroups || []));
  }
}
