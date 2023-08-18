import styles from '../style'

const Background = ({
  img,
  title,
  context,
  btn,
  classImg,
  classBtn,
  classContext,
}) => (
  <section className="md:flex-row flex-col flex bg-teal-500 mt-5 relative">
    <img src={img} alt="" className={classImg} />
    <div className={classContext}>
      <div className="text-white text-center">
        <h1 className={styles.headingTitle}>{title}</h1>
        <p className={`${styles.paragraph} text-white mt-4`}>{context}</p>

        <button className={classBtn}>{btn}</button>
      </div>
    </div>
  </section>
)

export default Background
