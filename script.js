'use strict';

let isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};