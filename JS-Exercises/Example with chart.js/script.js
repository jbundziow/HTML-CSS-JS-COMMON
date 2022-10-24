const labels = [1];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
    borderWidth: 2,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgba(255,99,132,1)",
      data: [1]
    }]
  };

  let delayed;
  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        stacked: true,
        grid: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    animations: {
        y: { duration: 100 },
        x: { duration: 100}
      }
  };

  const config = {
    type: 'line',
    data: data,
    options: options
  };


  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


  data.datasets[0].data.push(1);



  //MY OWN CODE
  const addBtn = document.querySelector('button');
  
  let i = 0;
  const addData = () => {
    labels.push(i);
    data.datasets[0].data.push(i);
    myChart.update();
    i++;
    
  }

  console.log(data.datasets[0].data);
  console.log(labels);

  addBtn.addEventListener('click',addData);
