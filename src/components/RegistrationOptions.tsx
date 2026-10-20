import { useState } from "react"
import laundrySignUpImage from "../assets/LaundrySignUp.png"
import laundryShopRegistrationForm from "../assets/LaundryShopRegistrationForm.png"
import laundryShopSubmitImage from "../assets/LaundryShopSubmit.png"
import riderRegistrationForm from "../assets/RiderRegistrationForm.png"
import riderSubmitImage from "../assets/RiderSubmit.png"
import "../styles/RegistrationOptions.css"

type Role = "rider" | "shop"

function RegistrationOptions() {
  const [selectedRole, setSelectedRole] = useState<Role>("shop")
  const [currentStep, setCurrentStep] = useState(0)

  const steps = {
    rider: [
      {
        image: laundrySignUpImage,
        title: "Register as a Rider",
        description:
          "Start your journey with LaundryDuck by choosing the rider registration option.",
      },
      {
        image: riderRegistrationForm,
        title: "Complete the Registration Form",
        description:
          "Fill in the required information to register as a LaundryDuck rider.",
      },
      {
        image: riderSubmitImage,
        title: "Submit Your Registration",
        description:
          "Review your information, then submit your rider registration.",
      },
    ],
    shop: [
      {
        image: laundrySignUpImage,
        title: "Register Your Laundry Shop",
        description:
          "Start your partnership with LaundryDuck by choosing the laundry shop registration option.",
      },
      {
        image: laundryShopRegistrationForm,
        title: "Complete the Registration Form",
        description:
          "Fill in the required information to register your laundry shop.",
      },
      {
        image: laundryShopSubmitImage,
        title: "Submit Your Registration",
        description:
          "Review your information, then submit your laundry shop registration.",
      },
    ],
  }

  const roleSteps = steps[selectedRole]
  const step = roleSteps[currentStep]
  const isLastStep = currentStep === roleSteps.length - 1

  function changeRole(role: Role) {
    setSelectedRole(role)
    setCurrentStep(0)
  }

  function handleNextStep() {
    if (isLastStep) {
      setCurrentStep(0)
    } else {
      setCurrentStep((previous) => previous + 1)
    }
  }

  return (
    <section className="registrationOptions" id="registration">
      <div className="registrationOptionsHeader">
        <p className="registrationOptionsLabel">JOIN LAUNDRYDUCK</p>
        <h2>Be Part of LaundryDuck</h2>
        <p>
          Choose how you want to join our growing laundry delivery community.
        </p>

        <div className="registrationRoleButtons">
          <button
            type="button"
            className={selectedRole === "shop" ? "active" : ""}
            onClick={() => changeRole("shop")}
          >
            Laundry Shop Owner
          </button>

          <button
            type="button"
            className={selectedRole === "rider" ? "active" : ""}
            onClick={() => changeRole("rider")}
          >
            Become a Rider
          </button>
        </div>
      </div>

      <div className="registrationWalkthrough">
        <div
          className={`registrationPhoneWrapper${selectedRole === "shop" && currentStep === 0 ? " shopRegisterWalkthrough" : ""}`}
        >
          <div className="registrationPhone">
            <img
              src={step.image}
              alt={`${selectedRole === "rider" ? "Rider" : "Laundry shop"} registration, step ${currentStep + 1}`}
              key={`${selectedRole}-${currentStep}`}
            />
            {selectedRole === "shop" && currentStep === 0 && (
              <div className="shopRegisterHighlight" />
            )}
          </div>

          {selectedRole === "shop" && currentStep === 0 && (
            <>
              <span className="shopRegisterArrow">→</span>
              <span className="shopRegisterLabel">
                Choose Laundry Shop Owner
              </span>
            </>
          )}
        </div>

        <div className="registrationInfo">
          <p className="registrationStepNumber">
            STEP {String(currentStep + 1).padStart(2, "0")}
          </p>

          <h3>{step.title}</h3>
          <p>{step.description}</p>

          <div className="registrationStepButtons">
            <button
              type="button"
              className="registrationNavButton secondary"
              onClick={() =>
                setCurrentStep((previous) => Math.max(0, previous - 1))
              }
              disabled={currentStep === 0}
            >
              Previous Step
            </button>

            <button
              type="button"
              className="registrationNavButton primary"
              onClick={handleNextStep}
            >
              {isLastStep ? "Start Over ↻" : "Next Step →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegistrationOptions