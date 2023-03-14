let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let catagory = document.getElementById('catagory');
let submit = document.getElementById('submit');
let search = document.getElementById('search');
let mood = 'create';
let tmp ;
let searchmood='title';
// get total 
function gettotal() {
    if (price.value != '') {
        total.innerHTML = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.style.backgroundColor = '#040';
    } else {
        total.innerHTML = '';
        total.style.backgroundColor = '#ff0000'
    }
}


//creat project 
let datapro;
if (localStorage.product != null)
    datapro = JSON.parse(localStorage.product);
else
    datapro = [];

submit.onclick = function () {
    let pro = {
        title: title.value,
        price: price.value,
        ads: ads.value,
        taxes: taxes.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        catagory: catagory.value,
    }
    if (mood==='create')
    {
        if (pro.count>0)
        {
            for(let i=0; i<pro.count;i++)
            {
                datapro.push(pro);
            }
        }
        else 
        {
            datapro.push(pro);
        }
    }
    else
    {
        datapro[ tmp ]= pro;
        submit.innerHTML='create';
        count.style.display='block';
        
    }

    localStorage.setItem('product', JSON.stringify(datapro));
    cleardata();
    showdata();
    gettotal();
}


//clear data
function cleardata() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    catagory.value = '';
}

//read data
function showdata() {
    let table = '';
    for (let i = 0; i < datapro.length; i++) {
        table += `
        <tr>
            <td>${i}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].catagory}</td>
            <td><button onclick="updatedata(${i})">update</button></td>
            <td><button onclick="Delete(${i})" id="delete">delete</button></td>
        </tr>`

    }


    document.getElementById('databody').innerHTML = table;
}
showdata();





//delete one product 
function Delete(i)
{
    datapro.splice(i,1);
    localStorage.product=JSON.stringify(datapro);
    showdata();
}

//delete all 
Deleteall.onclick=function()
{
    datapro.splice(0,datapro.length);
    localStorage.product=JSON.stringify(datapro);
    showdata();
}

//update
function updatedata(i)
{
    title.value = datapro[i].title
    price.value=datapro[i].price;
    taxes.value=datapro[i].taxes;
    ads.value=datapro[i].ads;
    discount.value=datapro[i].discount;
    gettotal();
    count.style.display='none';
    catagory.value=datapro[i].catagory;
    submit.innerHTML='update';
    mood='update';   
    tmp =i;
    scroll({
        top:0,
        behavior:"smooth"
    })
}












//wrong!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1111
//search by title
function searchbytitle(value)
{   
    let table='';
    search.focus();
    for(let i =0;i<datapro.length;i++){
        if (datapro[i].title.includes(value))
        {
            table += `
        <tr>
            <td>${i}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].catagory}</td>
            <td><button onclick="updatedata(${i})">update</button></td>
            <td><button onclick="Delete(${i})" id="delete">delete</button></td>
        </tr>`
        }
    }
    document.getElementById('databody').innerHTML = table;

} 




//wrong!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//search by catagory
function searchbycatagory(value)
{   
    let table='';
    search.focus();
    for(let i =0;i<datapro.length;i++){
        if (datapro[i].title.includes(value))
        {
            table += `
        <tr>
            <td>${i}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].catagory}</td>
            <td><button onclick="updatedata(${i})">update</button></td>
            <td><button onclick="Delete(${i})" id="delete">delete</button></td>
        </tr>`
        }
    }
    document.getElementById('databody').innerHTML = table;

} 