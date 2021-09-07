const info=[
    {
        name: 'Nguyen Van A',
        age: 20
    },
    {
        name: 'Nguyen Van B',
        age: 21
    },
    {
        name: 'Nguyen Van C',
        age: 22
    },
    {
        name: 'Nguyen Van D',
        age: 23
    }
]

const displayinfo = (info) =>{
    info.map((val,index,arr)=>{
        console.log(val)
        console.log(index)
        // console.log(val)
    },0)
}

const func = async (info) =>{
    // let res = await displayinfo(info);
    // console.log(res)
    // console.log("done")
    return new Promise((resolve,_)=>{
        resolve(info);
    })
} 

// console.log( (JSON.stringify(func(info))))

 cusFUnc = async () =>{
     let w = await func(info)
     console.log(w)
 }

 cusFUnc()


