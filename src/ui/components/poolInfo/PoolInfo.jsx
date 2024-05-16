import { useContext, useEffect } from "react";
import { Context } from "../../../core/Context";
import { Container } from "../../hoc/container/Container";

const PoolInfo = () => {
  const { getPoolData, dataPool } = useContext(Context);
  useEffect(() => {
    (async () => {
      await getPoolData();
      console.log(dataPool);
    })();
  }, []);
  return (
    <Container>
      {dataPool &&
        dataPool.map((pool, index) => (
          <div
            style={{ backgroundColor: "#dcc0ff", padding: "10px", borderRadius: "10px", margin: "10px" }}
            key={index}
          >
            <p>Пул # {++index}</p>
            <p>Токен: {pool[0]}</p>
            <p>Токен: {pool[1]}</p>
            <p>Абсолютная цена: {pool[3]}</p>
            <p>Общая цена токенов: {pool[4]}</p>
            <p>Отношение токенов: {pool[3]}</p>
          </div>
        ))}
    </Container>
  );
};

export { PoolInfo };
