const currencyCodes = [
  "AED",
  "AFN",
  "XCD",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "AQD",
  "ARS",
  "AUD",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "XOF",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "NOK",
  "BWP",
  "BYR",
  "BZD",
  "CAD",
  "CDF",
  "XAF",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CUP",
  "CVE",
  "CYP",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "ECS",
  "EEK",
  "EGP",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "GBP",
  "GEL",
  "GGP",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KMF",
  "KPW",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LTL",
  "LVL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRO",
  "MTL",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "XPF",
  "NGN",
  "NIO",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SKK",
  "SLL",
  "SOS",
  "SRD",
  "STD",
  "SVC",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "USD",
  "UYU",
  "UZS",
  "VEF",
  "VND",
  "VUV",
  "YER",
  "ZAR",
  "ZMK",
  "ZWD",
];

// Get a NodeList of all select inputs on the page
let selectInputs = document.querySelectorAll("select");
console.log(selectInputs);
// Loop through each select input
selectInputs.forEach((selectInput) => {
  for (let i = 0; i < currencyCodes.length; i++) {
    let option = document.createElement("option");
    //    console.log(code);
    option.value = currencyCodes[i];
    option.text = currencyCodes[i];
    selectInput.appendChild(option);
  }
});
