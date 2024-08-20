function addemp(){
    a={}
    a.empid=document.getElementById("empid").value;
    a.name=document.getElementById("name").value;
    a.designation=document.getElementById("designation").value;
    a.salary=document.getElementById("salary").value;
    a.experience=document.getElementById("experience").value;
    
    
    if(localStorage.getItem(a.empid)){
        alert("Same EMPID exists...Plaese enter once again!!");
    }
    else{
        localStorage.setItem(a.empid,JSON.stringify(a));
        window.location.href="../index.html";
    }
}