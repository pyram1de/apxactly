import {IOnInit} from "angular";

export class NavComponentController implements IOnInit {
    static $inject = [];
    constructor(
        public rootScope: any,
    ) { }

    $onInit(): void {

    }

    route(route: string) {
        console.log('route', route);
    }
}

export const navComponent: any = {
    controller: NavComponentController,
    bindings: {},
    template:
        `<ul>
            <li ng-click="$ctrl.route('home')"><a href="/home">home</a></li>
            <li ng-click="$ctrl.route('admin')"><a href="/admin">admin</a></li>
        </ul>`,
};
