import Display from "./components/display";
import Knob from "./components/knob";


export default function Home() {
  return (
    <main className="container mx-auto border flex flex-col justify-center items-center h-screen">
      <h1 className="text-6xl my-10">25 + 5 Clock</h1>
      <div className="flex gap-x-56">
        <Knob name='Break Length' idName="break-label" idDec='break-decrement' idInc='break-increment' idSpan='break-length' />
        <Knob name='Session Length' idName="session-label" idDec='session-decrement' idInc='session-increment' idSpan='session-length' />

      </div>
      <Display />
    </main>
  );
}
