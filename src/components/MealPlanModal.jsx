import React from 'react';
import {Button, Modal} from "react-bootstrap";

function MealPlanModal({open, setOpen, setMplanJson}) {

    const handleOpen = () => {
        console.log("open:" +open)
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <label htmlFor="start">Start date:</label>

                <input type="date" id="start" name="trip-start"
                       value="2018-07-22"
                       min="2018-01-01" max="2018-12-31"/>
            </Modal>
        </div>
    );
}

export default MealPlanModal;