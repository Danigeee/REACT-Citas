import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes,setPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      {pacientes == [] ? (
        <h2 className="font-black text-center text-3xl">
          Agrega un nuevo paciente
        </h2>
      ) : (
        <h2 className="font-black text-center text-3xl">ListadoPacientes</h2>
      )}

      <p className="twxt-xl mt-5 mb-10 text-center">
        Administra tus
        <span className="text-indigo-600 font-bold"> pacientes y Citas</span>
      </p>
      {pacientes.map((paciente) => (
        <Paciente 
        key={paciente.id} 
        paciente={paciente} 
        setPaciente={setPaciente}
        />
      ))}
    </div>
  );
};

export default ListadoPacientes;
