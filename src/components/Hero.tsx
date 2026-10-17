
import driverImage from "../assets/Driver.png"
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

        <button type="button" className="heroButton">
          Get Started
        </button>
      </div>

      <div className="heroImage">
        <img src={driverImage} alt="LaundryDuck delivery rider on a motorcycle" />
      </div>
    </section>
  )
}

export default Hero