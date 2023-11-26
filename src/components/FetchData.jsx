import { useState, useEffect } from "react";

const FetchData = ({ datatype, sensornumber }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const getData = () => {
      fetch("/" + datatype + ".json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          //console.log(response);
          return response.json();
        })
        .then(function (myJson) {
          // Set the value based on the found value
          console.log(myJson[sensornumber]);
          setValue(myJson[sensornumber]);
        });
    };
    const interval = setInterval(() => {
      getData();
    }, 1000);
    return () => clearInterval(interval);
  }, [sensornumber, datatype]);

  return value;
};

export default FetchData;
