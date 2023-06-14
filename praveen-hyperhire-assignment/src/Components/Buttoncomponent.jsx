import "../Css/main.css";
let buttondata = [
  { name: "#2023" },
  { name: "#TODAYISMONDAY" },
  { name: "#TOP" },
  { name: "#POPS!" },
  { name: "#WOW" },
  { name: "#ROW" },
];
export default function ButtonComponet() {
  return (
    <>
      {buttondata.map((item) => (
        <button className="buttons">{item.name}</button>
      ))}
    </>
  );
}
