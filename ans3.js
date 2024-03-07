console.log("display all country information");
        let x = new XMLHttpRequest();
        // const data=new Array();
        console.log(x);
        x.open("GET", "https://restcountries.com/v3.1/all");
        x.send();
        x.onload = function(){
            const data=JSON.parse(x.response);
           
           
            for(let i=0; i<data.length; i++) {
               
               console.log(`
            Country Name:${data[i].name.common}
            Region:${data[i].region}
            Sub-region:${data[i].subregion}
            Population:${data[i].population}


                  `);
            }
        };
