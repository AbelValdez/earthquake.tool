import { Earthquake } from '../../models/Earthquake';
import GaugeChart from 'react-gauge-chart'
import "./EarthquakeList.scss"

interface ItemProps {
  earthquake: Earthquake;
  onClick: (id: string) => void | null;
}

export const EarthquakeItem = (props: ItemProps) => {
  const {earthquake, onClick} = props;
  return (  
    <li onClick={() => onClick(earthquake.id)}>
      
      <GaugeChart id="gauge-chart" 
        nrOfLevels={3} 
        percent={(earthquake.properties.mag/5)}        
        formatTextValue={ () => `${earthquake.properties.mag.toFixed(1)}`}
        textColor={"#0000ff"}
        needleColor={"#bbb"}
        />        
      <span>      
        {earthquake.properties.place}
      </span>
    </li>
  )
}

interface Props {
  earthquakes:Earthquake[];
  onClick: (id: string) => void | null;
}

const EarthquakeList = (props: Props) => {
  return (
      <ul>
        {props.earthquakes.map((item: Earthquake) => (<EarthquakeItem key={item.id} earthquake={item} onClick={(id: string) => props.onClick(id)}></EarthquakeItem>))}
      </ul>
  );
}

export default EarthquakeList;
