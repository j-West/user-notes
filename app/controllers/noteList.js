app.controller("NoteListCtrl", function($scope, httpFactory) {
  console.log("NoteListCtrl")



  httpFactory.getNotes().then(function(data) {
    console.log(data.data)
    $scope.notes = data.data;
  })

});






//Object.keys(data).forEach(function (id, i) {
//
//
//  keyToMove = _.findKey(dbSnapshot, ["Title", titleTarget]);
