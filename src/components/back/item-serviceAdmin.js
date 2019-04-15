import React,{Component} from 'react'
import { Table,Th,Thead, Tbody, Tr, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'



import './formuser.css'

class ItemServices extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
    const {item}=this.props

  return (
<div>
<Table>

      <Thead>
          <Tr>
              <Th>#</Th>
              <Th>Name</Th>
              <Th></Th>
              <Th>President</Th>
              <Th>Location</Th>
              <Th>Conference Theme</Th>
          </Tr>
      </Thead>
  
<Tbody>
          <Tr>
              <Td>{item.title}</Td>
              <Td>{item.description}</Td>
              <Td>{item.date}</Td>
              <Td>{item.location}</Td>
             
          </Tr>
        
      </Tbody>
  </Table> 
    </div>
  );
}
}
export default  ItemServices;