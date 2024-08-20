function addemp(){
    a={}
    a.empid=document.getElementById("empid").value;
    a.name=document.getElementById("name").value;
    a.designation=document.getElementById("designation").value;
    a.salary=document.getElementById("salary").value;
    a.experience=document.getElementById("experience").value;
    e=localStorage.getItem(a.empid);
    if(e==""){
        localStorage.setItem(a.empid,JSON.stringify(a));
        window.location.href="../index.html";
    }
    else{
        alert("Same EMPID exists...Plaese enter once again!!")
    }
}