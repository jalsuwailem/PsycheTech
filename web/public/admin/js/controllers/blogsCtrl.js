app.controller('blogsCtrl', function($scope, $http) {

  var url = '/getArticles?categorie=blog';
  $scope.articles = [];

  $http.get(url)
    .then(function(result) {
      if (result.data.status) {
        $scope.articles = result.data.articles;
      }
    }, function(err) {

    })

});
