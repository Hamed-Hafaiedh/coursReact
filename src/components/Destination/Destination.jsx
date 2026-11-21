import styles from "./Destination.module.css";

function Destination({ image, nom, pays, description, prix }) {
  return (
    <article className={styles.destination}>
      <img className={styles.image} src={image} alt={nom} />
      <h2 className={styles.titre}>{nom}</h2>
      <p className={styles.pays}>{pays}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.prix}>{prix} DT</p>
    </article>
  );
}

export default Destination;
