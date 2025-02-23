const arr=[1,2,3,[1,2,[1,2],{}],{}]

const store=[]

function flaten(arr,store){
    
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
              flaten(arr[i],store)
         
        }else{
             store.push(arr[i])
        }
    }
    return store
}


console.log(flaten(arr,store))