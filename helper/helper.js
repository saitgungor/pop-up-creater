export const sendPostRequest = (URL, configurationFile) => {
  console.log(`URL: ${URL}`, configurationFile);
  fetch(
    `${URL || 'https://hook.eu1.make.com/frwu77c5mrw4acstxy0caxgp9b2a1grf'}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(configurationFile),
    }
  );
};
