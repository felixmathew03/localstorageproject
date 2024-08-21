function fetchData(){
    if(localStorage.length==0){
        document.getElementById("table").innerHTML="<h2>No employees added..</h2><a  href='./html/add.html'>Add employees</a>";
    }
    else{
        str=``;
        for(i=0;i<localStorage.length;i++){
            const key=localStorage.key(i);
            const value=JSON.parse(localStorage.getItem(key));
            str+=`<tr>
                <th scope="row">${value.empid}</th>
                <td>${value.name}</td>
                <td>${value.designation}</td>
                <td>${value.salary}</td>
                <td>${value.experience}</td>
                <td><a href="./html/edit.html?id=${value.empid}"><button class="btn btn-outline-success me-4" ><img src="./img/edit_16dp_000000_FILL0_wght400_GRAD0_opsz20.png" alt=""></button></a>
                <button class="btn btn-outline-danger me-4" onclick="deleteemp('${value.empid}')" > <img src="./img/delete_16dp_000000_FILL0_wght400_GRAD0_opsz20.png" alt=""></button></td>
              </tr>`
        }
        document.getElementById("tbody").innerHTML=str;
    }
}
fetchData();

function deleteemp(e){
    console.log(e);
    
    if (confirm("Are you sure to delete this employee details")) {
        localStorage.removeItem(e);
        fetchData();
      } else {
        alert("You cancelled!!")
      }
}

document.getElementById("filter").addEventListener('keyup',(e)=>{
   
        str=``;
        for(i=0;i<localStorage.length;i++){
            const key=localStorage.key(i);
            const value=JSON.parse(localStorage.getItem(key));
            
            if(value.name.toLowerCase().includes(e.target.value.toLowerCase())){
                str+=`<tr>
                <th scope="row">${value.empid}</th>
                <td>${value.name}</td>
                <td>${value.designation}</td>
                <td>${value.salary}</td>
                <td>${value.experience}</td>
                <td><a href="./html/edit.html?id=${value.empid}"><button class="btn btn-outline-success me-4">Edit</button></a>
                <button class="btn btn-outline-danger me-4" onclick="deleteemp('${value.empid}')">Delete</button></td>
              </tr>`  
            }
            
            document.getElementById("tbody").innerHTML=str;
        }
        
})