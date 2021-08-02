import axios from "axios";

const getLocation = ({ setLocation }) => {
  axios
    .get(
      "https://ipgeolocation.abstractapi.com/v1/?api_key=d90cd3aecf1b462ca5b352334f6616a5"
    )
    .then((res) => setLocation(res.data.country))
    .catch(() => console.error("Something went wrong!"));
};

export default getLocation;
