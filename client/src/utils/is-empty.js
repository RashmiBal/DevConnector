const isEmpty = value => 
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);
  
export default isEmpty;
// function isEmpty(value){...<above code>... } was old way. Now converted to new ES6 way below:
