import Button from 'react-bootstrap/Button';

const Confirmation = ({ date, time, onBack }) => {
  return (
    <div className="d-flex flex-column justify-content-between vh-100 p-3">
      <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
        <h1>Thank you!</h1>
        <i className="bi bi-calendar-check my-5 display-1 text-success" />
        <p className="text-center">
          We are looking forward to your visit on {date} at {time}.
        </p>
      </div>
      <Button className="w-100" onClick={onBack}>
        Back
      </Button>
    </div>
  );
};

export default Confirmation;
