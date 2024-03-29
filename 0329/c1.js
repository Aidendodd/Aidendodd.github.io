"use strict";
let r = null;

let b1 = document.querySelector("#b1");
let chart1 = null;//for chart to be shown
async function loadd()
{
    //fetch()
    let url = `https://juxinglong.github.io/static/data/states.json`;

    let r = await fetch(url);//async
    let rj = await r.json();//async

    let c1 = document.querySelector("#c1");
    if (chart1 != null)
    {
        chart1.destroy();//if already has chart, delete it
    }
    c1.innerHTML = ``;// clean the canvas to show another chart

    let opts =
    {
        type: "pie",
        data: {
            labels: rj.map(x => x.st),
            datasets: [
                {data:rj.map(x=>x.p),},
]
        }

    };
    chart1=new Chart(c1, opts)

    r = rj;
    console.log(rj);

    Swal.fire("Load data");
}

b1.addEventListener("click", loadd);