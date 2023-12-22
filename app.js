let btn=document.querySelector("button");
let p=document.querySelector('#result')
btn.addEventListener("click",async ()=>
{
  let fact=await getFact();
  p.innerText=fact
})

let url="https://catfact.ninja/fact";
async function getFact(){
try{
let res=await axios.get(url);
return res.data.fact;
}
catch (e){
return "No fact found"
}
}