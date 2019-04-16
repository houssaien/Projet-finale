
let biens=[ 
    {
    title: 'vélo',
    description:'meilleur Vélo',
    date: '23/02/2019',
    location: 'tunisia',
    imageUrl: ""
},
{
    title: 'voiture',
    description:"Peugeot 206",
    date: '23/12/2019',
    location: 'sousse',
    imageUrl: "images/uploads/1555072448028-dcn4e38-44bbf8a1-1592-4014-b4de-c04f663c1c74.png"
}
]

const reducersbiens=(state=biens,action)=>
{
  switch(action.type)
  {
      case 'ADD_BIEN' :
      return (
          state.concat(action.newbien)
      )

      case 'EDIT_BIEN':
      return (
          state.map(el=>el._id===action.editbien._id? el=action.editbien:el)
      )
      case 'DETAIL_BIEN':
      return (
          state.map(el=>el._id===action.editbien._id? el=action.editbien:el)
      )
      case 'REMOVE_BIEN':
      return (
          state.filter(el=>el._id!==action._id)
      )
      case 'UPDATE_BIEN':
      return(
          state=action.biens
      )
      default :
      return state
  }
}
export default reducersbiens