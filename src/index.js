module.exports = function check(str, bracketsConfig) {
    'use strict';
    let accum = [];
    let flat_config = bracketsConfig.flat();
    for (var i = 0; i < str.length; i++) {
        let current = str.charAt(i);
        let indices = getAllIndexes(flat_config, current);

        if (indices.length == 1){
            let index = indices[0];
            let remainder = (index+1) % 2;
            if (remainder == 1)
                accum.push(current);
            else
                if (accum[accum.length-1] == flat_config[index-1])
                    accum.pop()
                else
                    return false;
        }
        if (indices.length == 2)
        {
            let index = indices[0];
            if (accum[accum.length-1] == current)
                accum.pop()
            else
                accum.push(current)

        }
    }




    return accum.length == 0
};
function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}
