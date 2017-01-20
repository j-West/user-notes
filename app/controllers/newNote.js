app.controller("NewNoteCtrl", function($scope, httpFactory) {
  console.log("NewNoteCtrl")


  $scope.createNote = function(newNote) {
    var data = {"Note" : newNote}
    httpFactory.postNote(data).then(function (response) {
      console.log(response)
    })
  }

})