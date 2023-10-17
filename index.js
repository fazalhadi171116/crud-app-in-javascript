let localData =  localStorage.getItem("studentData")? JSON.parse(localStorage.getItem('studentData')):[];

// Create Data
function createData(){
  let fullName =   document.querySelector('#fullName').value
  let email =   document.querySelector('#email').value
  let phoneNumber =   document.querySelector('#phoneNumber').value
  let address =   document.querySelector('#address').value;
  if(fullName==''){
    alert('Full Name is Required')
    return false
  }
  if(email==''){
    alert('Email is Required')
    return false
  }
  if(phoneNumber==''){
    alert('Number is Required')
    return false
  }
  if(address==''){
    alert('Address is Required')
    return false
  }
  let obj = {fullName:fullName,email:email,phoneNumber:phoneNumber,address:address}
    localData.push(obj);
     localStorage.setItem("studentData",JSON.stringify(localData));
     console.log(localData)
   window.location = 'showData.html'
 
}


// Display Data
function displatData(){
    let showDataInTable = document.querySelector("#showData-in-Table")
   let element = "";
   localData.forEach((record,index)=>{
    element +=`<tr>
    <td>${record.fullName}</td>
    <td>${record.email}</td>
    <td>${record.phoneNumber}</td>
    <td>${record.address}</td>
    <td><button class='showdata-btn' onclick='editData(${index})'>Edit</button> <button onclick='deleteData(${index})' class='showdata-btn1'>Delate</button></td>
    </tr>`
   })
   showDataInTable.innerHTML = element;
}

//Delete Data
function deleteData(id)
{
  let confm =  confirm("Are Yor Sure You Want To Delete This Item")
  if(confm==true){
    localData.splice(id,1)
    localStorage.setItem("studentData",JSON.stringify(localData));
    displatData();
  }
    
}


//get id with url
 function editData(id){
   
   const targetURL = `update.html?id=${encodeURIComponent(id)}`;
            window.location.href = targetURL;
}


let fullName =   document.querySelector('#fullName');
let email =   document.querySelector('#email');
let phoneNumber =   document.querySelector('#phoneNumber');
let address =   document.querySelector('#address');
let singleId = ''


function updateData(){
   
// let singleId = ''
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    const id = getQueryParam("id");
    singleId = id;
    let singleData = localData.find((el,index)=> index==id)
  fullName.value = singleData.fullName
  email.value = singleData.email
  phoneNumber.value = singleData.phoneNumber
  address.value = singleData.address

}
updateData()

function  submitUpdateData(){
    let fullName =   document.querySelector('#fullName').value;
let email =   document.querySelector('#email').value;
let phoneNumber =   document.querySelector('#phoneNumber').value;
let address =   document.querySelector('#address').value;
if(fullName==''){
    alert('Full Name is Required')
    return false
  }
  if(email==''){
    alert('Email is Required')
    return false
  }
  if(phoneNumber==''){
    alert('Number is Required')
    return false
  }
  if(address==''){
    alert('Address is Required')
    return false
  }
let index = localData.findIndex((el,index)=>index==singleId)
console.log(index)
localData[index] = {fullName,email,phoneNumber,address,}
localStorage.setItem("studentData",JSON.stringify(localData));
//displatData();
window.location = 'showData.html'
 
}


function homePage(){
    window.location = 'index.html'
}
