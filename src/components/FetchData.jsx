import { useState, useEffect } from "react";

const FetchData = ({ datatype, sensornumber }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const getData = () => {
      fetch("/data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (myJson) {
          let foundValue = 0;
          myJson.forEach((data) => {
            if (data[datatype]) {
              data[datatype].forEach((entry) => {
                if (entry[sensornumber]) {
                  foundValue = entry[sensornumber];
                }
              });
            }
          });

          // Set the value based on the found value
          console.log(foundValue);
          setValue(foundValue);
        });
    };
    const interval = setInterval(() => {
      getData();
    }, 1000);
    return () => clearInterval(interval);
  }, [value, sensornumber, datatype]);

  return value;
};

export default FetchData;
