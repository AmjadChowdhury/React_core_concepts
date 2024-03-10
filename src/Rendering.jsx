// 6 ways to rendering....

// export default function Rendering({task,isGood}){
//     return (
//         <div>
//             <h3>{task} : {isGood ? 'Complete' : 'Due'}</h3>
//         </div>
//     )
// }

// export default function Rendering({task,isGood}){
//     if(isGood){
//         return <h3>{task} : Done</h3>
//     }
//     else{
//         return <h3>{task} : Due</h3>
//     }
// }

// export default function Rendering({task,isGood}){
//     if(isGood){
//         return <h3>{task} : Done</h3>
//     }
//     return <h3>{task} : Due</h3>   
// }


// export default function Rendering({task,isGood}){
//     return <h3>{task} : {isGood && 'Complete'} </h3>   
// }


// export default function Rendering({task,isGood}){
//     return <h3>{task} : {isGood || 'Work on'} </h3>   
// }


export default function Rendering({task,isGood}){
    let listItem;
    if(isGood){
        listItem = <h3>{task} : Done</h3>
    }
    else{
        listItem = <h3>{task} : Due</h3>
    }
    return listItem
}