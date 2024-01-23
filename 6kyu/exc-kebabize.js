// Kebabize
// Modify the kebabize function so that it converts a camel case string into a kebab case.
// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:
// the returned string should only contain lowercase letters


//My solution
function kebabize(str){
    // ' $&' means put space first and then 
    str = str.replace(/\d/g, '').replace(/([A-Z])/g, ' $&')

    if(str[0]===' ') str = str.slice(1)
    return str.split(' ').map( letter => letter.toLowerCase()).join('-')
}