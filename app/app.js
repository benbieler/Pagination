'use strict';

var appModule = angular.module('sen.pagination.dev', ['ngRoute', 'ngResource']);
appModule.controller('senPagCtrl', function($scope) {
	$scope.users = [],
	$scope.amountPerPage = 10;

	$scope.users = function(){
		$scope.users = [
		{"name":"Andrea","email":"ajames0@businesswire.com","location":"Babakan"},
		{"name":"Harry","email":"hgordon1@tmall.com","location":"Yumbel"},
		{"name":"Jeremy","email":"jtucker2@mozilla.com","location":"Hövsan"},
		{"name":"Albert","email":"acrawford3@addtoany.com","location":"Carleton-sur-Mer"},
		{"name":"Gregory","email":"gnelson4@bbc.co.uk","location":"Bello"},
		{"name":"David","email":"dhudson5@ox.ac.uk","location":"Khromtau"},
		{"name":"Tina","email":"tmiller6@4shared.com","location":"Carrizal"},
		{"name":"Jose","email":"jmorris7@princeton.edu","location":"Cineumbeuy"},
		{"name":"Sharon","email":"sphillips8@cbc.ca","location":"Dazhan"},
		{"name":"Joe","email":"jtorres9@posterous.com","location":"Presnenskiy"},
		{"name":"Howard","email":"hadamsa@mit.edu","location":"General Cabrera"},
		{"name":"Jeremy","email":"jperryb@washington.edu","location":"Caherconlish"},
		{"name":"Randy","email":"rtaylorc@cbsnews.com","location":"Teluk Pinang"},
		{"name":"Sandra","email":"scooperd@cbslocal.com","location":"Poręba Spytkowska"},
		{"name":"Deborah","email":"dwebbe@google.com.au","location":"Huruta"},
		{"name":"Todd","email":"tstanleyf@ft.com","location":"Oliveirinha"},
		{"name":"Mildred","email":"mwatsong@columbia.edu","location":"Borovikha"},
		{"name":"Louise","email":"ljacobsh@themeforest.net","location":"Nanfeng"},
		{"name":"Robin","email":"rcampbelli@phpbb.com","location":"Aulnay-sous-Bois"},
		{"name":"Alan","email":"ajacksonj@disqus.com","location":"Pakusari"},
		{"name":"Katherine","email":"kpowellk@state.tx.us","location":"Krinichnaya"},
		{"name":"Jean","email":"jhughesl@opensource.org","location":"Skövde"}
		];

	}
	$scope.users();