const renderChart = (data, labels) => {
    const ctx5 = document.getElementById('myChart5').getContext('2d');
    const ctx6 = document.getElementById('myChart6').getContext('2d');
    const ctx7 = document.getElementById('myChart7').getContext('2d');
    const ctx8 = document.getElementById('myChart8').getContext('2d');
    const myChart5 = new Chart(ctx5, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
              label:"Current month income",
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
              text: "Income per source",
            },
          },
        });
  
        
        const myChart6 = new Chart(ctx6, {
          type: 'polarArea',
          data: {
              labels: labels,
              datasets: [{
                label:"Current month income",
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
                text: "Income per source",
              },
            },
          });
       
        const myChart7 = new Chart(ctx7, {
          type: 'bar',
          data: {
              labels: labels,
              datasets: [{
                label:"Current month income",
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
                text: "income per source",
              },
            },
          });
         
  
  
    const myChart8 = new Chart(ctx8, {
      type: 'pie',
      data: {
          labels: labels,
          datasets: [{
            label:"Current month income",
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
            text: "income per source",
          },
        },
      });
    };
  
    
    const getChartData = () => {
        console.log("fetching");
        fetch("income_source_summary")
          .then((res) => res.json())
          .then((results) => {
            console.log("results", results);
            const source_data = results.income_source_data;
            const [labels, data] = [
              Object.keys(source_data),
              Object.values(source_data),
            ];
      
            renderChart(data, labels);
          });
      };
    
    document.onload = getChartData();
    