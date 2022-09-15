import { Earthquake } from '../../models/Earthquake';
import "./EarthquakeList.scss"
import EarthquakeGauge from '../EarthquakeGauge/EarthquakeGauge';
import { Card } from 'react-bootstrap';

type ItemProps = {
  earthquake: Earthquake;
  onClick: (id: string) => void | null;
}

export const EarthquakeItem = (props: ItemProps) => {
  const {earthquake, onClick} = props;
  return (
    <li onClick={() => onClick(earthquake.id)}>
      <Card>
        <Card.Body>
          
          <EarthquakeGauge magnitude={earthquake.properties.mag}></EarthquakeGauge>
          
          <Card.Title>
            {earthquake.properties.place}
          </Card.Title>          
        </Card.Body>
      </Card>
    </li>
  )
}

type Props = {
  earthquakes:Earthquake[];
  onClick: (id: string) => void | null;
}

const EarthquakeList = (props: Props) => {
  const { earthquakes, onClick } = props;
  return (
      <ul>
        {earthquakes.map((item: Earthquake) => (<EarthquakeItem key={item.id} earthquake={item} onClick={(id: string) => onClick(id)}></EarthquakeItem>))}
      </ul>
  );
}

export default EarthquakeList;
