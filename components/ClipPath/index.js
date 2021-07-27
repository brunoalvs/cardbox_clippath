import styles from "./styles.module.css";

export default function ClipPath() {
  return (
    <section className={styles.container}>
      <figure className={styles.inner}>
        <img className={styles.image} src="/product-image.png" />
      </figure>
      <div className={styles.content}>
        <h2>Consul</h2>
        <h3>Frost Free</h3>
        <p>
          Você não precisa descongelar! O degelo é automático e com isso você
          economiza sua energia.
        </p>
      </div>
    </section>
  );
}
