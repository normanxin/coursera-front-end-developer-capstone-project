import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import TableReserveForm from './components/TableReserveForm';
import Confirmation from './components/Confimation';
import { useState } from 'react';
import fetchMock from 'fetch-mock';

function App() {
  const [step, setStep] = useState('input');
  const [values, setValues] = useState({});
  const handleSubmit = async (value) => {
    fetchMock.mock('/reserve-table', 200);
    await fetch('/reserve-table', {
      method: 'POST',
      body: JSON.stringify(values),
    });
    fetchMock.restore();
    setStep('confirm');
    setValues(value);
  };
  const handleBack = () => setStep('input');

  return (
    <div className="App">
      <main>
        {step === 'input' && <TableReserveForm onSubmit={handleSubmit} />}
        {step === 'confirm' && <Confirmation {...values} onBack={handleBack} />}
      </main>
    </div>
  );
}

export default App;
