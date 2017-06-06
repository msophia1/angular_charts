var myApp = angular.module("myApp", []);
myApp.controller("mainController", function($scope) {
    
    var numbers = [];
    var labels=[];
    /*
        function update
        
    */
    $scope.update = function(){
        var txtCoordinates;
        if($scope.coordinates){
            var array = $scope.coordinates.split(',');
            //Labels array to stored to maintain the X-asis of the graph which is currenlt a blank array.
            labels = Array(array.length).fill('');
            $scope.draw(array)
        }
        else{
            window.alert(" Please provide the input coordinates");
        }
    }
    /*
        Function to draw the chart.
    */
    $scope.draw = function(data){
        var canvas = document.getElementById('my_Canvas').getContext('2d');
        var myChart = new Chart(canvas, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Assessment',
                    data: data,
                    backgroundColor: "rgba(10,2,25,0.4)"
                }]
            }
        });   
    }
});