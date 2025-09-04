import { useNavigate } from 'react-router-dom';
import { Modal, Box, Typography, Button } from '@mui/material';

interface ConfirmedModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ConfirmedModal({ open, onClose }: ConfirmedModalProps) {
    const navigate = useNavigate();
    const handleClose = () => {
        onClose();
        navigate('/reservation')
    }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
          boxShadow: 24,
          width: 300,
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          ✅ Reservation Confirmed!
        </Typography>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
}
