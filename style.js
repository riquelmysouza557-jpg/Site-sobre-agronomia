const ctx = document.getElementById('graficoAgronomia').getContext('2d');
const graficoAgronomia = new Chart(ctx, {
    type: 'pie', 

    data: {
        labels: [
            'Centro-Oeste',
            'Sul',
            'Sudeste',
            'Nordeste',
            'Norte'
        ],

        datasets: [{
            label: 'Força da Agronomia',
            data: [35, 25, 20, 12, 8],
            backgroundColor: [
                '#4CAF50',
                '#8BC34A',
                '#FFC107',
                '#FF9800',
                '#03A9F4'
            ],

            borderWidth: 1
        }]
    },

    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});
