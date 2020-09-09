import {IOnInit} from "angular";

export class HomeComponentController implements IOnInit {
    static $inject = [];
    constructor(
        public rootScope: any,
    ) { }

    $onInit(): void {

    }
}

export const homeComponent: any = {
    controller: HomeComponentController,
    bindings: {},
    template: `
        <div>hello home</div>
    `,
};
