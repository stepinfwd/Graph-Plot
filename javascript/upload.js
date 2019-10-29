//parsing using papaparse


Papa.parse("data/test.csv", {
    download: true,
    complete: function (results) {
        console.log(results);
        // createGraph(results.data);
        fields(results.data);
        plot(results.data);
    }
});
const xlabels=[];
const ylabels=[];

//function to show fields available in data

function fields(data) {

    let a = data;
    for (var i = 0; i < a[0].length; i++) {
        let creatediv = document.createElement("div");
        creatediv.innerHTML = a[0][i];
        document.getElementById("field").appendChild(creatediv);
        let checkbox = document.createElement("input");
        checkbox.setAttribute("class", "checking");
        creatediv.setAttribute("class", "selected");

        checkbox.setAttribute("type", "checkbox");
        creatediv.appendChild(checkbox);


    }


}

function createGraph() {
    console.log("hissaaaaa")

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xlabels,

            datasets: [{
                label: '# of Votes',
                fill:false,
                data: ylabels,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {

                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


}






function plot(data) {
    let a = data;
    for (var i = 0; i < data.length; i++) {
        xlabels.push(a[i][2]) ;
        ylabels.push(a[i][5]);
    }
}






// function to get the selected  fields by user

function selected_field() {
    let y=document.getElementsByClassName("selected");
    let x=document.getElementsByClassName("checking");
    for(var i =0;i<x.length;i++){

        if(x[i].checked===true)
        {
            document.getElementById("sel_field").appendChild(y[i]);

        }
    }
    console.log("enteredhh");
}

//function to create graph_pass arguments from selected field function

function kira(){
    console.log("jiji")
}

