import "./index.css";

export const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          Estamos felizes em recebê-lo entre {openHour}:00 e {closeHour}:00.
        </p>
      )}
    </footer>
  );
};

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        Estamos abertos das {openHour}:00 às {closeHour}:00. Venha nos visitar
        ou faça seu pedido online.
      </p>
      <button className="btn">Fazer Pedido</button>
    </div>
  );
}
