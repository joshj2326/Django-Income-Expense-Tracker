const renderChart = (data, labels) => {
  const ctx = document.getElementById('myChart').getContext('2d');
  const ctx2 = document.getElementById('myChart2').getContext('2d');
  const ctx3 = document.getElementById('myChart3').getContext('2d');
  const ctx4 = document.getElementById('myChart4').getContext('2d');
  const myChart2 = new Chart(ctx2, {
      type: 'pie',
      data: {
          labels: labels,
          datasets: [{
              label:"Current month expenses",
              data: data,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(241, 90, 34, 0.2)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(241, 90, 34, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          title: {
            display: true,
            text: "Expenses per category",
          },
        },
      });

      
      const myChart4 = new Chart(ctx4, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label:"Current month expenses",
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(241, 90, 34, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(241, 90, 34, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
              display: true,
              text: "Expenses per category",
            },
          },
        });
     
      const myChart3 = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label:"Current month expenses",
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(241, 90, 34, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(241, 90, 34, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
              display: true,
              text: "Expenses per category",
            },
          },
        });
       


  const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [{
            label:"Current month expenses",
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(241, 90, 34, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(241, 90, 34, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
          display: true,
          text: "Expenses per category",
        },
      },
    });
  };

  
  const getChartData = () => {
      console.log("fetching");
      fetch("/expense_category_summary")
        .then((res) => res.json())
        .then((results) => {
          console.log("results", results);
          const category_data = results.expense_category_data;
          const [labels, data] = [
            Object.keys(category_data),
            Object.values(category_data),
          ];
    
          renderChart(data, labels);
        });
    };
  
  document.onload = getChartData();
  