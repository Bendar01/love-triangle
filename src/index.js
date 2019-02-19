/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    var counter=0;
    for(var i=0;i < preferences.length;i++){

        var one = preferences[i];
        var two = preferences [one-1];
        var three = preferences[two-1];
            if(three ==i+1){
            counter=counter+1;
        }
    }
    return Math.floor(counter/3);
    //Метод Math.floor() возвращает наибольшее целое число, которое
    // меньше или равно данному числу.
};
