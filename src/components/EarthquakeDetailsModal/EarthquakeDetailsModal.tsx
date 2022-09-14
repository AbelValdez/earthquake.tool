import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FC } from "react";
import { getEarthquakeDetails } from '../../services/EarthquakeService';
import useEarthquakeDetails from '../../hooks/useEarthquakeDetails';

const EarthquakeDetailsModal: FC<{id: string | null, onCloseModal: () => void }> = (props) => {
   
  const {state, fetchDetails} = useEarthquakeDetails();

  return (
    <>
      <Modal show={!!props.id} onShow={()=>fetchDetails(props.id ?? "")} onHide={() => props.onCloseModal()}>
        <Modal.Header closeButton>
          <Modal.Title>{state?.earthquake?.properties.place}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>        
      </Modal>
    </>
  );
}

export default EarthquakeDetailsModal;