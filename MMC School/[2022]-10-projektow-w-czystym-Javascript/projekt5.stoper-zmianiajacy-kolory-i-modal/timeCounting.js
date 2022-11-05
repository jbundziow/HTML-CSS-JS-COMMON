      'use strict'

      /* FUNCTION THAT CONVERTS E.G. '3' MINS INTO '03' MINS */
      const addLeadingZeros = (num, totalLength) => String(num).padStart(totalLength,'0');
      

      const convertSecondsToMinutesAndSeconds = (seconds) => {
        const outputMinutes = Math.floor(seconds / 60);
        const outputSeconds = ((seconds % 60)).toFixed(0);
        return `${outputMinutes}:${addLeadingZeros(outputSeconds,2)}`;
      }



      //export
      export {convertSecondsToMinutesAndSeconds}