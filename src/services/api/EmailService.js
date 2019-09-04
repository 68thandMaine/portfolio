const EmailService = {
  sendEmail: async (email) => {
    console.log(email)
    const response = await fetch(process.env.REACT_APP_EMAIL_URL,{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        user_id: process.env.REACT_APP_USER_ID,
        service_id: process.env.REACT_APP_SERVICE_ID,
        template_id: process.env.REACT_APP_TEMPLATE_ID,
        template_params: email
      }) 
    });
    return response.statusText;
  },
  filterSpam: (message) => {
    const messageFields = Object.keys(message);
    for(let i=0; i<messageFields.length; i++ ) {
      if (messageFields[i] === 'hpFirstname' || messageFields[i] === 'hpLastName' || messageFields[i] === 'hpEmail' || messageFields[i] === 'hpMessage'){
        return true;
      }
    }
  },
};

export default EmailService;