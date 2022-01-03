import * as React from 'react';
import { styled, Box } from '@mui/system';
// modal css
import './modal.scss';
// modal from mui
import ModalUnstyled from '@mui/base/ModalUnstyled';
// form component
import Form from '../form/Form';
// modal props
import { ModalProps } from './modalTypes';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: 'none',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

// General popup Modal , used to edit measurement .
export default function Modal(props: ModalProps) {
  // modal default state
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="general-modal">
      <div onClick={handleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-clockwise"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
          />
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
        </svg>
      </div>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <Form showUpdateButton={true} measurement={props.measurement} />
        </Box>
      </StyledModal>
    </div>
  );
}
