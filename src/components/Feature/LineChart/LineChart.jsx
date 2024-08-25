import { useParams } from "react-router-dom";
import { useGetCryptoHistoryQuery } from "../../../services/hitory"
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Row, Typography } from "antd";

// Register the required components for chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function LineChart() {

    const { id } = useParams();
    const { data } = useGetCryptoHistoryQuery(id);
    const { Title } = Typography;
    // Data you provided
    const historyData = data?.data

    // Map through market_chart to get labels (timestamps) and data (prices)
    const labels = historyData?.market_chart.map(item => new Date(item.timestamp).toLocaleDateString());
    const prices = historyData?.market_chart.map(item => item.price);

    // Create chart data
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: `${historyData?.name} Price (${historyData?.vs_currency.toUpperCase()})`,
                data: prices,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: '#0071bd',
                tension: 0.1,
            },
        ],
    };

    // Create chart options
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `${historyData?.name} Price Over Time`,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: `Price (${historyData?.vs_currency.toUpperCase()})`,
                },
            },
        },
    };

    return <>


        <Row className="chart-header">
            <Title level={2} className="chart-title">{historyData?.name} Price Chart </Title>

        </Row>


        <Line data={chartData} options={chartOptions} />

    </>

}
