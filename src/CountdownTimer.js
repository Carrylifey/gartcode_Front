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

  const [countdown, setCountdown] = useState(initialCountdown);

  useEffect(() => {
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + initialCountdown.days);
    countDownDate.setHours(countDownDate.getHours() + initialCountdown.hours);
    countDownDate.setMinutes(
      countDownDate.getMinutes() + initialCountdown.minutes
    );
    countDownDate.setSeconds(
      countDownDate.getSeconds() + initialCountdown.seconds
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
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [
    initialCountdown.days,
    initialCountdown.hours,
    initialCountdown.minutes,
    initialCountdown.seconds,
  ]);

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
        <div className="time-section">
          <div className="timer-value">{countdown.days}</div>
          <div className="timer-unit" style={{color: colorChange}}>
            days
          </div>
        </div>
        <div className="time-section">
          <div className="timer-value">{countdown.hours}</div>
          <div className="timer-unit" style={{color: colorChange}}>
            hours
          </div>
        </div>
        <div className="time-section">
          <div className="timer-value">{countdown.minutes}</div>
          <div className="timer-unit" style={{color: colorChange}}>
            minutes
          </div>
        </div>
        <div className="time-section">
          <div className="timer-value">{countdown.seconds}</div>
          <div className="timer-unit" style={{color: colorChange}}>
            seconds
          </div>
        </div>
      </div>
      <button className="button" style={{backgroundColor: colorChange }}>
        Claim Ticket
      </button>
    </div>
  );
};

export default CountdownTimer;
