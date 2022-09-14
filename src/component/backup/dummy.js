const getToken = async () => {
  const response = await axios.post(
    "https://yabxdemo-in.yabx.co/apis/v1/auth/token",
    {
      client_secret:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJ0bmVyX2NvZGUiOiJ5YWJ4ZGVtb19pbiIsIm9zIjoid2ViX2FwcGxpY2F0aW9uIiwicGFja2FnZV9pZCI6ImY4ODcyM2RjMzliOTJlZTUiLCJjbGllbnRfa2V5IjoiYzBhNDliMjctNGI5Yi00NjU4LTk2YTMtOGU1YzQ2YTg2YzQwIn0.asTHljqR3Gr9EgkMpkrDskbgidJw6B3KFpcz0du_PUs",
    },
    {
      headers: {
        partnercode: "yabxdemo_in",
        os: "web_application",
        packageid: "f88723dc39b92ee5",
      },
    }
  );
  if (Object.keys(response).length === 0) {
    return;
  }
};
