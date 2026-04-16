import logo from "./assets/logo.png"
import bear from "./assets/bear.png"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 sm:px-16 p-4 sm:py-6 text-gray-900">
      <nav>
        <div>
          <img src={logo} alt="Logo" className="sm:h-12 sm:w-28 h-8 w-18" />
        </div>
      </nav>
      <div className="flex flex-col items-center gap-20 m-auto" >
        <div className="flex items-center gap-6" >
          <h1 className="sm:text-5xl text-4xl mb-4">Fuck paperhands</h1>
          <img src={bear} alt="Bear" className="sm:w-44 sm:h-40 w-28 h-26" />
        </div>
        <p className="sm:text-5xl text-3xl">CA : XXXXXXXXXXXXXXXXXXXXXX</p>
      </div>
    </div>
  )
}