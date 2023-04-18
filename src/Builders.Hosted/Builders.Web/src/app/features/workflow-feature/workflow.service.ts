import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngxs/store";
import {BaseService, baseUrl} from '@shared/services';
import {WorkflowList} from "./workflow.state";
import {IWorkflow, IWorkflowListRequest, IWorkflowStateResponse} from "./workflow.model";
import {map, Observable} from "rxjs";
import {IResponse} from "../../shared/models/response";

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

    list(payload: IWorkflowListRequest): Observable<IWorkflowStateResponse[]> {
        return this.httpClient.get<IResponse<IWorkflowStateResponse[]>>(this.createUrl("list"))
            .pipe(map((response) => response.data));
    }
}