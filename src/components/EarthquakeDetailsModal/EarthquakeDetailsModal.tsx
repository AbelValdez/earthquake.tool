import Modal from 'react-bootstrap/Modal';
import useEarthquakeDetails from '../../hooks/useEarthquakeDetails';

type Props = {
    id: string | null;
    onCloseModal: () => void;
}

const EarthquakeDetailsModal = (props: Props) => {
  const { id, onCloseModal } = props;
  const {state, fetchDetails} = useEarthquakeDetails();

  return (
    <>
      <Modal show={!!id} onShow={()=>fetchDetails(id ?? "")} onHide={() => onCloseModal()}>
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