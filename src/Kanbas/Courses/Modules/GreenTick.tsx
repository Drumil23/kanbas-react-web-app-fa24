import { BsPatchCheckFill } from 'react-icons/bs';

export default function GreenTick() {
  return (
    <span 
      className="me-1" 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: '50%', 
        backgroundColor: 'white', 
        width: '1.2em', // Adjust as needed for the circle size
        height: '1.2em' // Adjust as needed for the circle size
      }}
    >
      <BsPatchCheckFill className='text-success' style={{ fontSize: '0.9em' }} /> {/* Adjust icon size */}
    </span>
  );
}