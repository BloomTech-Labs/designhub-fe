export const ONBOARD_SUCCESS = 'ONBOARD_SUCCESS';
export const onboardSuccess = user => ({
  payload: user,
  type: ONBOARD_SUCCESS
});
export const ONBOARD_START = 'ONBOARD_START';
export const onboardStart = () => ({
  type: ONBOARD_START
});
