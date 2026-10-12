import "../styles/FAQs.css"

function FAQs() {
  return (
    <section className="faqs" id="faqs">
      <div className="faqsHeader">
        <p className="faqsLabel">FREQUENTLY ASKED QUESTIONS</p>
        <h2>Got Questions?</h2>
        <p className="faqsDescription">
          Here are some answers to help you get started with LaundryDuck.
        </p>
      </div>

      <div className="faqsGrid">
        <article className="faqCard">
          <h3 className="faqQuestion">
            What is LaundryDuck?
          </h3>
          <p className="faqAnswer">
            LaundryDuck is a laundry service that makes it easier to
            get your clothes washed, dried, and folded.
          </p>
        </article>

        <article className="faqCard">
          <h3 className="faqQuestion">
            How do I book a laundry service?
          </h3>
          <p className="faqAnswer">
            Create an account, choose your preferred service, and
            submit a booking through our platform.
          </p>
        </article>

        <article className="faqCard">
          <h3 className="faqQuestion">
            Do you offer pickup and delivery?
          </h3>
          <p className="faqAnswer">
            Yes, LaundryDuck is designed to make laundry more
            convenient with pickup and delivery options.
          </p>
        </article>

        <article className="faqCard">
          <h3 className="faqQuestion">
            How much does the service cost?
          </h3>
          <p className="faqAnswer">
            The cost depends on the service you choose and the
            amount of laundry. You can check the available rates
            when making a booking.
          </p>
        </article>

        <article className="faqCard">
          <h3 className="faqQuestion">
            How can I track my booking?
          </h3>
          <p className="faqAnswer">
            You can check your booking status through your account
            to stay updated on your laundry order.
          </p>
        </article>

        <article className="faqCard">
          <h3 className="faqQuestion">
            How do I contact customer support?
          </h3>
          <p className="faqAnswer">
            You can reach out to the LaundryDuck team through the
            contact information provided on our platform.
          </p>
        </article>
      </div>
    </section>
  )
}

export default FAQs