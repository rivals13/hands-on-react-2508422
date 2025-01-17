const App= ()=> {
  const fucnt=()=>{
    let  i= 32
console.log(i)
  }
  //  anonymous  fucntion 
  // arrow  function 
  //mapping the array
  
  return (
    <>
    <article className="text" style={{
      padding:"2px"
    }}>
     <h1>Meet the <i style={{
      color:"steelblue",fontFamily:"verdana"
     }}>Heroes</i></h1>
      <p style={{color:"red"}}>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
  <button className="outline"  onClick={()=>{
    return(
  <h1> hello world!!</h1>
)
  }}> click here!! </button>
   </article>
   
    
    </>
     
  )
}
export default App
