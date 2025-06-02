import load from "/loader1.gif";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <img className="w-1/7 object-cover" src={load} alt="" />
    </div>
  );
};

export default Loader;
