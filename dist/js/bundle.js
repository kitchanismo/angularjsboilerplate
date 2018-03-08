!function(e){function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var n={};r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r,n){n(1),n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11)},function(e,r){angular.module("app",["directives.templates","config.routes","services.user","controller.main","controller.home","controller.signin","controller.navbar","controller.dashboard","controller.about","controller.footer"]).run(["$rootScope",function(e){e.appTheme="success"}])},function(e,r,n){"use strict";angular.module("config.routes",["ngRoute"]).config(["$routeProvider","$locationProvider",function(e,r){e.when("/",{templateUrl:"partials/pages/home.html",controller:"homeController"}).when("/about",{templateUrl:"partials/pages/about.html",controller:"aboutController"}).when("/signin",{templateUrl:"partials/pages/signin.html",controller:"signinController"}).when("/signup",{templateUrl:"partials/pages/signup.html"}).when("/dashboard",{templateUrl:"partials/pages/dashboard.html",controller:"dashboardController"}).otherwise({redirectTo:function(){return"/"}}),r.hashPrefix("")}])},function(e,r,n){"use strict";angular.module("controller.main",[]).controller("mainController",["$rootScope","$scope",function(e,r){}])},function(e,r){angular.module("controller.home",["services.user"]).controller("homeController",["$scope","userAction","userRequest",function(e,r,n){e.num1=5,e.num2=3,e.student={fname:"kaneki",lname:"ken",contact:"vampiping",address:"tokyo"},e.getSum=function(){return r.Sum(e.num1,e.num2)},e.getInfo=r.getInfo(e.student),e.users=n.getUser()}])},function(e,r){angular.module("controller.signin",[]).controller("signinController",["$scope",function(e){e.username="hey"}])},function(e,r){angular.module("controller.navbar",[]).controller("navbarController",["$scope",function(e){e.brandName="KITCHANISMO",e.isActiveDash="active",e.isActiveAbout=""}])},function(e,r){angular.module("controller.dashboard",["services.user"]).controller("dashboardController",["$scope","userAction","userRequest",function(e,r,n){e.home="active",e.profile="",e.another="",e.homeToggle=function(){e.home="active",e.profile="",e.another=""},e.profileToggle=function(){e.home="",e.profile="active",e.another=""},e.anotherToggle=function(){e.home="",e.profile="",e.another="active"},e.users=n.getUser()}])},function(e,r){angular.module("controller.about",[]).controller("aboutController",function(){})},function(e,r){angular.module("controller.footer",[]).controller("footerController",function(){})},function(e,r){angular.module("services.user",[]).factory("userAction",function(){return{getInfo:function(e){return e.fname+" "+e.lname+" "+e.contact+" "+e.address},Sum:function(e,r){return parseInt(e)*parseInt(r)*3.41}}}).factory("userRequest",function(){return{getUser:function(){return[{username:"kitchanismo",fname:"cristian",lname:"betsayda"},{username:"nechi",fname:"natasha",lname:"navarro"},{username:"tasha",fname:"natasha",lname:"navarro"}]}}})},function(e,r){angular.module("directives.templates",[]).directive("appRoot",function(){return{templateUrl:"app.html",controller:"mainController"}}).directive("navBar",function(){return{templateUrl:"partials/templates/navbar.html",controller:"navbarController"}}).directive("appFooter",function(){return{templateUrl:"partials/templates/footer.html"}}).directive("appTable",function(){return{templateUrl:"partials/templates/table.html"}})}]);