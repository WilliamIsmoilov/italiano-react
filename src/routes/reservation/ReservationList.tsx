// ReservationList.tsx
import React from 'react';
import TextType from '../reactBits/reservation/text';

type Reservation = {
  id: number | string;
  name: string;
  email: string;
  date: string;
  time: string;
  partySize: number;
};

type Props = {
  reservations: Reservation[];
};

export default function ReservationList({ reservations }: Props) {
  return (
    <div className="reservation-list">
     <TextType 
     className='react-text'
  text={["Reservation lists", "that you can change or cancel time!", "Thanks for choosing us!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>
      {reservations.length === 0 ? (
        <p>No reservations yet.</p>
      ) : (
        <ul>
          {reservations.map((res) => (
            <li key={res.id} className="reservation-item">
              <p><strong>Name:</strong> {res.name}</p>
              <p><strong>Email:</strong> {res.email}</p>
              <p><strong>Date:</strong> {res.date}</p>
              <p><strong>Time:</strong> {res.time}</p>
              <p><strong>Party Size:</strong> {res.partySize}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
