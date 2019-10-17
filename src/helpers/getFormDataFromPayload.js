export default function getFormDataFromPayload(payload) {
  const formData = new FormData();

  for(const payloadKey in payload) {
    if (Object.prototype.hasOwnProperty.call(payload,  payloadKey)) {
      formData.set(payloadKey, payload[payloadKey]);
    }
  }
  return formData;
}
