app.factory("httpFactory", function($http) {

  function getNotes() {
    return $http.get("https://notes-4c7e0.firebaseio.com/notes.json")
  }

  function postNote(data) {
    return $http.post("https://notes-4c7e0.firebaseio.com/notes.json", JSON.stringify(data))
  }


  return {
    getNotes,
    postNote
  }
});
