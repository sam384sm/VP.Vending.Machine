const Config = {
    baseApiUrl: "https://localhost:7062",
  };
  
  const currencyFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 2,
  });
  
  export default Config;
  export { currencyFormatter };