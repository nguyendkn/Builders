import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngxs/store";
import {BaseService, baseUrl} from '@shared/services';
import {WorkflowList} from "./workflow.state";

@Injectable({providedIn: 'root'})
export class WorkflowService extends BaseService {
    constructor(
        httpClient: HttpClient,
        @Inject(baseUrl) protected hostUrl: string,
        private store: Store
    ) {
        super(httpClient);
        this.setEndpoint(hostUrl, 'storage/api/v1');
    }

    list() {
        this.httpClient.get<any[]>(this.createUrl("list")).subscribe((items) => {
            this.store.dispatch(new WorkflowList(items));
        });
    }
}