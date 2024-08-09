interface KnobInterface {
  name:string,
  idName: string,
  idDec:string,
  idInc: string,
  idSpan:string,
}

export default function Knob({name, idName, idDec, idInc, idSpan}:KnobInterface) {
  return (
    <div>
      <h4 id={idName} className="text-3xl"> {name}</h4>
      <div className="text-center flex justify-around my-3">
        <button id={idDec} className="text-3xl">-</button>
        <span id={idSpan} className="text-3xl">5</span>
        <button id={idInc} className="text-3xl">+</button>
      </div>

    </div>
  );
}
