angular.module('app', ['ui.bootstrap']);

angular.module('app').controller("MainController", function($scope, $uibModal, dataFactory){
    $scope.$watch(function(scope) { return scope.items },
        function(newValue, oldValue) {
            //document.getElementById("").innerHTML =
            //    "" + newValue + "";
        }
    );


    $scope.items =  dataFactory.items;

    $scope.toggle = function(item) {
        item.showSubItem = ! item.showSubItem;
    };
    $scope.open = function (item) {

        var modalInstance = $uibModal.open({
            templateUrl: 'myModalContent.html',
            controller: ModalInstanceCtrl,
            resolve: {
                item: function () {
                    return item;
                }
            }
        });
    }
});
var ModalInstanceCtrl = function ($scope, $uibModalInstance, item) {

    $scope.addNewItem = function() {
        //if(item.children == undefined){
        //    item.children = [];
        //}
        item.children.push({text : $scope.newItem,
                            children : []});
        $uibModalInstance.dismiss('cancel');
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
};