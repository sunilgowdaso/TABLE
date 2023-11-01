import React, { useState } from 'react';

const Table = () => {
  const generateRandomNumber = () => {
    const randomValue = Math.floor(Math.random() * 151);
    return randomValue;
  };

  const createMedicineData = () => {
    const medicineData = [];
    const medicineNames = [
      'Concerta ER 54mg 24cnt 30s AUS', 'Concerta ER 18mg 24cnt 30s AUS', 'Topamax 50mg 60 Sprinkle Caps AUS', 'Invega Trinza 1x525mg SYR AUS-NZ', 'Eprex Protecs 20000U 6x0 5ml SYR AUS',
      'Eprex Protecs 30000U 6x0 3ml SYR AUS', 'Eprex Protecs 80000U 6x0 8ml SYR AUS', 'Eprex Protecs 80000U 6x0 8ml SYR AUS', 'Imbruvica 560mg 30Tab AUS', 'Tracleer 125mg 60Tab AU', 'Preziste 600mg 60FC Tab AUS-NZ'
    ];

    for (let i = 0; i < medicineNames.length; i++) {
      const medicine = {
        medicine: medicineNames[i],
        values: []
      };

      for (let j = 0; j < 14; j++) {
        medicine.values.push(generateRandomNumber());
      }

      medicineData.push(medicine);
    }

    return medicineData.map(medicine => ({
      ...medicine,
      selected: false,
    }));
  };

  const getColor = (value) => {
    if (value === 0) {
      return '#E92431';
    } else if (value <= 30) {
      return '#FD5720';
    } else if (value <= 100) {
      return '#07DA01';
    } else {
      return '#0586EC';
    }
  };

  const [medicineData, setMedicineData] = useState(createMedicineData());

  const toggleSelection = (index) => {
    const updatedMedicineData = [...medicineData];
    updatedMedicineData[index].selected = !updatedMedicineData[index].selected;
    setMedicineData(updatedMedicineData);
  };

  const columns = [
    'Medicine',
    '04 SEP',
    '11 SEP',
    '18 SEP',
    '25 SEP',
    '02 OCT',
    '09 OCT',
    '16 OCT',
    '23 OCT',
    '30 OCT',
    '06 NOV',
    '13 NOV',
    '20 NOV',
    '27 NOV',
    '04 DEC',
  ];

  const tableStyles = {
    width: '1567px',
    height: '873px',
    position: 'absolute',
    top: '138px',
    left: '300px',
    borderRadius: '8px',
    boxShadow: '0px 2px 2px 0px #1B1F2526, 0px -2px 2px 0px #1B1F250D',
    border: 'none',
    backgroundColor: '#FFFFFF',
  };

  const rowStyles = {
    width: '1566px',
    height: '75px',
    position: 'relative',
    boxShadow: '0px 4px 20px 0px #1B12F540',
    marginBottom: '10px',
  };

  return (
    <table style={tableStyles}>
      <thead>
        <tr>
          <th>Select</th>
          {columns.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {medicineData.map((medicine, index) => (
          <tr key={index} style={rowStyles}>
            <td>
              <input
                type="checkbox"
                checked={medicine.selected}
                onChange={() => toggleSelection(index)}
              />
            </td>
            <td>{medicine.medicine}</td>
            {medicine.values.map((value, valueIndex) => (
              <td key={valueIndex} style={{ color: getColor(value) }}>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
