import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll'>  

      <h2 className='font-black text-center text-3xl'>ListadoPacientes</h2>
      <p className='twxt-xl mt-5 mb-10 text-center'> 
        Administra tus
        <span className='text-indigo-600 font-bold'> pacientes y Citas</span>
      </p>

    <Paciente/>
    <Paciente/>
    <Paciente/>
    <Paciente/>
    <Paciente/>
      
    </div>
  )
}

export default ListadoPacientes