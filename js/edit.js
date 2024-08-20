let value;
function edit(){
    const urlParams=new URLSearchParams(window.location.search);
    id=urlParams.get("id");
    value=JSON.parse(localStorage.getItem(id));
    document.getElementById("body").innerHTML=`<table>
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
                    <td colspan="2" align="right"><button  onclick="editData()">Edit</button></td>
                </tr>
            </table>`;  
}
edit();
function editData(){
    a={};
    a.empid=value.empid;
    var x1 = document.getElementById("name").value;
    if (x1 == "") {
        a.name=value.name;
    }
    else{
        a.name=x1;
    }
    var x2 = document.getElementById("designation").value;
    if (x2 == "") {
        a.designation=value.designation;
    }
    else{
        a.designation=x2;
    }
    var x3 = document.getElementById("salary").value;
    if (x3 == "") {
        a.salary=value.salary;
    }
    else{
        a.salary=x3;
    }
    var x4 = document.getElementById("experience").value;
    if (x4 == "") {
        a.experience=value.experience;
    }
    else{
        a.experience=x4;  
    }
    localStorage.setItem(value.empid, JSON.stringify(a));
    window.location.href="../index.html";
}