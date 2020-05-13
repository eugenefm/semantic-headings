const getHeadingLevel = (auto, overide) => Math.min(overide || auto || 1, 6);

// eslint-disable-next-line import/prefer-default-export
export { getHeadingLevel };
