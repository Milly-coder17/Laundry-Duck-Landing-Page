
import { useState } from "react"
import customerSignUpImage from "../assets/CustomerSignUp.png"
import choosingServiceImage from "../assets/ChoosingService.png"
import chooseThisShopImage from "../assets/ChooseThisShop.png"
import "../styles/HowItWorks.css"

function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      image: customerSignUpImage,
      number: "STEP 01",
      title: "Create Your Account",
      description:
        "Sign up for a LaundryDuck customer account to get started.",
    },
    {
      image: choosingServiceImage,
      number: "STEP 02",
      title: "Choose a Laundry Service",
      description:
        "Browse available laundry shops and choose the service that best fits your needs.",
    },
    {
      image: chooseThisShopImage,
      number: "STEP 03",
      title: "View Shop Details",
      description:
        "Check the laundry shop's details and select Choose This Shop to proceed.",
    },
  ]

  const step = steps[currentStep]

  return (
    <section className="howItWorks" id="howItWorks">
      <div className="howItWorksHeader">
        <p className="howItWorksLabel">HOW IT WORKS</p>
        <h2>Your Laundry Journey, Made Simple</h2>
        <p>
          Follow our step-by-step guide to get started with LaundryDuck.
        </p>
      </div>

      <div className="walkthrough">
        <div className="walkthroughPhoneWrapper">
          <div className="walkthroughPhone">
            <img
              src={step.image}
              alt={step.title}
            />

            {currentStep === 0 && (
              <div className="registerHighlight" />
            )}

            {currentStep === 1 && (
              <div className="serviceHighlight" />
            )}

            {currentStep === 2 && (
              <div className="chooseShopHighlight" />
            )}
          </div>

          {currentStep === 0 && (
            <>
              <span className="registerArrow">→</span>
              <span className="registerLabel">Click Register</span>
            </>
          )}

          {currentStep === 2 && (
            <>
              <span className="chooseShopArrow">→</span>
              <span className="chooseShopLabel">Click Choose This Shop</span>
            </>
          )}
        </div>

        <div className="walkthroughInfo">
          <p className="walkthroughStepNumber">{step.number}</p>

          <h3>{step.title}</h3>
          <p className="walkthroughDescription">
            {step.description}
          </p>

          <div className="walkthroughButtons">
            <button
              type="button"
              className="walkthroughNext"
              onClick={() =>
                setCurrentStep((currentStep + 1) % steps.length)
              }
            >
              {currentStep === steps.length - 1
                ? "Start Over ↻"
                : "Next Step →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks