import React from 'react'

const AppForm = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
     <h2 className="font-black text-3xl text-center">
      Seguimiento Pacientes
      </h2>

     <p className='text-lg mt-5 text-center mb-10'>
      Añade pacientes y {""}
      <samp className='text-indigo-600 font-bold'>Administralos</samp>
      </p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>

      <div className='mb-5'>
        <label htmlFor='mascota' className=' block text-gray-700 uppercase font-bold '>Nombre Mascota</label>
        <input
          id='mascota'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          type="text" 
          placeholder='Nombre de la mascota'
         />
      </div>

      <div className='mb-5'>
        <label htmlFor='Propietario' className=' block text-gray-700 uppercase font-bold '>Nombre Propietario</label>
        <input
          id='Propietario'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          type="text" 
          placeholder='Nombre dle Propietario'
         />
      </div>

      <div className='mb-5'>
        <label htmlFor='email' className=' block text-gray-700 uppercase font-bold '>Email</label>
        <input
          id='email'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          type="email" 
          placeholder='Nombre de la mascota'
         />
      </div>

      <div className='mb-5'>
        <label htmlFor='alta' className=' block text-gray-700 uppercase font-bold '>Alta</label>
        <input
          id='alta'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          type="date" 
          placeholder='Nombre dle Propietario'
         />
      </div>

      <div className='mb-5'>
        <label htmlFor='sintomas' className=' block text-gray-700 uppercase font-bold '>Sintomas</label>
        <textarea 
         id="sintomas"  
         className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md '
         placeholder='Describe los sintomas'
         />
      </div>

      <input 
      type="submit" 
      className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
      value="Agregar Paciente"
      />

    </form>
    </div>
  )
}

export default AppForm