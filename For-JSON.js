let URL = "https://restcountries.com/v3.1/all";


function getresponsevalue(){
    let obj = JSON.parse(this.response);
    //console.log(obj)

    console.log(obj);
    for(let i = 0; i< obj.length;i++)
        {
            console.log(obj[i]);
            console.log(obj[i].name.common);
            console.log(obj[i].region);
            console.log(obj[i].subregion);
        }
    for(let arr in obj)
        {
            console.log(obj[arr]);
            console.log(obj[arr].name.common);
            console.log(obj[arr].region);
            console.log(obj[arr].subregion);
        }
    for(let arr of obj)
        {
            console.log("Name = " + arr.name.common);
            console.log("Region = " + arr.region);
            console.log("Sub Region = " + arr.subregion);
        }
    //console.log(this.response);
}
const req = new XMLHttpRequest;
req.addEventListener("load", getresponsevalue);
req.open("GET", URL);
req.send();