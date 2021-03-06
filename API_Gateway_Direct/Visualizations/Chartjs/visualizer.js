var loadChart = function(uptime, temperature, humidity) {
    var ctx = $('#myChart');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: uptime,
            datasets: [
                {
                    label: "Temperature",
                    data: temperature,
                    fill: false,
                    borderColor: "rgb(255, 0, 0)",
                    lineTension: 0.1
                },
                {
                    label: "Humidity",
                    data: humidity,
                    fill: false,
                    borderColor: "rgb(0, 0, 255)",
                    lineTension: 0.1
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Uptime[1,2,3,4,5,6,7,8]',
                position: 'bottom'
            }
        }
    });
}
