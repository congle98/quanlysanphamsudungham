let arr=[];
function add() {
    arr.push(document.getElementById("addpro").value) ;
    show();
    document.getElementById("addpro").value="";


}
function enter(val) {
    switch (val.keyCode){
        case 13:
            add();
            break;
    }
}
function edit(val) {
    let edit =prompt("Sửa lại tên sản phẩm");
    arr[val]=edit;
    show();
}
function dell(val) {
    arr.splice(val,1);
    show();
}
function show() {
    let table="<table  id='table1'><tr> <th style='text-align: left'>Product Name</th>\n" +
        "            <th colspan='2' style='color: red;text-align: right'>"+arr.length+" product</th></tr>"
    for (let i=0;i<arr.length;i++){
        table+="<tr><td>"+arr[i]+"</td><td><input class='bt' type='button' value='Edit'onclick='edit("+i+")'>" +
            "</td><td><input class='bt' type='button' value='Delete' onclick='dell("+i+")'></td></tr>"
    }
    table+="</table>";
    document.getElementById("show").innerHTML=table;

}
function docReady() {
    window.addEventListener('keydown', enter);
}