const arr1 = ['apple','banna',1]
const arr2=['apple',1,'banna']

function compare(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    return !arr1.some(item => {
        return arr2.indexOf(item) === -1
    })
}