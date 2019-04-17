
let stateinitial=[ 
    {
    name: 'insaf',
    email:'insaf@gmail.com',
    password: '234242',
    location: 'teboulba'
},
{
    name: 'hichem',
    email:'hichem@gmail.com',
    password: '234242',
    location: 'teboulba'
}
]

const reducerusers=(state=stateinitial,action)=>{
    switch(action.type)
{
case 'ADD_USER' :
return (
    state.concat(action.newuser)
)
case 'DETAIL_USER':
return (
    state.map(el=>el._id===action.edituser._id? el=action.edituser:el)
)
case 'UPDATE_USER':
      return(
          state=action.users
      )

default :
return state
}
}
export default reducerusers;