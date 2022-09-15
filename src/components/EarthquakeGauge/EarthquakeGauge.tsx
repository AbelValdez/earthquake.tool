import GaugeChart from "react-gauge-chart";
type Props = {
    magnitude: number;
}
const EarthquakeGauge = (props: Props) => {
    const { magnitude } = props;
    return (
            <GaugeChart id="gauge-chart"                
                nrOfLevels={3} 
                percent={magnitude/5}        
                formatTextValue={ () => `${magnitude?.toFixed(1)}`}
                textColor={"#0000ff"}
                needleColor={"#bbb"}                
            />
        );    
    }

export default EarthquakeGauge;
