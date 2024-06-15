import React from 'react';
// import {animation} from './animate';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';
import styles from './UserGraph.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface UserGraphProps {
data: any;
}

const UserGraph: React.FC<UserGraphProps> = ({ data }) => {

    const sortedData = Array.isArray(data) ? data.sort((a: any, b: any) => a.ratingUpdateTimeSeconds - b.ratingUpdateTimeSeconds) : null;
    
    if(sortedData === null){
        return (
            <>
            FETCHING GRAPH API...
            </>
        )
    }

    console.log("sortedData", sortedData);
    // const dummyRating = sortedData[0].newRating; 
    const minRating = sortedData.reduce((min, contest) => contest.newRating < min ? contest.newRating : min, sortedData[0].newRating);
    const maxRating = sortedData.reduce((max, contest) => contest.newRating > max ? contest.newRating : max, sortedData[0].newRating);
    // console.log("minData", minRating);
    // console.log("maxData", maxRating);
    const chartData: ChartData<'line'> = {
    labels: sortedData.map((contest) => new Date(contest.ratingUpdateTimeSeconds * 1000).toLocaleDateString()),
    datasets: [
      {
        data: sortedData.map((contest) => contest.newRating),
        fill: false,
        borderColor: 'orange',
        backgroundColor: 'orange',
        pointBackgroundColor: '#fff',
        pointBorderColor: 'orange',
        pointHoverBackgroundColor: 'orange',
        pointHoverBorderColor: 'orange',
        tension: 0.1
      }
    ]
  };

  var markings = [
    { color: '#a00', lineWidth: 1, yaxis: { from: 3000 } },
    { color: '#f33', lineWidth: 1, yaxis: { from: 2600, to: 2999 } },
    { color: '#f77', lineWidth: 1, yaxis: { from: 2400, to: 2599 } },
    { color: '#ffbb55', lineWidth: 1, yaxis: { from: 2300, to: 2399 } },
    { color: '#ffcc88', lineWidth: 1, yaxis: { from: 2100, to: 2299 } },
    { color: '#f8f', lineWidth: 1, yaxis: { from: 1900, to: 2099 } },
    { color: '#aaf', lineWidth: 1, yaxis: { from: 1600, to: 1899 } },
    { color: '#77ddbb', lineWidth: 1, yaxis: { from: 1400, to: 1599 } },
    { color: '#7f7', lineWidth: 1, yaxis: { from: 1200, to: 1399 } },
    { color: '#ccc', lineWidth: 1, yaxis: { from: 0, to: 1199 } },
];

  const options: ChartOptions<'line'> = {
    
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const contest = sortedData[context.dataIndex];
            return `${contest.contestName}: ${context.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
            display: true,
            color: '#6c757d',
            font: {
              family: 'Arial, sans-serif',
              weight: 'bold',
              size: 12
            }
          },
        grid: {
          display: false
        },
        ticks: {
          color: 'white',
          font: {
            family: 'Arial, sans-serif',
            size: 10
          }
        }
      },
      y: {
        title: {
          display: true,
          // text: 'Rating',
          color: '#6c757d',
          font: {
            family: 'Arial, sans-serif',
            weight: 'bold',
            size: 12
          }
        },
        grid: {
          // color: 'orange'
        },
        ticks: {
          color: 'orange',
          font: {
            family: 'Arial, sans-serif',
            size: 10,
            weight: 'bold'
          }
        },
        suggestedMin: minRating,
        suggestedMax: Math.max(maxRating, 1800)
      }
    },
    elements: {
      line: {
        borderWidth: 3
      },
      point: {
        radius: 4,
        hoverRadius: 6
      }
    },
    layout: {
      padding: 20
    },
  };

  return (
    <div className={styles.graphContainer}>
      <h2 className='text-center'>Rating Chart</h2>
      <div className={styles.chartWrapper}>
        <Line data={chartData} options={options}/>
      </div>
    </div>
  );
};

export default UserGraph;
