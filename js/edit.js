let value;
function edit(){
    const urlParams=new URLSearchParams(window.location.search);
    id=urlParams.get("id");
    value=JSON.parse(localStorage.getItem(id));
    document.getElementById("body").innerHTML=`<table>
                <h2 align="center" style="padding-bottom: 3%;">Edit details</h2>
                <tr>
                    <td><label for="name" >Name</label></td>
                    <td><input type="text"  id="name" value="${value.name}"></td>
                </tr>
                <tr>
                    <td><label for="designation" >Designation</label></td>
                    <td><input type="text" id="designation" value="${value.designation}"></td>
                </tr>
                <tr>
                    <td><label for="salary" >Salary</label></td>
                    <td><input type="text"  id="salary" value="${value.salary}"> </td>
                </tr>
                <tr>
                    <td><label for="experience">Experience</label></td>
                    <td><input type="text" id="experience" value="${value.experience}"> </td>
                </tr>
                <tr>
                    <td colspan="2" align="center"><button  onclick="editData()">Confirm</button></td>
                </tr>
            </table>`;  
}
edit();
function editData(){
    a={};
    a.empid=value.empid;
    a.name= document.getElementById("name").value;
    a.designation=document.getElementById("designation").value;
    a.salary= document.getElementById("salary").value;    
    a.experience= document.getElementById("experience").value;  
    localStorage.setItem(value.empid, JSON.stringify(a));
    window.location.href="../index.html";
}