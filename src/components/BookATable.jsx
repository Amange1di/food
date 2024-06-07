



const BookATable = () => {
    return (
        <div className="book-a-table">
            <div className="book-content">
                <h1 className="title">Book A Table</h1>
                <h2 className="h2-title">We consider all the drivers of change gives you the components you need to change to create a truly happens.</h2>
                <div className="book-form">
                    <div className="date-time flex">
                        <div>
                            <h5>Date</h5>
                            <input type="date" />
                        </div>
                        <div>
                            <h5>Time</h5>
                            <select>
                                {["06.30 PM", "12.30 PM", "16.30 PM"].map(time => (
                                    <option value={time} key={time}>{time}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="name-phone flex">
                        <div>
                            <h5>Name</h5>
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div>
                            <h5>Phone</h5>
                            <input type="text" placeholder="x-xxx-xxx-xxxx" />
                        </div>
                    </div>
                    <div className="total-person">
                        <h5>Total Person</h5>
                        <select>
                            {[1, 2, 3].map(person => <option key={person} value={person}>{person}</option>)}
                        </select>
                    </div>
                    <div className="book-btn">
                        <button className="btn brown-btn">Book A Table</button>
                    </div>
                </div>

                <div className="google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.6485044050073!2d74.58361327613626!3d42.88026257114943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8193ec55aa3%3A0x906abe2a92e24f01!2zMTA5LzEg0YPQuy4g0KLRg9GA0YPRgdCx0LXQutC-0LLQsCwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1717150583605!5m2!1sru!2skg" width="600" height="450" 
                 allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>

        </div>
    )
}

export default BookATable