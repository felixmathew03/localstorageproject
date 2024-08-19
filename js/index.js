function fetchData(){
    if(localStorage.length==0){
        document.getElementById("table").innerHTML="<h2>Cart empty..</h2><a href='../index.html'>Go to products</a>";
    }
}
fetchData();