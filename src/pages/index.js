import { Welcome } from "@/Components/Login"
import { LoginCard } from "@/Components/Login"
import Navbar from "@/Components/Navbar"
export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-base-100 to-white via-primary h-screen">
        <center>
          <br></br>
          <Navbar />
        </center>
        <br></br><br></br>
        <br></br>
        <center>
          <Welcome />
          <br></br><br></br>
          <LoginCard />
        </center>
      </div>
    </>
  )
}
