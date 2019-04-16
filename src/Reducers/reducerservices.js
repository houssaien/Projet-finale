
let services=[ 
    {
    title: 'Babisitting',
    description:' baby citting',
    date: '23/02/2019',
    location: 'tunisia',
    imageUrl: "images/uploads/1555072448028-dcn4e38-44bbf8a1-1592-4014-b4de-c04f663c1c74.png"
},
{
    title: 'jardinier',
    description:"jardin d'une villa",
    date: '23/12/2019',
    location: 'sousse',
    imageUrl: "images/uploads/1555072448028-dcn4e38-44bbf8a1-1592-4014-b4de-c04f663c1c74.png"}
]

const reducerservices=(state=services,action)=>{
    switch(action.type)
{
case 'ADD_SERVICE' :
return (
    state.concat(action.newservice)
)
case 'UPDATE_SERVICE':
      return(
          state=action.services
      )
 case 'REMOVE_SERVICE':
    return (
          state.filter(el=>el._id!==action._id)
 )     

default :
return state
}
}
export default reducerservices;