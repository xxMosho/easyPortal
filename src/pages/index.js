import { Welcome } from "@/Components/Login"
import { LoginCard } from "@/Components/Login"
import Navbar from "@/Components/Navbar"
export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-tr from-base-100 to-primary h-screen">
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
