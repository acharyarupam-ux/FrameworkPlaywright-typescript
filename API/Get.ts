import {APIUtility} from "../utilities/apiutility";

export class GetEmployee{
    readonly apiUtility:APIUtility;

    constructor(request : any) {
        this.apiUtility = new APIUtility(request);
    }
    async getEmployeeDetails() {
        return await this.apiUtility.request.get('https://dummy.restapiexample.com/api/v1/employees');
    }
}