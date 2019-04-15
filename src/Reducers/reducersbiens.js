
let stateinitial=[ 
    {
    title: 'vélo',
    description:'meilleur Vélo',
    date: '23/02/2019',
    location: 'tunisia',
    imageUrl: "images/uploads/1555072448028-dcn4e38-44bbf8a1-1592-4014-b4de-c04f663c1c74.png"
},
{
    title: 'voiture',
    description:"Peugeot 206",
    date: '23/12/2019',
    location: 'sousse',
    imageUrl: "images/uploads/1555072448028-dcn4e38-44bbf8a1-1592-4014-b4de-c04f663c1c74.png"
}
]

const reducersbiens=(state=stateinitial,action)=>{
    switch(action.type)
{
case 'ADD_BIEN' :
return (
    state.concat(action.newbien)
)

default :
return state
}
}
export default reducersbiens;