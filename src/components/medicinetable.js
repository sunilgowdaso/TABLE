import React, { useState } from 'react';

const MedicineTable = () => {
  const [data, setData] = useState([
    {
      medicine: 'Medicine 1',
      totalInvD: 100,
      minInvD: 20,
      totalInvMovement: 80,
      currentStockInHand: 120,
      worstCase: 40,
      invMovementDelay: 10,
    },
    {
      medicine: 'Medicine 2',
      totalInvD: 150,
      minInvD: 30,
      totalInvMovement: 120,
      currentStockInHand: 100,
      worstCase: 50,
      invMovementDelay: 15,
    },
    // Add more data objects as needed
  ]);

  const handleAction = (item) => {
    alert(Clicked action for ${item.medicine});
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Medicine</th>
          <th>Total Inv(d)</th>
          <th>Min Inv(d)</th>
          <th>Total Inv Movement</th>
          <th>Current Stock in Hand</th>
          <th>Worst Case</th>
          <th>Inv Movement Delay</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.medicine}</td>
            <td>{item.totalInvD}</td>
            <td>{item.minInvD}</td>
            <td>{item.totalInvMovement}</td>
            <td>{item.currentStockInHand}</td>
            <td>{item.worstCase}</td>
            <td>{item.invMovementDelay}</td>
            <td>
              <button onClick={() => handleAction(item)}>Action</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MedicineTable;