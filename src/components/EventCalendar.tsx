"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { date } from "zod";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "7th Sem Theory Exam",
    date: "2024-12-02 - 2024-12-20",
    time: "10:00 AM - 1:00 PM",
    description: "Prepare for the theory exam with essential resources, study guides, and tips for success!",
  },
  {
    id: 2,
    title: "Durga Puja Holidays",
    date: "2024-10-02 - 2024-10-20",
    description: "Celebrate Durga Puja with festive holidays! Check the calendar for dates and event details.",
  },
  {
    id: 3,
    title: "Annual Inter College Sports",
    time: "2024-12-23 - 2025-01-23",
    description: "Join us for the annual inter-college sports competition! Showcase talent, teamwork, and sportsmanship!",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
