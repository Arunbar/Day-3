console.log("display all country flags.");
        let x = new XMLHttpRequest();
        // const data=new Array();
        console.log(x);
        x.open("GET", "https://restcountries.com/v3.1/all");
        x.send();
        x.onload = function(){
            const data=JSON.parse(x.response);
            // console.log(data);
            for(let i=0; i<data.length; i++) {
                console.log(data[i].flags.svg);
               
            }
        };
