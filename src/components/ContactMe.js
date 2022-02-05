// React
import { useState } from 'react'
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

export default function ContactMe() {    
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);   

    return (
        <div>
            <Button 
            color="warning"
            onClick={toggle}
            size="sm"
            >
            Join Me
            </Button>
            <Modal
                isOpen={modal} 
                toggle={toggle}
                modalTransition={{ timeout: 1000}}>
            <ModalHeader
                charCode="Y"                               
            >        
            <Button
                close
                onClick={toggle}
                size="sm"               
            />
                Interested in joining me? 🙂
            </ModalHeader>
            <ModalBody>
            Send me an email with a brief introduction about you and your travel plans. I will respond to you within 48 hours.

            </ModalBody>
            <ModalFooter>
                <Button
                color="primary"
                >
                <a id='emailMe' href='mailto:example@email.email'>Email me</a>
                </Button>
                {' '}
                <Button onClick={toggle}>
                Cancel
                </Button>
            </ModalFooter>
            </Modal>
      </div>
    )
}
