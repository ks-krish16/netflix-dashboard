const filterButtons = document.querySelectorAll('.filter-btn');
const chartRows = document.querySelectorAll('.chart-row');
const chartsGrid = document.querySelector('.charts-grid');
const summaries=document.querySelectorAll('.summary');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedFilter = button.dataset.filter;

        // Activate selected button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        if (selectedFilter === 'all') {
            chartsGrid.classList.add('show-all');
            chartRows.forEach(row => row.style.display = '');
             summaries.forEach(summary => summary.style.display = 'none');
        } else {
            chartsGrid.classList.remove('show-all');
            chartRows.forEach(row => {
                if (row.dataset.row === selectedFilter) {
                    row.style.display = '';
                    
                } else {
                    row.style.display = 'none';
                
                }
            });
               summaries.forEach(summary => {
                if (summary.dataset.summary === selectedFilter) {
                    summary.style.display = '';
                } else {
                    summary.style.display = 'none';
                }
            });
        }
    });
});
