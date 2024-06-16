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
  ChartOptions,
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

const UserGraph = ( {data, theme}:{data:any, theme:string}) => {

    const sortedData = Array.isArray(data) ? data.sort((a: any, b: any) => a.ratingUpdateTimeSeconds - b.ratingUpdateTimeSeconds) : null;
    
    if(sortedData === null){
        return (
            <>
            FETCHING GRAPH API...
            </>
        )
    } 
    const minRating = sortedData.reduce((min, contest) => contest.newRating < min ? contest.newRating : min, sortedData[0].newRating);
    const maxRating = sortedData.reduce((max, contest) => contest.newRating > max ? contest.newRating : max, sortedData[0].newRating);
    
    const getColor = (rating: number) => {
      if (rating >= 3000) {
        return '#a00';
      } else if (rating >= 2600) {
        return '#f33';
      } else if (rating >= 2400) {
        return '#f77';
      } else if (rating >= 2300) {
        return '#ffbb55';
      } else if (rating >= 2100) {
        return '#ffcc88';
      } else if (rating >= 1900) {
        return '#f8f';
      } else if (rating >= 1600) {
        return '#aaf';
      } else if (rating >= 1400) {
        return '#77ddbb';
      } else if (rating >= 1200) {
        return '#7f7';
      } else {
        return '#ccc';
      }
    };  

    const chartData: ChartData<'line'> = {
    labels: sortedData.map((contest) => new Date(contest.ratingUpdateTimeSeconds * 1000).toLocaleDateString()),
    datasets: [
      {
        data: sortedData.map((contest) => contest.newRating),
        fill: false,
        borderColor: `${theme === 'dark' ? 'white' : 'blue'}`,
        backgroundColor: `${theme === 'dark' ? 'white' : 'blue'}`,
        pointBackgroundColor: 'orange',
        pointBorderColor: `${theme === 'dark' ? 'white' : 'blue'}`,
        pointHoverBackgroundColor: `${theme === 'dark' ? 'white' : 'blue'}`,
        pointHoverBorderColor: 'orange',
        tension: 0.1
      }
    ]
  };

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
          display: false,
          // color: getColor(minRating)
        },
        ticks: {
          color: `${theme === 'dark' ? 'white' : 'blue'}`,
          font: {
            family: 'Arial, sans-serif',
            size: 10
          },
          maxTicksLimit:10
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
          color: 'grey',
          tickColor: 'grey',
          drawTicks: true,
        },
        ticks: {
          color: `${theme === 'dark' ? 'white' : 'blue'}`,
          font: {
            family: 'Arial, sans-serif',
            size: 10,
            weight: 'bold'
          }
        },
        suggestedMin: minRating,
        suggestedMax: 1800,
        stacked: true
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
    }
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
