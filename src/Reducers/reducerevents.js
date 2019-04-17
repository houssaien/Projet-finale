let events=[ 
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

const reducerevents=(state=events,action)=>{
    switch(action.type)
{
case 'ADD_EVENT' :
return (
    state.concat(action.newevent)
)
case 'UPDATE_EVENT':
      return(
          state=action.events
      )
 case 'REMOVE_EVENT':
    return (
          state.filter(el=>el._id!==action._id)
        
 ) 
 case 'EDIT_EVENT':
 return (
     state.map(el=>el._id===action.editevent._id? el=action.editevent:el)
 )    
 case 'DETAIL_EVENT':
 return (
     state.map(el=>el._id===action.editevent._id? el=action.editevent:el)  
 )

default :
return state
}
}
export default reducerevents;