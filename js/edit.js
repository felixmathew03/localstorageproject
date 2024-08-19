let value
function edit(){
    const urlParams=new URLSearchParams(window.location.search);
    id=urlParams.get("id");
    console.log(id);
    for(i=0;i<localStorage.length;i++){
        const key=localStorage.key(i);
        if(id==key){
            value=JSON.parse(localStorage.getItem(key));
            console.log(value.experience);
            str=`<div class="row mb-3 justify-content-center">
              <label for="name" class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-8 ">
                <input type="text" class="form-control" id="name" placeholder="${value.name}">
              </div>
            </div>
            <div class="row mb-3 justify-content-center">
                <label for="designation" class="col-sm-2 col-form-label">Designation</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="designation" placeholder="${value.designation}">
                </div>
            </div>
            <div class="row mb-3 justify-content-center">
                <label for="salary" class="col-sm-2 col-form-label">Salary</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="salary" placeholder="${value.salary}">
                </div>
            </div>
            <div class="row mb-3 justify-content-center">
                <label for="experience" class="col-sm-2 col-form-label">Experience</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="experience" placeholder="${value.experience}">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 d-flex justify-content-center">
                    <button class="btn btn-outline-success btn-lg" type="button" onclick="validateForm()">Button</button>
                </div>
            </div>`
        }
    }
    document.getElementById("form").innerHTML=str;  
}
edit();
function validateForm(){
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
    localStorage.removeItem(value.empid);
    localStorage.setItem(value.empid, JSON.stringify(a));
    window.location.href="../index.html";
}