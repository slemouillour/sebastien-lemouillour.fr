/**
 * Created by sebastien on 09/04/15.
 */
angular.module('SlmApp').directive('slmCompetence', function () {
    'use strict';
    return {
        restrict: 'E',
        //priority: 0,
        templateUrl: 'app/components/competence/competence.html',
        //replace: bool,
        //transclude: bool,
        scope: true,
        controller: "CompetenceController",
        controllerAs: "competence"
        //require: string,
        //link: function postLink(scope, iElement, iAttrs) {},
        //compile: function compile(tElement, tAttrs, transclude) {
        //    return {
        //        pre: function preLink(scope, iElement, iAttrs, controller) {},
        //        post: function postLink(scope, iElement, iAttrs, controller) {}
        //    }
        //}

    };
});