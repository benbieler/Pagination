'use strict';

var appModule = angular.module('sen.pagination.dev', ['ngRoute', 'ngResource']);

appModule.provider('senProvider', function ($scope) {
        $scope.amountPerPage = 10;
        $scope.generateUserList = function () {
        $scope.users = [
        {"name": "Andrea", "email": "ajames0@businesswire.com", "location": "Babakan"},
        {"name": "Harry", "email": "hgordon1@tmall.com", "location": "Yumbel"},
        {"name": "Jeremy", "email": "jtucker2@mozilla.com", "location": "Hövsan"},
        {"name": "Albert", "email": "acrawford3@addtoany.com", "location": "Carleton-sur-Mer"},
        {"name": "Gregory", "email": "gnelson4@bbc.co.uk", "location": "Bello"},
        {"name": "David", "email": "dhudson5@ox.ac.uk", "location": "Khromtau"},
        {"name": "Tina", "email": "tmiller6@4shared.com", "location": "Carrizal"},
        {"name": "Jose", "email": "jmorris7@princeton.edu", "location": "Cineumbeuy"},
        {"name": "Sharon", "email": "sphillips8@cbc.ca", "location": "Dazhan"},
        {"name": "Howard", "email": "hadamsa@mit.edu", "location": "General Cabrera"},
        {"name": "Jeremy", "email": "jperryb@washington.edu", "location": "Caherconlish"},
        {"name": "Randy", "email": "rtaylorc@cbsnews.com", "location": "Teluk Pinang"},
        {"name": "Sandra", "email": "scooperd@cbslocal.com", "location": "Poręba Spytkowska"},
        {"name": "Deborah", "email": "dwebbe@google.com.au", "location": "Huruta"},
        {"name": "Todd", "email": "tstanleyf@ft.com", "location": "Oliveirinha"},
        {"name": "Mildred", "email": "mwatsong@columbia.edu", "location": "Borovikha"},
        {"name": "Louise", "email": "ljacobsh@themeforest.net", "location": "Nanfeng"},
        {"name": "Robin", "email": "rcampbelli@phpbb.com", "location": "Aulnay-sous-Bois"},
        {"name": "Alan", "email": "ajacksonj@disqus.com", "location": "Pakusari"},
        {"name": "Katherine", "email": "kpowellk@state.tx.us", "location": "Krinichnaya"},
        {"name": "Jean", "email": "jhughesl@opensource.org", "location": "Skövde"},
        {"name":"Christina","email":"cevansw@furl.net","location":"Namangan Shahri"},
        {"name":"Dennis","email":"dwilliamsx@theguardian.com","location":"Castleknock"},
        {"name":"Michelle","email":"mmorrisony@china.com.cn","location":"Dobropillya"},
        {"name":"Roger","email":"rwoodsz@columbia.edu","location":"Buenavista"},
        {"name":"Jesse","email":"jwebb10@delicious.com","location":"Baitang"},
        {"name":"Carol","email":"cpierce11@domainmarket.com","location":"Hamburg"},
        {"name":"Douglas","email":"dhall12@dagondesign.com","location":"Carvalhal Redondo"},
        {"name":"Joan","email":"jwagner13@naver.com","location":"Pniewy"},
        {"name":"Sean","email":"swheeler14@about.me","location":"Sam Chuk"},
        {"name":"Carl","email":"ccollins15@state.tx.us","location":"Madara"},
        {"name":"Larry","email":"lbrooks16@dailymail.co.uk","location":"Al Muharraq"},
        {"name":"Gregory","email":"gmorgan17@stanford.edu","location":"Auna"},
        {"name":"Lisa","email":"lgriffin18@altervista.org","location":"Marvdasht"},
        {"name":"Robin","email":"rgutierrez19@sun.com","location":"Mengzhai"},
        {"name":"Pamela","email":"pwillis1a@webs.com","location":"Promyshlennaya"},
        {"name":"Kimberly","email":"kthompson1b@issuu.com","location":"Zhongtang"},
        {"name":"Walter","email":"wgrant1c@sciencedirect.com","location":"Kastornoye"},
        {"name":"Roy","email":"rrose1d@ucoz.com","location":"Shingū"}
        ];
    };

    //Call function
    $scope.generateUserList();

    $get: function(){
        return{

        }
    }

})

//Creating custom directive 'userpagination'
appModule.directive('userpagination', function(){

    return {
        scope: true,
        restrict: 'E',
        link: function(scope, e, a){
            scope.information = a.name + ' ' + a.email + ' ' + a.location
        },
        replace: true,
        template: "{{<div ng-repeat='user in $scope.users'>{{user.name}}</div>}}"
    }

})
