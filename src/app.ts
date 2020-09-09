import * as angular from 'angular';
import 'angular-route';
import {homeComponent} from "./components/home.component";
import {navComponent} from "./components/nav.component";
import {adminComponent} from "./components/admin.component";

let app = angular.module('home-app', ['ngRoute'], [
    '$routeProvider',
    '$locationProvider',
    ($routeProvider: any, $locationProvider: any) => {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
        .when('/home', {
            template: '<app-home></app-home>',
        })
        .when('/admin', {
            template: `<app-admin></app-admin>`,
        })
        .otherwise({
        redirectTo: '/home'
    });

    console.log('config');
}]);

app.component('appHome', homeComponent);
app.component('appNav', navComponent);
app.component('appAdmin', adminComponent);

