import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,

    TableContainer,
    Td,
    Button,
  } from '@chakra-ui/react';
  import {
    Modal,
    useDisclosure,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchEmployee } from '../Redux/action';

export const Employee = ({onOpen}) => {
    
    const employee = useSelector((store)=> store.employeeData.employee);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(employee?.length === 0){
      dispatch(fetchEmployee())
        }
    },[dispatch,employee?.length])
    console.log(employee)
  return (
    <>
   

   
    <TableContainer>
    <Table variant='simple'>
      {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
      <Thead>
        <Tr>
        <Th isNumeric>ID</Th>
          <Th>EMPLOYE NAME</Th>
          <Th>COMPANY NAME</Th>
          <Th>CTC</Th>
          <Th>VIEW DETAILS</Th>
          <Th>DELETE</Th>
          <Th>EDIT</Th>
        </Tr>
      </Thead>
      {employee?.map((item)=>(
      <Tbody>
        <Tr>
            <Td>{item.id}</Td>
            <Td> {item.employee_name}</Td>
            <Td>{item.company_name}</Td>
            <Td>{item.salary}</Td>
            <Td  onClick={onOpen}>
            <BasicUsage employee={employee}/>
            </Td>
            <Td><Button>Delete</Button></Td>
            <Td><Button>Edit</Button></Td>
          {/* <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td isNumeric>25.4</Td> */}
        </Tr>
        <Tr>
           
          {/* <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td isNumeric>30.48</Td> */}
        </Tr>
        <Tr>
          {/* <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td isNumeric>0.91444</Td> */}
        </Tr>
      </Tbody>
         ))}
      <Tfoot>
        <Tr>
          {/* <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th> */}
        </Tr>
      </Tfoot>
    </Table>
  </TableContainer>

  </>
  )
}
const Sample =()=>{
    <TableContainer>
    <Table variant='simple'>
      {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
      <Thead>
        <Tr>
        <Th isNumeric>ID</Th>
          <Th>EMPLOYE NAME</Th>
          <Th>COMPANY NAME</Th>
          <Th>CTC</Th>
          <Th><Button>VIEW DETAILS</Button></Th>
          <Th>DELETE</Th>
          <Th>EDIT</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          {/* <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td isNumeric>25.4</Td> */}
        </Tr>
        <Tr>
          {/* <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td isNumeric>30.48</Td> */}
        </Tr>
        <Tr>
          {/* <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td isNumeric>0.91444</Td> */}
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          {/* <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th> */}
        </Tr>
      </Tfoot>
    </Table>
  </TableContainer>
}
function BasicUsage({employee}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>VIEW DETAILS</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }