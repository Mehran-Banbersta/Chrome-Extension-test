let myLeads = []
let  inputEl  = document.getElementById('input-el')
let  inputContent  = document.getElementById('input-content')

let btnEl = document.getElementById('btn-el')

btnEl.addEventListener('click', function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  renderLeads()
})

function renderLeads() {
   for (let i = 0; i < myLeads.length; i++){
    inputContent.innerHTML = `
     <ul>
       <li>
         <a> ${myLeads[i]} </a>
       </li>
      </ul>  
    `
   }
}