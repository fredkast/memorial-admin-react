//  Component Conflicts List 

// import '../../Styles/listconflict.css'
import React,{ useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react"; 


function Stats(){

  const [count, setCount] = useState([]);

  // on recupere toutes les dates presentes dans "count" et on les insere dans un nouveau tableau:
  const date_value = [];
  for (const item of count) {
    date_value.push(item.date);
  }

  const count_value = [];
  for (const item of count) {
    count_value.push(item.count);
  }

  
  // les option du graphique:
  var options_chart1 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },
    title: {
      text: "Nombre de requêtes à l'API par jour",
    },
    legend: {
      
    
    },
    xAxis: {
      //ce qui s'affiche dans l'axe des abcisses
      type: 'category',
      data: date_value,
      axisLabel: {
        rotate: 30
      },
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        onZero :true
      }
    },
    yAxis: {
      name: 'Nombre de requêtes',
      type: 'value',
      
    },
    series: [
      // les valeurs a rentrer
      {
        data: count_value,
        type: 'line',
        smooth: true
      }
    ]
  };

  useEffect(() => {
    fetch(`https://api.projet-memorial.fr/compteur/readAll.php`)
        .then((response) => response.json()
        .then((data) =>{
          setCount(data);
          console.log(data)
        })
        .catch((error) => console.log(error))
        )
      },
  [])

  return(
          
    <div className="main-container">
      <div className='list-container'>
        <h1 className="title">Data vizualisation</h1>
        <div className="main-container">
          <h2>Consomation de l'app</h2>
          <ReactEcharts
                  option={options_chart1}
                  style={{ width: "600px", height: "300px" }}
          ></ReactEcharts>
        
        </div>
      </div>
    </div>

  );
}
export default Stats
