import {IOnInit} from "angular";

export class AdminComponentController implements IOnInit {
    static $inject = [];
    constructor(
        public rootScope: any,
    ) { }

    $onInit(): void {

    }
}

export const adminComponent: any = {
    controller: AdminComponentController,
    bindings: {},
    template: `
        <div>Admin Component</div>
    `,
};
