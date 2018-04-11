// This file is from the Busy.org Github repo (April 11, 2018): https://github.com/busyorg/busy

export const jsonParse = str => {
  try {
    return jsonParse(JSON.parse(str));
  } catch (e) {
    return str;
  }
};

export const epochToUTC = epochTimestamp => new Date(0).setUTCSeconds(epochTimestamp);

export default jsonParse;
