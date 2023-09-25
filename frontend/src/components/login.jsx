export default login=()=>{

      fetch('https://graceful-tan-badger.cyclic.cloud/login')
      .then(res=>res.json)
      .then(res=>console.log(res))

    return(
        <div>
        <h1>this is login of socio masai</h1>

        <form >

            <input type="email" placeholder="email"/>
            <input type="password" placeholder="pass"/>
             <button type="submit">login</button>
        </form>
        </div>
    )
        
    
}