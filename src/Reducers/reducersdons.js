
let dons=[ 
    {
    title: 'vélo',
    description:'meilleur Vélo',
    date: '23/02/2019',
    location: 'tunisia',
    imageUrl: ""
},
{
    title: 'table',
    description:"table de cuisine",
    date: '23/12/2019',
    location: 'sousse',
    imageUrl: "images/uploads/1555072448028-dcn4e38-44bbf8a1-1592-4014-b4de-c04f663c1c74.png"
}
]

const reducersdons=(state=dons,action)=>
{
  switch(action.type)
  {
      case 'ADD_DON' :
      return (
          state.concat(action.newdon)
      )
      case 'SEARCH_Don' : 
      return (
        action.dons.filter(el => el.title.toLowerCase().indexOf(action.keyword)>-1)
)
      case 'EDIT_DON':
      return (
          state.map(el=>el._id===action.editdon._id? el=action.editdon:el)
      )
      case 'DETAIL_DON':
      return (
          state.map(el=>el._id===action.editdon._id? el=action.editdon:el)
      )
      case 'REMOVE_DON':
      return (
          state.filter(el=>el._id!==action._id)
      )
      case 'UPDATE_DON':
      return(
          state=action.dons
      )
      default :
      return state
  }
}
export default  reducersdons