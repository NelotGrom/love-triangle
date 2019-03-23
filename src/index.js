
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0; 
  for (var i = 0; i <= preferences.length; i++) {
    if ((preferences[preferences[preferences[i] - 1] - 1] - 1 == i) && (i + 1 !== preferences[i])) {
      count += 1; 
    } 
  };
  return count / 3;
}; 