import React from 'react'
import Header from "../others/Header"
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'
const EmpDash = () => {
  return (
    <div className='px-10 py-10 bg-[#1C1C1C] h-screen'>
      <Header/>
      <TaskListNumber/>
      <TaskList/>
    </div>
  )
}

export default EmpDash
