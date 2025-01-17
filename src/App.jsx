function App() {
  const fucnt=()=>{
    let  i= 32
console.log(i)
  }
  //  anonymous  fucntion 
  // arrow  function 
  //mapping the array
  
  return (
    <hgroup>
      <h1>Meet the StarGazers</h1>
      <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
   
   <button onClick={()=>{
return(
  <h1> hello  world!!! </h1>
)
   }}></button>
    </hgroup>
     
  )
}
export default App
