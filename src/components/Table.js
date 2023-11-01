// src/components/Table.js
import React from 'react';

const Table = () => {
  const generateRandomNumber = () => {
    const randomValue = Math.floor(Math.random() * 151); // Generating random numbers between 0 and 150, including 0 and 150
    return randomValue;
  };

  const createMedicineData = () => {
    const medicineData = [];
    const medicineNames = [
      'Medicine A', 'Medicine B', 'Medicine C', 'Medicine D', 'Medicine E',
      'Medicine F', 'Medicine G', 'Medicine H', 'Medicine I', 'Medicine J', 'Medicine K'
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

    return medicineData;
  };

  const getColor = (value) => {
    if (value === 0) {
      return '#E92431'; // Red for zeros
    } else if (value <= 30) {
      return '#FD5720'; // Orange for values between 1 and 30
    } else if (value <= 100) {
      return '#07DA01'; // Green for values between 31 and 100
    } else {
      return '#0586EC'; // Blue for values above 100
    }
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

  const medicineData = createMedicineData();

  return (
    <table style={tableStyles}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {medicineData.map((medicine, index) => (
          <tr key={index} style={rowStyles}>
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