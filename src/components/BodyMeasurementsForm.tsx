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
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [chest, setChest] = useState<number>(0);
  const [waist, setWaist] = useState<number>(0);
  const [hips, setHips] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const measurements: BodyMeasurements = {
      date,
      weight,
      height,
      chest,
      waist,
      hips,
    };
    onSubmit(measurements);
  };
//TODO Build loop to show differences in measurements each time submit is hit**
  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input type="date" value={date.toISOString().slice(0, 10)} onChange={(e) => setDate(new Date(e.target.value))} />

      <label>Weight (kg):</label>
      <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />

      <label>Height (cm):</label>
      <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} />

      <label>Chest (cm):</label>
      <input type="number" value={chest} onChange={(e) => setChest(Number(e.target.value))} />

      <label>Waist (cm):</label>
      <input type="number" value={waist} onChange={(e) => setWaist(Number(e.target.value))} />

      <label>Hips (cm):</label>
      <input type="number" value={hips} onChange={(e) => setHips(Number(e.target.value))} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default BodyMeasurementsForm;