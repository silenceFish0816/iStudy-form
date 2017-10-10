var myapp=angular.module('myapp',[])；
		myapp.controller('ItemListController',function ($scope){
			$scope.item={
				name: "判断题",
				children: [
					{
						name: '第{{number}}题'
					}
				]
			},
			{
				name: "单选题",
				children:[
					name: '第{{number}}题'
				]
			},
			{
				name:"填空题",
				children:[
					name: '第{{number}}题'
				]
			},
			{
				name:"文档设计题",
				children:[
					name: '第{{number}}题'
				]
			}
		})
		.directive("folderTree",function(RecursionHelper)
		return {  
        restrict: "E",  
        scope: {  
            currentFolder: '='  
        },  
        templateUrl: '~/index2.html',  
        compile: function(element) {  
            ink  
            return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){  
                
                scope.variable = 'hello world';  
            });  
        }  
    };  
  });  
