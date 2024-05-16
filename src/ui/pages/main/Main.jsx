import Services from "../../../services/Services";

const Main = () => {
  const handlerGetPools = async () => {
    const data = await Services.getPools();
    console.log(data);
  };
  return (
    <div>
      <div onClick={handlerGetPools}>GetPools</div>
    </div>
  );
};

export { Main };
