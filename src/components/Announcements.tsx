const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Upcoming Exams</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-09-20
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
          "Prepare for upcoming exams with study resources, schedules, and tips. Success starts with preparation!"
          </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Upcoming Holidays</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
          "Enjoy upcoming holidays! Check our calendar for dates and events to celebrate and relax."
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Upcoming Sports Events</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-09-20
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
          "Join us for the upcoming sports event! Showcase your skills and support your fellow athletes!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
