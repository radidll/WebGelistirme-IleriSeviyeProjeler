const ctx = document.getElementById('myChart').getContext('2d');

const chartData = {
    labels: [],
    datasets: [{
        label: 'Veriler',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

const myChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function addData() {
    const labelInput = document.getElementById('label').value;
    const valueInput = document.getElementById('value').value;

    if (labelInput && valueInput) {
        chartData.labels.push(labelInput);
        chartData.datasets[0].data.push(Number(valueInput));
        myChart.update();

        document.getElementById('label').value = '';
        document.getElementById('value').value = '';
    }
}