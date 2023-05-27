import Heading from "@/Components/Heading"
import LoginCard from "@/Components/Login"
import Navbar from "@/Components/Navbar"
export default function Home() {
  return (
    <>
      <div className=" bg-gradient-to-t from-base-100 to-white via-primary h-screen">
        <center>
          <br></br>
          <Navbar />
        </center>
        <br></br><br></br>
        <br></br>
        <center>
          <Heading />
          <br></br><br></br>
          <LoginCard />
        </center>
      </div>
    </>
  )
}
