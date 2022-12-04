import Dashboard from '../Dashboard';
import './styles/informes.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { Chart } from "react-google-charts";

function Informes(){
    const data = [
        { name: 'Enero', 2021: 9432, 2022: 5323 }, 
        { name: 'Febrero', 2021: 6231, 2022: 4334 },    
        { name: 'Marzo', 2021: 3232, 2022: 5211 },    
        { name: 'Abril', 2021: 4342, 2022: 4531 },    
        { name: 'Mayo', 2021: 6432, 2022: 8631 },    
        { name: 'Junio', 2021: 3798, 2022: 5299 },    
        { name: 'Julio', 2021: 5443, 2022: 2431 },    
        { name: 'Agosto', 2021: 3472, 2022: 4531 },    
        { name: 'Septiembre', 2021: 4246, 2022: 4331 },   
        { name: 'Octubre', 2021: 6452, 2022: 7531 },    
        { name: 'Noviembre', 2021: 5632, 2022: 3431 },   
        { name: 'Diciembre', 2021: 4232, 2022: 7531 }    
    ]

    const options = {
        title: "Denuncias por dia",
        pieHole: 0.4,
        pieSliceText: "value",
        is3D: false
    };
    const options2 = {
        title: "Denuncias por semana",
        pieSliceText: "value",
        pieHole: 0.4,
        is3D: false
    };

    const diario = [
        ["Tipo", "Cantidad"],
        ["Ambiente", 71],
        ["Forestal", 86],
        ["Hídrica", 54]
      ];

    const semanal = [
        ["Tipo", "Cantidad"],
        ["Ambiente", 421],
        ["Forestal", 646],
        ["Hídrica", 514]
      ];

    return(
        <div className="dashbody">
            <Dashboard />
            <div className="main">
                <div className='chartContainer'>
                    <div className='barChart'>
                        <h4 className='mb-3'>Denuncias totales comparadas con el año anterior</h4>
                        <BarChart
                        width={1200}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="2021" fill="#8884d8" />
                            <Bar dataKey="2022" fill="#82ca9d" />
                        </BarChart>
                    </div>
                    <div className='pieChart'>
                        <Chart
                            chartType="PieChart"
                            data={diario}
                            options={options}
                            width={"500px"}
                            height={"400px"}
                        />
                        <Chart
                            chartType="PieChart"
                            data={semanal}
                            options={options2}
                            width={"500px"}
                            height={"400px"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Informes;