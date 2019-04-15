
let stateinitial=[ 
    {
    title: 'Babi citting',
    description:' baby citting',
    date: '23/02/2019',
    location: 'tunisia'
},
{
    title: 'jardinier',
    description:"jardin d'une villa",
    date: '23/12/2019',
    location: 'sousse'
}
]

const reducerservices=(state=stateinitial,action)=>{
    switch(action.type)
{
case 'ADD_SERVICE' :
return (
    state.concat(action.newservice)
)

default :
return state
}
}
export default reducerservices;