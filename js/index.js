var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var urlContainer =[]


//add url

function addElement(){
    var site = {
        Name : siteName.value,
        Url : siteUrl.value
    }
    urlContainer.push(site);
    console.log(urlContainer);
    clearForm();
    displayUrls();
}

//clear inputs
function clearForm(){
    siteName.value = "";
    siteUrl.value = "";
}
//display container
function displayUrls(){
    var eleContainer = ``;
    for(var i = 0; i < urlContainer.length; i++){
        eleContainer += `
        <div class="col-2 mt-3">
        <h5>${i} </h3>
    </div>
    <div class="col-4 mt-3">
        <h5>${urlContainer[i].Name}</h3>
    </div>
    <div class="col-3 mt-3">
    <a href="${siteUrl}" target="_blank" ><button class="bg-outline-info px-4 rounded">visit</button></a>
    </div>
    <div class="col-3 mt-3">
    <button class="bg-danger px-4 rounded" onclick="deleteUrl(${i})">Delete</button>
    </div>
    `;
    document.getElementById('eleContainer').innerHTML = eleContainer;

}
}
//delete element
function deleteUrl(deletedIndex){
    urlContainer.splice(deletedIndex, 1);
    if (urlContainer == 0){
        document.getElementById('eleContainer').innerHTML = ``;
    }
    displayUrls();
}