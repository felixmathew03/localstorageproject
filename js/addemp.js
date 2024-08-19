function addemp(){
    a={}
    a.empid=document.getElementById("empid").value;
    a.name=document.getElementById("name").value;
    a.designation=document.getElementById("designation").value;
    a.salary=document.getElementById("salary").value;
    a.experience=document.getElementById("experience").value;
    localStorage.setItem(a.empid,JSON.stringify(a));
    
}