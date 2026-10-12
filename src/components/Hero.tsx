import "../styles/Hero.css"

function Hero() {
  return (
    <section className="hero">
      <div className="heroContent">

        <h1>
          Effortless <span>Laundry.</span>
          <br />
          Delivered to your <span>Door!</span>
        </h1>

        <p className="heroDescription">
          Enjoy fresh, clean clothes without the hassle.
          Book your laundry pickup and let LaundryDuck
          take care of the rest.
        </p>

        <a href="/register" className="heroButton">
          Get Started
        </a>
      </div>
    </section>
  )
}

export default Hero