import React from 'react'
import {useState, useEffect} from "react"

const AppForm = () => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
const [error, setError] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()

    //validacion del formulario
    if([nombre,propietario,email,fecha,sintomas].includes("")){
      setError(true)
    }else{
      console.log("todob ein");
    }
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
     <h2 className="font-black text-3xl text-center">
      Seguimiento Pacientes
      </h2>

     <p className='text-lg mt-5 text-center mb-10'>
      Añade pacientes y {""}
      <samp className='text-indigo-600 font-bold'>Administralos</samp>
      </p>

      <form 
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
      >
        {error &&(
          <div className='bg-red-800 text-white text-center p-3 uppercase font-bold rounded mb-3'> 
           <p>Todos los campos son obligatorios</p>
          </div>
        )}
      <div className='mb-5'>
        <label htmlFor='mascota' className=' block text-gray-700 uppercase font-bold '>Nombre Mascota</label>
        <input
          id='mascota'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          type="text" 
          placeholder='Nombre de la mascota'
          value={nombre}
          onChange={(e)=> setNombre(e.target.value)}
         />
      </div>

      <div className='mb-5'>
        <label htmlFor='propietario' className=' block text-gray-700 uppercase font-bold '>Nombre Propietario</label>
        <input
          id='propietario'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          type="text" 
          placeholder='Nombre dle propietario'
          value={propietario}
          onChange={(e)=> setPropietario(e.target.value)}
         />
      </div>

      <div className='mb-5'>
        <label htmlFor='email' className=' block text-gray-700 uppercase font-bold '>Email</label>
        <input
          id='email'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          type="email" 
          placeholder='Nombre de la mascota'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
         />
      </div>

      <div className='mb-5'>
        <label htmlFor='alta' className=' block text-gray-700 uppercase font-bold '>Alta</label>
        <input
          id='alta'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          type="date" 
          placeholder='Nombre dle Alta'
          value={fecha}
          onChange={(e)=> setFecha(e.target.value)}
         />
      </div>

      <div className='mb-5'>
        <label htmlFor='sintomas' className=' block text-gray-700 uppercase font-bold '>Sintomas</label>
        <textarea 
         id="sintomas"  
         className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md '
         placeholder='Describe los sintomas'
         value={sintomas}
         onChange={(e)=> setSintomas(e.target.value)}
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