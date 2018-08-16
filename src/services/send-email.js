import axios from "axios";

/* istanbul ignore next */
const generateEmailText = fields => {
  const {
    attending,
    dessert,
    dietaryRequirements,
    fullName,
    main,
    starter
  } = fields;

  return `
  Hello there,

  ${fullName} has just submitted an RSVP to your wedding.

  Attending: ${attending}.
  ${attending === "Yes" &&
    `
  Starter: ${starter}.
  Main: ${main}.
  Dessert: ${dessert}.
  ${dietaryRequirements && `Dietary Requirements: ${dietaryRequirements}.`}
`}

Have a great day.

The RSVP Bot

(°◡°♡).:｡`;
};

const sendEmail = fields => {
  const text = generateEmailText(fields);

  return axios({
    method: "POST",
    url: process.env.REACT_APP_MAIL_API_URL,
    data: {
      from: `The RSVP Bot <rsvp@${process.env.REACT_APP_MAILGUN_DOMAIN}>`,
      to: process.env.REACT_APP_RSVP_EMAIL,
      subject: "You have recieved an RSVP to your wedding",
      text
    }
  });
};

export default sendEmail;
