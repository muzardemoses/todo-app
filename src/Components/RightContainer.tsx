// import React, { useEffect } from 'react';
// import Datepicker from 'flowbite-datepicker/Datepicker';

import { useState } from "react";
import moment from 'moment';

export const RightContainer = () => {
    /// Function to generate a random duration between 10 minutes and 3 hours with a random start time
    const generateRandoDuration = () => {
        const minMinutes = 10; // Minimum duration in minutes
        const maxMinutes = 180; // Maximum duration in minutes (3 hours)

        // Generate a random duration in minutes
        const randomMinutes = Math.floor(Math.random() * (maxMinutes - minMinutes + 1)) + minMinutes;

        // Generate a random start time between 12:00 AM (00:00) and 9:00 PM (21:00)
        const randomStartHour = Math.floor(Math.random() * 22); // Hours between 0 and 21
        const randomStartMinute = Math.floor(Math.random() * 60); // Minutes between 0 and 59

        // Create Moment.js objects for start and end times
        const startTime = moment({ hour: randomStartHour, minute: randomStartMinute });
        const endTime = moment(startTime).add(randomMinutes, 'minutes');

        // Format the duration string
        const durationString = `${startTime.format('h:mm A')} - ${endTime.format('h:mm A')}`;

        return durationString;
    };

    // Generate 30 random durations
    const predefinedDurations = Array.from({ length: 30 }, generateRandoDuration);

    // Example usage:
    console.log(predefinedDurations);


    // useEffect(() => {
    //     const datepickerEl = document.getElementById('datepickerId');
    //     const datepicker = new Datepicker(datepickerEl, {
    //         inline: true,
    //         range: true,
    //         multiple: true,
    //         dateFormat: 'd-m-Y',
    //         minDate: 'today',
    //     });

    //     // Optional: You can add event listeners or perform other actions with the datepicker here if needed.

    //     // Clean up the datepicker when the component unmounts
    //     return () => {
    //         datepicker.destroy();
    //     };
    // }, []);
    const [durations, setDurations] = useState<string[]>([]);

    const generateRandomDuration = () => {
        const currentTime = new Date();
        const startTime = new Date(currentTime);
        const endTime = new Date(currentTime);

        // Generate random duration between 5 minutes and 3 hours
        const randomMinutes = Math.floor(Math.random() * (180 - 5 + 1)) + 5;
        endTime.setMinutes(currentTime.getMinutes() + randomMinutes);

        // Format the start and end times as "hh:mm am/pm"
        const formattedStartTime = startTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
        const formattedEndTime = endTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });

        const duration = `${formattedStartTime} - ${formattedEndTime}`;
        setDurations([...durations, duration]);
    };
    return (
        <div>
            {/* Your other content here
            <div id="datepickerId"></div> */}
            <h1>Random Durations</h1>
            <button onClick={generateRandomDuration}>Generate</button>
            <ul>
                {durations.map((duration, index) => (
                    <li key={index}>{duration}</li>
                ))}
            </ul>
        </div>
    );
};
