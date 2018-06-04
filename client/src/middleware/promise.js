export default store=> next=> async action =>{
    if(!action.payload || !action.payload.then){
        return next(action);
    }


    const res = await action.payload
        const newAction={
            ...action, 
            payload: res
        };

        store.dispatch(newAction);
   
}



// export default store=> next=> action =>{
//     if(!action.payload || !action.payload.then){
//         return next(action);
//     }


//     action.payload.then((res)=>{
//         const newAction={
//             ...action, 
//             payload: res
//         };

//         store.dispatch(newAction);
//     });
//     // return action.payload; use this when code is executed without async await
// }