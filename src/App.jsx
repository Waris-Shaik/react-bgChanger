import { useEffect, useState } from "react"

const App = () => {
  const [color, setColor] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("color is", color);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);


  const showLoaderContent = (
    <div className="font-bold " style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", fontSize: "8vh" }}>
      <div className="mx-4">
        <h3>Change Background</h3>
        <p style={{ float: "right", fontSize: '3vh' }} className="font-bold" >by clicking below buttons</p>
      </div>
    </div>
  )


  return (
    <div className="w-full h-screen duration-200" style={{ background: `${color}` }}>

      {loading ? showLoaderContent : null}

      <div className="fixed flex flex-wrap justify-center bottom-12 gap-3 inset-x-0 px-2 ">


        <div className="flexx flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-8 py-2  " >


          <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg mx-1 my-1 my-1" style={{ background: 'red', cursor: loading ? "not-allowed" : null }} onClick={() => { setColor("red") }} disabled={loading}  >red</button>

          <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg mx-1 my-1" style={{ background: 'green', cursor: loading ? "not-allowed" : null }} onClick={() => setColor("green")} disabled={loading} >green</button>

          <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg mx-1 my-1" style={{ background: 'blue', cursor: loading ? "not-allowed" : null }} onClick={() => setColor("blue")} disabled={loading}>blue</button>

          <button className="outline-none px-6  py-1 rounded-full text-white shadow-lg mx-1 my-1" style={{ background: 'black', cursor: loading ? "not-allowed" : null }} onClick={() => setColor("black")} disabled={loading}>black</button>

          <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg mx-1 my-1" style={{ background: 'olive', cursor: loading ? "not-allowed" : null }} onClick={() => setColor("olive")} disabled={loading}>olive</button>


          <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg mx-1 my-1" style={{ background: 'purple', cursor: loading ? "not-allowed" : null }} onClick={() => setColor("purple")} disabled={loading}>purple</button>


          <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg mx-1 my-1" style={{ background: 'Gold', cursor: loading ? "not-allowed" : null }} onClick={() => setColor("Gold")} disabled={loading}>Gold</button>


        </div>
      </div>
    </div>
  )
}

export default App