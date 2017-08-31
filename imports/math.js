export default add = function (a, b) {
    if (typeof(a)=== 'number' && typeof(b)==='number'){
        return a + b;
    } else {
        return 'Invalid parameters'
    }
    
};