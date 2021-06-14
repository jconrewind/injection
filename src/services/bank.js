module.exports = ({ logger }) => ({
  getCash: () => 1,
  total: (cash) => {
    if (logger) {
      logger.write(`check cash: ${cash}`);
    }
    return cash;
  },
});
