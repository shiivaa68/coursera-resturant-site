import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [ocasion, setOcasion] = useState("");

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">choose date</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>
            <div>
              <label htmlFor="book-time">choose time</label>
              <select
                id="book-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option>select a time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests</label>
              <input
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="book-occasion">Occation</label>
              <select
                id="book-occasion"
                key={ocasion}
                value={ocasion}
                onChange={(e) => setOcasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div>
              <input
                aria-label="On Click"
                type="submit"
                value={"make your reservasion"}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
