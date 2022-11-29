import AppForm from "./components/AppForm"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  return (
    <div className="container mx-auto mt-20">
    <Header />
    <div className="mt-12 md:flex">

    <AppForm />
    <ListadoPacientes />
    </div>
    </div>
  )
}

export default App
