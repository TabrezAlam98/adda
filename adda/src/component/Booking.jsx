import React,{useState} from 'react'
import './booking.css'

const Booking = () => {
  const [booked, setBooked] = useState([]);
  const [facility, setFacility] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');



const facilitiesConfig={
    facility:facility,
    date:date,
    startTime:startTime,
    endTime:endTime,
    
}

  const handleBooking = () => {
   console.log(setBooked([...booked,facilitiesConfig]))
  

  };
  let timeSplit1=startTime.split(":")
  let timeSplit2=endTime.split(":")
  let splitedtime=Math.abs(timeSplit2[0]-timeSplit1[0])
  
  return (
    <>
      
    <div>
    
      <h1 class="mainHeading"><u>Booking App</u></h1>
      <div>
      <label>Facility:</label>

        <select value={facility} onChange={(e)=>setFacility(e.target.value)} >
          <option value="">Select facilities</option>
          <option value="Clubhouse">Clubhouse</option>
          <option value="Tennis">Tennis court</option>
        </select>
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Start Time:</label>
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
      </div>
      <div>
        <label>End Time:</label>
        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      </div>
      
      <div>
       <button class="btn" onClick={handleBooking}>Submit</button>
      </div>
      
      <div>
        <h2>Booking status</h2>
        <ul>
          {booked.map((elem, index) => (
            <li key={index}>
              Booked, Rs.{elem.facility=="Clubhouse"?[splitedtime*100]:[splitedtime*50]}
             
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
  );

};

export default Booking;