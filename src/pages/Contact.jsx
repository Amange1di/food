


const Contact = () => {
    return (
        <div className="contact-us">
            <div className="contact-content">
                <h1 className="title">Contact Us</h1>
                <h2 className="h2-title">We consider all the drivers of change gives you the components you need to change to create a truly happens.</h2>
                <div className="contact-form">
                    <div className="name-email flex">
                        <div>
                            <h5>Name</h5>
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div>
                            <h5>Phone</h5>
                            <input type="text" placeholder="Enter your address" />
                        </div>
                    </div>
                    <div className="subject">
                        <h5>Subject</h5>
                        <input type="text" placeholder="Write a subject" />

                    </div>
                    <div className="message">
                        <h5>Message</h5>
                        <input type="text" placeholder="Write your message" />

                    </div>
                    <div className="book-btn">
                        <button className="btn brown-btn">Book A Table</button>
                    </div>
                </div>
            </div>

            <div className="call-us">
                <div>
                    <h5>Call Us:</h5>
                    <h4>+1-234-567-8900</h4>
                </div>
                <div>
                    <h5>Hours:</h5>
                    <p className="ttt">Mon-Fri: 11am - 8pm Sat, Sun: 9am - 10pm</p>
                </div>
                <div>
                    <h5>Our Location:</h5>
                    <p className="yyy">123 Bridge Street <br /> Nowhere Land,LA 12345 United States</p>
                </div>

            </div>

        </div>
    )
}

export default Contact