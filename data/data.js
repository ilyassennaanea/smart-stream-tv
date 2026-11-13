export async function getData() {
   try{
    const respense = await fetch('https://6af42fce55a1de7dcf03ae98.mockapi.io/smartStream/channels')
   if(!respense.ok){
   if(respense.status==404){
    console.log('ressource introuvable')
    throw Error (`Error is :${respense.status}`)
   }
   if(respense.status==500){
    console.log('erreur serveur')
    throw Error(`Error is : ${respense.status}`)
   }
   }
   if(respense.ok){
    console.log("success")
  }
   const data = await respense.json();
   localStorage.setItem("channels",JSON.stringify(data));
   return data ;
   }catch(error){
   console.error(error)

   }
    
}