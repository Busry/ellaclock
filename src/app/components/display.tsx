interface DisplayInterface {
  name: string,
  idName: string
}

export default function Display() {
  return (
    <div className="text-center">
      <div className="border-4  rounded-full border-purple-950 px-20 py-6 ">
        <h4 id="timer-label" className="text-3xl">session</h4>
        <h4 id="time-left" className="text-7xl mt-3">25:00</h4>
      </div>
      <div className="flex justify-center gap-x-10 mt-4 ">
        <button id="start_stop">Start/Pause</button>
        <button id="reset">Reset</button>
      </div>
    </div>
  );
}
