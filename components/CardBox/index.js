import styles from "./styles.module.css";

function CardBox() {
  return (
    <div className={styles.container}>
      <figure>
        <img src="/product-image.png" />
      </figure>
      <div>
        <h2>Consul</h2>
        <h3>Frost Free</h3>
        <p>
          Você não precisa descongelar! O degelo é automático e com isso você
          economiza sua energia.
        </p>
      </div>
    </div>
  );
}

export default CardBox;
