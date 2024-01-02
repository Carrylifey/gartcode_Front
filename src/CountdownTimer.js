import React, { useEffect, useState } from "react";
import CompanyLogo from "./images/provoke.webp";
import "./index.css";
const CountdownTimer = ({ colorChange }) => {
  const initialCountdown = {
    days: 31,
    hours: 14,
    minutes: 59,
    seconds: 59,
  };
  const storedCountdown =
    JSON.parse(localStorage.getItem("countdown")) || initialCountdown;
  const [countdown, setCountdown] = useState(storedCountdown);

  useEffect(() => {
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + storedCountdown.days);
    countDownDate.setHours(countDownDate.getHours() + storedCountdown.hours);
    countDownDate.setMinutes(
      countDownDate.getMinutes() + storedCountdown.minutes
    );
    countDownDate.setSeconds(
      countDownDate.getSeconds() + storedCountdown.seconds
    );

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });

      if (distance < 0) {
        clearInterval(intervalId);
        setCountdown({
          days: 31,
          hours: 14,
          minutes: 59,
          seconds: 59,
        });
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [storedCountdown]);

  // Save countdown state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("countdown", JSON.stringify(countdown));
  }, [countdown]);

  return (
    <div className="countdown">
      <div className="company_text">
        Join us on the launch of gartcod by
        <img
          src={CompanyLogo}
          className="company_logo"
          alt="company_logo"
        ></img>
      </div>
      <div className="timer-item">
        <div className="time-section animated-countdown">
          <div className="timer-value">{countdown.days}</div>
          <div className="timer-unit" style={{ color: colorChange }}>
            days
          </div>
        </div>
        <div className="time-section animated-countdown">
          <div className="timer-value">{countdown.hours}</div>
          <div className="timer-unit" style={{ color: colorChange }}>
            hours
          </div>
        </div>
        <div className="time-section animated-countdown">
          <div className="timer-value">{countdown.minutes}</div>
          <div className="timer-unit" style={{ color: colorChange }}>
            minutes
          </div>
        </div>
        <div className="time-section animated-countdown">
          <div className="timer-value">{countdown.seconds}</div>
          <div className="timer-unit" style={{ color: colorChange }}>
            seconds
          </div>
        </div>
      </div>
      <button className="button" style={{ backgroundColor: colorChange }}>
        Claim Ticket
      </button>
    </div>
  );
};

export default CountdownTimer;
