import moment from 'moment';
import { Table } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import useEarthquakeDetails from '../../hooks/useEarthquakeDetails';

type Props = {
    id: string | null;
    onCloseModal: () => void;
}

const EarthquakeDetailsModal = (props: Props) => {

  const { id, onCloseModal } = props;
  const {state, fetchDetails} = useEarthquakeDetails();
  const properties = state?.earthquake?.properties;


  return (
    <>
      <Modal show={!!id} onShow={()=>fetchDetails(id ?? "")} onHide={() => onCloseModal()}>
        <Modal.Header closeButton>
          <Modal.Title>{properties?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Table striped bordered hover>               
                <tbody>
                    <tr>
                        <td>Magnitude</td>
                        <td>{properties?.mag + " " + properties?.magType}</td>
                    </tr>
                    <tr>
                        <td>Palce</td>
                        <td>{properties?.place}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>{properties?.type}</td>
                    </tr>
                    <tr>
                        <td>Time</td>
                        <td>{moment.unix(properties?.time).format("hh:mm:ss")}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{properties?.status}</td>
                    </tr>
                    <tr>
                        <td>TSunani</td>
                        <td>{properties?.tsunami? "Yes": "No"}</td>
                    </tr>
                    <tr>
                        <td>More Information</td>
                        <td><a href={properties?.url}>Click Here</a></td>
                    </tr>                    
                </tbody>
            </Table>
        </Modal.Body>        
      </Modal>
    </>
  );
}

export default EarthquakeDetailsModal;