// golbal vars
var productName = document.getElementById("productname");
var productCategory = document.getElementById("productcategory");
var productPrice = document.getElementById("productprice");
var productDescription = document.getElementById("productdescription");
var tbody = document.getElementById("tbody");
var allProducts = JSON.parse(localStorage.getItem("productData"));
var searchElement = document.getElementById("searchInput");
var updatebutton = document.getElementById("addbtn");




if (localStorage.getItem("productData") !== null) { 
    var allProducts = JSON.parse(localStorage.getItem("productData"));

}
else {
    var allProducts=[]
}
  // creation
display();
    function createProduct() {
      var product = {
        pname: productName.value,
        pprice: productPrice.value,
        pdescription: productDescription.value,
        pcategory: productCategory.value,
      };
      allProducts.push(product);

      console.log(product);
      console.log(allProducts);
      clr();
      retrive();
      var StringData = JSON.stringify(allProducts);
      localStorage.setItem("productData", StringData);
    }
// clear
function clr() {
    productName.value = "";
    productPrice.value = "";
    productDescription.value = "";
    productCategory.value = "";
    
}
// retrive
    var tr = "";

function retrive() {
    var lastindex = allProducts.length-1;
    // for (var i=0; i < allProducts.length; i++){
        tr += `<tr>
        <td>${lastindex}</td>
        <td>${allProducts[lastindex].pname}</td>
        <td>${allProducts[lastindex].pcategory}</td>
        <td>${allProducts[lastindex].pprice}</td>
        <td>${allProducts[lastindex].pdescription}</td>
        <td>
            <button class="btn btn-warning"><i class="fa-solid fa-pen"></i></button>
        </td>
        <td> <button class="btn btn-danger" ><i class="fa-solid fa-trash"></i></button></td>
    </tr>`;
    
    tbody.innerHTML=tr
}
function display() {
    for (var i = 0; i < allProducts.length; i++) {
        tr += `<tr>
        <td>${i}</td>
        <td>${allProducts[i].pname}</td>
        <td>${allProducts[i].pcategory}</td>
        <td>${allProducts[i].pprice}</td>
        <td>${allProducts[i].pdescription}</td>
        <td>
            <button class="btn btn-warning" onclick="updateprouct(${i})"><i class="fa-solid fa-pen"></i></button>
        </td>
        <td> <button class="btn btn-danger" onclick="deleterow(${i})"><i class="fa-solid fa-trash"></i></button></td>
    </tr>`;
    
        tbody.innerHTML = tr
    }
}
function search() {
    var tr = ""
    var searchword = searchElement.value
    for (var i = 0; i < allProducts.length; i++){
        if (allProducts[i].pname.toLowerCase().includes(searchword.toLowerCase())) {
          tr += `<tr>
        <td>${i}</td>
        <td>${allProducts[i].pname}</td>
        <td>${allProducts[i].pcategory}</td>
        <td>${allProducts[i].pprice}</td>
        <td>${allProducts[i].pdescription}</td>
        <td>
            <button class="btn btn-warning"><i class="fa-solid fa-pen"></i></button>
        </td>
        <td> <button class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
    </tr>`;
      }
    }
    tbody.innerHTML=tr

}
function deleterow(i) {

    allProducts.splice(i, 1);
    display()
    localStorage.setItem("productData",JSON.stringify(allProducts));
}
function updateprouct(i) {
    productName.value = allProducts[i].pname;
    productPrice.value = allProducts[i].pprice;
    productCategory.value = allProducts[i].pcategory;
    productDescription.value = allProducts[i].pdescription;
    updatebutton.innerHTML = "Update product"
    var index= i
    
}
