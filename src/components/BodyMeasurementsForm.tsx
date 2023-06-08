import React, { useState } from 'react';


interface BodyMeasurements {
  date: Date;
  weight: number;
  height: number;
  chest: number;
  waist: number;
  hips: number;
}

interface BodyMeasurementsFormProps {
  onSubmit: (measurements: BodyMeasurements) => void;
}

//TODO add submit button and SAVE data
const BodyMeasurementsForm: React.FC<BodyMeasurementsFormProps> = ({ onSubmit }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [weight, setWeight] = useState<number | undefined>(0);
  const [height, setHeight] = useState<number>(0);
  const [chest, setChest] = useState<number>(0);
  const [waist, setWaist] = useState<number>(0);
  const [hips, setHips] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const measurements: BodyMeasurements = {
      date,
      weight: weight as number,
      height,
      chest,
      waist,
      hips,
    };
    onSubmit(measurements);
    console.log('submitted')
  };

  //TODO Use this in all your onChange() functions
  //TODO Update to check for empty string, if so then return undefined, else return the number
  const handleNumberInput = (text: string) => {
    // if (text === '')
    console.log(text)
  }

//Can you change the font size of a label? If so how....
  return (
    <form onSubmit={handleSubmit}>
      <label>Date</label>
      <input type="date" value={date.toISOString().slice(0, 10)} onChange={(e) => setDate(new Date(e.target.value))} />

      <label>Weight (kg):</label>
      <input type="number" className="input input-bordered input-primary w-full max-w-xs" value={weight} onChange={(e) => handleNumberInput(e.target.value)} />

      <label>Height (cm):</label>
      <input type="number" className="input input-bordered input-primary w-full max-w-xs" value={height} onChange={(e) => setHeight(Number(e.target.value))} />

      <label>Chest (cm):</label>
      <input type="number" className="input input-bordered input-primary w-full max-w-xs" value={chest} onChange={(e) => setChest(Number(e.target.value))} />

      <label>Waist (cm):</label>
      <input type="number"className="input input-bordered input-primary w-full max-w-xs" value={waist} onChange={(e) => setWaist(Number(e.target.value))} />

      <label>Hips (cm):</label>
      <input type="number" className="input input-bordered input-primary w-full max-w-xs" value={hips} onChange={(e) => setHips(Number(e.target.value))} />

      <button type="submit" className="btn btn-secondary">Submit</button>
    </form>
  );
};



export default BodyMeasurementsForm;