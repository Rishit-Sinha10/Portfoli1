import CountUp from "react-countup";
function Stat({ label, value }) {
  return (
    <div className="bg-[#1e293b] p-4 rounded-xl text-center">
      <p>{label}</p>
      <h2>
        <CountUp end={value || 0} duration={1.5} />
      </h2>
    </div>
  );
}
export default Stat;
