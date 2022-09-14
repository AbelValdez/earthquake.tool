import Modal from 'react-bootstrap/Modal';
import useEarthquakeDetails from '../../hooks/useEarthquakeDetails';

interface Props {
    id: string | null;
    onCloseModal: () => void;
}
const EarthquakeDetailsModal = (props: Props) => {
   
  const {state, fetchDetails} = useEarthquakeDetails();

  return (
    <>
      <Modal show={!!props.id} onShow={()=>fetchDetails(props.id ?? "")} onHide={() => props.onCloseModal()}>
        <Modal.Header closeButton>
          <Modal.Title>{state?.earthquake?.properties?.place}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>        
      </Modal>
    </>
  );
}

export default EarthquakeDetailsModal;