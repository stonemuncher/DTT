const LETTERS = "abcdefghijklmnopqrstuvwxyz";
const stats = document.getElementById('statscontent');

const GRACE_WORDS = 0;


var user_values = {};
var words_typed = 0;
var totals_history = [];
async function load_values() {
        if (localStorage.getItem("history")) {
                totals_history = JSON.parse(localStorage.getItem("history")).map(function(item) {
                        return parseFloat(item);
                    });
        }
        if (localStorage.getItem("typed")) {
                words_typed = Number(localStorage.getItem("typed"));
        }
        for (letter of LETTERS) {
                if (localStorage.getItem(letter)) {
                        user_values[letter] = Number(localStorage.getItem(letter));
                }
                else {
                        user_values[letter] = 0.5;
                }
        }
}


function get_total() {
        total = 0
        for (const key in user_values) {
                total += user_values[key];
        }
        return total;
}

load_values();
stats.innerText = "Overall score: " + get_total();

let values = [];
for (const key in user_values) {
        values.push([key, user_values[key]]);
}
values = reverse_merge(values);

resp = "Here are the keys in order of descending difficulty to you: ";
for (const item of values) {
        resp += item[0] + ", ";
}
resp = resp.slice(0, -2);
stats.innerText += "\n\n"+resp;

let labels = [];
if (totals_history) {
        for (let i = GRACE_WORDS; i < words_typed; i+=10) {
                labels.push(i);
        }
        console.log(labels);

        const data = {
                labels: labels,
                datasets: [{
                  label: 'Total keys difficulty',
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: totals_history,
                }]
              };

        const config = {
                type: 'line',
                data: data,
                options: {
                        responsive: true,
                        scales: {
                          x: {
                            title: {
                              color: 'black',
                              display: true,
                              text: 'Words typed'
                            }
                          },
                          y: {
                                  title: {
                                          colour: 'black',
                                          display: true,
                                          text: 'Total keys difficulty (lower is better)'
                                  }
                          }
                        }
                      }
              };
        
        const myChart = new Chart(
                document.getElementById('myChart'),
                config
              );
} 
/*
const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
      ];
    
      const data = {
        labels: labels,
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      };
    
      const config = {
        type: 'line',
        data: data,
        options: {
                responsive: true
            }
      };

      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );*/