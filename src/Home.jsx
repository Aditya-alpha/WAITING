import logo from "./assets/logo.png"
import bear from "./assets/bear.png"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 px-16 py-6 text-gray-900">
      <nav>
        <div>
          <img src={logo} alt="Logo" className="h-12 w-28" />
        </div>
      </nav>
      <div className="flex flex-col items-center gap-20 m-auto" >
        <div className="flex items-center gap-6" >
          <h1 className="text-5xl mb-4">Fuck paperhands</h1>
          <img src={bear} alt="Bear" className="w-44 h-40" />
        </div>
        <p className="text-5xl">CA : XXXXXXXXXXXXXXXXXXXXXX</p>
      </div>
    </div>
  )
}