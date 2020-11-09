import { CountryAddressDetails, CountryCodes } from "./types";

/**
 * Export typescript types
 */
export { AddressFields, CountryAddressDetails, CountryCodes } from "./types";

/**
 * Postal Address Field Names
 *
 * @example
 * // Get a specific country by ISO
 * const details = countryAddressDetails.find((i) => i.iso === countryISO);
 *
 * @example
 * // Get a country name from a code
 * const details = countryAddressDetails.find((i) => i.iso === countryISO);
 * return details.name;
 */
const postalAddressCountries: CountryAddressDetails[] = [
  {
    name: "Afghanistan",
    iso: CountryCodes.AF,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Aland Islands",
    iso: CountryCodes.AX,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Albania",
    iso: CountryCodes.AL,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Algeria",
    iso: CountryCodes.DZ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "American Samoa",
    iso: CountryCodes.AS,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "State",
      postalCode: "ZIP code",
    },
  },
  {
    name: "Andorra",
    iso: CountryCodes.AD,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Angola",
    iso: CountryCodes.AO,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Anguilla",
    iso: CountryCodes.AI,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Antarctica",
    iso: CountryCodes.AQ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Antigua and Barbuda",
    iso: CountryCodes.AG,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Argentina",
    iso: CountryCodes.AR,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "State",
    },
  },
  {
    name: "Armenia",
    iso: CountryCodes.AM,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "Province",
    },
  },
  {
    name: "Aruba",
    iso: CountryCodes.AW,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Australia",
    iso: CountryCodes.AU,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City/suburb",
      administrativeArea: "State",
      postalCode: "Postcode",
    },
  },
  {
    name: "Austria",
    iso: CountryCodes.AT,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Azerbaijan",
    iso: CountryCodes.AZ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Bahamas",
    iso: CountryCodes.BS,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Island",
    },
  },
  {
    name: "Bahrain",
    iso: CountryCodes.BH,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Bangladesh",
    iso: CountryCodes.BD,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Barbados",
    iso: CountryCodes.BB,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Belarus",
    iso: CountryCodes.BY,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "Province",
    },
  },
  {
    name: "Belgium",
    iso: CountryCodes.BE,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Belize",
    iso: CountryCodes.BZ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "State",
    },
  },
  {
    name: "Benin",
    iso: CountryCodes.BJ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Bermuda",
    iso: CountryCodes.BM,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Bhutan",
    iso: CountryCodes.BT,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Bolivia",
    iso: CountryCodes.BO,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Bosnia and Herzegovina",
    iso: CountryCodes.BA,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Botswana",
    iso: CountryCodes.BW,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Bouvet Island",
    iso: CountryCodes.BV,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Brazil",
    iso: CountryCodes.BR,
    fields: {
      addressLine1: "Thoroughfare",
      addressLine2: "Complement",
      dependentLocality: "Neighborhood",
      locality: "City",
      administrativeArea: "State",
      postalCode: "Postal code",
    },
  },
  {
    name: "British Indian Ocean Territory",
    iso: CountryCodes.IO,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "British Virgin Islands",
    iso: CountryCodes.VG,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Brunei",
    iso: CountryCodes.BN,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Bulgaria",
    iso: CountryCodes.BG,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Burkina Faso",
    iso: CountryCodes.BF,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Burundi",
    iso: CountryCodes.BI,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Cambodia",
    iso: CountryCodes.KH,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Cameroon",
    iso: CountryCodes.CM,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Canada",
    iso: CountryCodes.CA,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Province",
      postalCode: "Postal code",
    },
  },
  {
    name: "Cape Verde",
    iso: CountryCodes.CV,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "Island",
    },
  },
  {
    name: "Cayman Islands",
    iso: CountryCodes.KY,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      administrativeArea: "Island",
    },
  },
  {
    name: "Central African Republic",
    iso: CountryCodes.CF,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Chad",
    iso: CountryCodes.TD,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Chile",
    iso: CountryCodes.CL,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "State",
    },
  },
  {
    name: "China",
    iso: CountryCodes.CN,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      dependentLocality: "District",
      locality: "City",
      administrativeArea: "Province",
      postalCode: "Postal code",
    },
  },
  {
    name: "Christmas Island",
    iso: CountryCodes.CX,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Province",
      postalCode: "Postal code",
    },
  },
  {
    name: "Cocos (Keeling) Islands",
    iso: CountryCodes.CC,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Province",
      postalCode: "Postal code",
    },
  },
  {
    name: "Colombia",
    iso: CountryCodes.CO,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Comoros",
    iso: CountryCodes.KM,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Congo (Brazzaville)",
    iso: CountryCodes.CG,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Congo (Kinshasa)",
    iso: CountryCodes.CD,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Cook Islands",
    iso: CountryCodes.CK,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Costa Rica",
    iso: CountryCodes.CR,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Cuba",
    iso: CountryCodes.CU,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Croatia",
    iso: CountryCodes.HR,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "CuraÁao",
    iso: CountryCodes.CW,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Cyprus",
    iso: CountryCodes.CY,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Czech Republic",
    iso: CountryCodes.CZ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Denmark",
    iso: CountryCodes.DK,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Djibouti",
    iso: CountryCodes.DJ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Dominica",
    iso: CountryCodes.DM,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Dominican Republic",
    iso: CountryCodes.DO,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "State",
    },
  },
  {
    name: "Ecuador",
    iso: CountryCodes.EC,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Egypt",
    iso: CountryCodes.EG,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Governorate",
      postalCode: "Postal code",
    },
  },
  {
    name: "El Salvador",
    iso: CountryCodes.SV,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "Province",
    },
  },
  {
    name: "Equatorial Guinea",
    iso: CountryCodes.GQ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Eritrea",
    iso: CountryCodes.ER,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Estonia",
    iso: CountryCodes.EE,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Ethiopia",
    iso: CountryCodes.ET,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Falkland Islands",
    iso: CountryCodes.FK,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Faroe Islands",
    iso: CountryCodes.FO,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Fiji",
    iso: CountryCodes.FJ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "State",
    },
  },
  {
    name: "Finland",
    iso: CountryCodes.FI,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "France",
    iso: CountryCodes.FR,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "French Guiana",
    iso: CountryCodes.GF,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "French Polynesia",
    iso: CountryCodes.PF,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "Island",
    },
  },
  {
    name: "French Southern Territories",
    iso: CountryCodes.TF,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Gabon",
    iso: CountryCodes.GA,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Gambia",
    iso: CountryCodes.GM,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Georgia",
    iso: CountryCodes.GE,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Germany",
    iso: CountryCodes.DE,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Ghana",
    iso: CountryCodes.GH,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Gibraltar",
    iso: CountryCodes.GI,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
    },
  },
  {
    name: "Greece",
    iso: CountryCodes.GR,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Greenland",
    iso: CountryCodes.GL,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Grenada",
    iso: CountryCodes.GD,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Guadeloupe",
    iso: CountryCodes.GP,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Guam",
    iso: CountryCodes.GU,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "State",
      postalCode: "ZIP code",
    },
  },
  {
    name: "Guatemala",
    iso: CountryCodes.GT,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Guernsey",
    iso: CountryCodes.GG,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Guinea",
    iso: CountryCodes.GN,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Guinea-Bissau",
    iso: CountryCodes.GW,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Guyana",
    iso: CountryCodes.GY,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Haiti",
    iso: CountryCodes.HT,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Heard Island and McDonald Islands",
    iso: CountryCodes.HM,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Honduras",
    iso: CountryCodes.HN,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Province",
      postalCode: "Postal code",
    },
  },
  {
    name: "Hong Kong S.A.R., China",
    iso: CountryCodes.HK,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "District",
      administrativeArea: "Area",
    },
  },
  {
    name: "Hungary",
    iso: CountryCodes.HU,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Iceland",
    iso: CountryCodes.IS,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "India",
    iso: CountryCodes.IN,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "State",
      postalCode: "PIN code",
    },
  },
  {
    name: "Indonesia",
    iso: CountryCodes.ID,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City/regency",
      postalCode: "Postal code",
      administrativeArea: "Province",
    },
  },
  {
    name: "Iran",
    iso: CountryCodes.IR,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      dependentLocality: "Neighborhood",
      locality: "City",
      administrativeArea: "Province",
      postalCode: "Postal code",
    },
  },
  {
    name: "Iraq",
    iso: CountryCodes.IQ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Province",
      postalCode: "Postal code",
    },
  },
  {
    name: "Ireland",
    iso: CountryCodes.IE,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "Town/city",
      postalCode: "EIR Code",
      administrativeArea: "County",
    },
  },
  {
    name: "Isle of Man",
    iso: CountryCodes.IM,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Israel",
    iso: CountryCodes.IL,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Italy",
    iso: CountryCodes.IT,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "Province",
    },
  },
  {
    name: "Ivory Coast",
    iso: CountryCodes.CI,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Jamaica",
    iso: CountryCodes.JM,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Parish",
    },
  },
  {
    name: "Japan",
    iso: CountryCodes.JP,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "Prefecture",
    },
  },
  {
    name: "Jersey",
    iso: CountryCodes.JE,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Jordan",
    iso: CountryCodes.JO,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "State",
      postalCode: "Postal code",
    },
  },
  {
    name: "Kazakhstan",
    iso: CountryCodes.KZ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "Province",
    },
  },
  {
    name: "Kenya",
    iso: CountryCodes.KE,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Kiribati",
    iso: CountryCodes.KI,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Island",
    },
  },
  {
    name: "Kuwait",
    iso: CountryCodes.KW,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "State",
    },
  },
  {
    name: "Kyrgyzstan",
    iso: CountryCodes.KG,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Laos",
    iso: CountryCodes.LA,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Latvia",
    iso: CountryCodes.LV,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Lebanon",
    iso: CountryCodes.LB,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Lesotho",
    iso: CountryCodes.LS,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Liberia",
    iso: CountryCodes.LR,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Libya",
    iso: CountryCodes.LY,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Liechtenstein",
    iso: CountryCodes.LI,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Lithuania",
    iso: CountryCodes.LT,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Luxembourg",
    iso: CountryCodes.LU,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Macao S.A.R., China",
    iso: CountryCodes.MO,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Macedonia",
    iso: CountryCodes.MK,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Madagascar",
    iso: CountryCodes.MG,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Malawi",
    iso: CountryCodes.MW,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Malaysia",
    iso: CountryCodes.MY,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      dependentLocality: "Village/township",
      locality: "City",
      administrativeArea: "State",
      postalCode: "Postal code",
    },
  },
  {
    name: "Maldives",
    iso: CountryCodes.MV,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Mali",
    iso: CountryCodes.ML,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Malta",
    iso: CountryCodes.MT,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Marshall Islands",
    iso: CountryCodes.MH,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "State",
      postalCode: "ZIP code",
    },
  },
  {
    name: "Martinique",
    iso: CountryCodes.MQ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Mauritania",
    iso: CountryCodes.MR,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Mauritius",
    iso: CountryCodes.MU,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Mayotte",
    iso: CountryCodes.YT,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Mexico",
    iso: CountryCodes.MX,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      dependentLocality: "Neighborhood",
      locality: "City",
      administrativeArea: "State",
      postalCode: "Postal code",
    },
  },
  {
    name: "Micronesia",
    iso: CountryCodes.FM,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "State",
      postalCode: "ZIP code",
    },
  },
  {
    name: "Moldova",
    iso: CountryCodes.MD,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Monaco",
    iso: CountryCodes.MC,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Mongolia",
    iso: CountryCodes.MN,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Province",
      postalCode: "Postal code",
    },
  },
  {
    name: "Montenegro",
    iso: CountryCodes.ME,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Montserrat",
    iso: CountryCodes.MS,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Morocco",
    iso: CountryCodes.MA,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Mozambique",
    iso: CountryCodes.MZ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "Province",
    },
  },
  {
    name: "Myanmar",
    iso: CountryCodes.MM,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Namibia",
    iso: CountryCodes.NA,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Nauru",
    iso: CountryCodes.NR,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      administrativeArea: "District",
    },
  },
  {
    name: "Nepal",
    iso: CountryCodes.NP,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Netherlands",
    iso: CountryCodes.NL,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Netherlands Antilles",
    iso: CountryCodes.AN,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "New Caledonia",
    iso: CountryCodes.NC,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "New Zealand",
    iso: CountryCodes.NZ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "Town/city",
      administrativeArea: "Region",
      postalCode: "Postcode",
    },
  },
  {
    name: "Nicaragua",
    iso: CountryCodes.NI,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "Department",
    },
  },
  {
    name: "Niger",
    iso: CountryCodes.NE,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Nigeria",
    iso: CountryCodes.NG,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "State",
      postalCode: "Postal code",
    },
  },
  {
    name: "Niue",
    iso: CountryCodes.NU,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Norfolk Island",
    iso: CountryCodes.NF,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Province",
      postalCode: "Postal code",
    },
  },
  {
    name: "Northern Mariana Islands",
    iso: CountryCodes.MP,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "State",
      postalCode: "ZIP code",
    },
  },
  {
    name: "North Korea",
    iso: CountryCodes.KP,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Norway",
    iso: CountryCodes.NO,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Oman",
    iso: CountryCodes.OM,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
      administrativeArea: "State",
    },
  },
  {
    name: "Pakistan",
    iso: CountryCodes.PK,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Palau",
    iso: CountryCodes.PW,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "State",
      postalCode: "ZIP code",
    },
  },
  {
    name: "Palestinian Territory",
    iso: CountryCodes.PS,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Panama",
    iso: CountryCodes.PA,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Province",
    },
  },
  {
    name: "Papua New Guinea",
    iso: CountryCodes.PG,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Province",
      postalCode: "Postal code",
    },
  },
  {
    name: "Paraguay",
    iso: CountryCodes.PY,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Peru",
    iso: CountryCodes.PE,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      administrativeArea: "Region",
      locality: "District",
    },
  },
  {
    name: "Philippines",
    iso: CountryCodes.PH,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      dependentLocality: "Suburb",
      locality: "City",
      administrativeArea: "Province",
      postalCode: "Postal code",
    },
  },
  {
    name: "Pitcairn",
    iso: CountryCodes.PN,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Poland",
    iso: CountryCodes.PL,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Portugal",
    iso: CountryCodes.PT,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Puerto Rico",
    iso: CountryCodes.PR,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "ZIP code",
    },
  },
  {
    name: "Qatar",
    iso: CountryCodes.QA,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Reunion",
    iso: CountryCodes.RE,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Romania",
    iso: CountryCodes.RO,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Russia",
    iso: CountryCodes.RU,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Province",
      postalCode: "Postal code",
    },
  },
  {
    name: "Rwanda",
    iso: CountryCodes.RW,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Saint BarthÈlemy",
    iso: CountryCodes.BL,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Saint Helena",
    iso: CountryCodes.SH,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Saint Kitts and Nevis",
    iso: CountryCodes.KN,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Island",
    },
  },
  {
    name: "Saint Lucia",
    iso: CountryCodes.LC,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Saint Martin (French part)",
    iso: CountryCodes.MF,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Saint Pierre and Miquelon",
    iso: CountryCodes.PM,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Saint Vincent and the Grenadines",
    iso: CountryCodes.VC,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Samoa",
    iso: CountryCodes.WS,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "San Marino",
    iso: CountryCodes.SM,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Sao Tome and Principe",
    iso: CountryCodes.ST,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Saudi Arabia",
    iso: CountryCodes.SA,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Senegal",
    iso: CountryCodes.SN,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Serbia",
    iso: CountryCodes.RS,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Seychelles",
    iso: CountryCodes.SC,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Island",
    },
  },
  {
    name: "Sierra Leone",
    iso: CountryCodes.SL,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Singapore",
    iso: CountryCodes.SG,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Slovakia",
    iso: CountryCodes.SK,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Slovenia",
    iso: CountryCodes.SI,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Solomon Islands",
    iso: CountryCodes.SB,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Somalia",
    iso: CountryCodes.SO,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Province",
      postalCode: "Postal code",
    },
  },
  {
    name: "South Africa",
    iso: CountryCodes.ZA,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "Province",
    },
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    iso: CountryCodes.GS,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "South Korea",
    iso: CountryCodes.KR,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      dependentLocality: "District",
      locality: "City",
      administrativeArea: "Province",
      postalCode: "Postal code",
    },
  },
  {
    name: "Spain",
    iso: CountryCodes.ES,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "Province",
    },
  },
  {
    name: "Sri Lanka",
    iso: CountryCodes.LK,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Sudan",
    iso: CountryCodes.SD,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Suriname",
    iso: CountryCodes.SR,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Province",
    },
  },
  {
    name: "Svalbard and Jan Mayen",
    iso: CountryCodes.SJ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Swaziland",
    iso: CountryCodes.SZ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Sweden",
    iso: CountryCodes.SE,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Switzerland",
    iso: CountryCodes.CH,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Syria",
    iso: CountryCodes.SY,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Taiwan",
    iso: CountryCodes.TW,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "State",
    },
  },
  {
    name: "Tajikistan",
    iso: CountryCodes.TJ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Tanzania",
    iso: CountryCodes.TZ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Thailand",
    iso: CountryCodes.TH,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      dependentLocality: "Suburb",
      locality: "City",
      administrativeArea: "Province",
      postalCode: "Postal code",
    },
  },
  {
    name: "Timor-Leste",
    iso: CountryCodes.TL,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Togo",
    iso: CountryCodes.TG,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Tokelau",
    iso: CountryCodes.TK,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Tonga",
    iso: CountryCodes.TO,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Trinidad and Tobago",
    iso: CountryCodes.TT,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Tunisia",
    iso: CountryCodes.TN,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Turkey",
    iso: CountryCodes.TR,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      administrativeArea: "Province",
      locality: "City",
    },
  },
  {
    name: "Turkmenistan",
    iso: CountryCodes.TM,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Turks and Caicos Islands",
    iso: CountryCodes.TC,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Tuvalu",
    iso: CountryCodes.TV,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Island",
    },
  },
  {
    name: "U.S. Virgin Islands",
    iso: CountryCodes.VI,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "State",
      postalCode: "Postal code",
    },
  },
  {
    name: "Uganda",
    iso: CountryCodes.UG,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Ukraine",
    iso: CountryCodes.UA,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "Region",
      postalCode: "Postal code",
    },
  },
  {
    name: "United Arab Emirates",
    iso: CountryCodes.AE,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      administrativeArea: "Emirate",
    },
  },
  {
    name: "United Kingdom",
    iso: CountryCodes.GB,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "Town/city",
      administrativeArea: "County",
      postalCode: "Postcode",
    },
  },
  {
    name: "United States",
    iso: CountryCodes.US,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "State",
      postalCode: "ZIP code",
    },
  },
  {
    name: "United States Minor Outlying Islands",
    iso: CountryCodes.UM,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "State",
      postalCode: "ZIP code",
    },
  },
  {
    name: "Uruguay",
    iso: CountryCodes.UY,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "State",
    },
  },
  {
    name: "Uzbekistan",
    iso: CountryCodes.UZ,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      postalCode: "Postal code",
    },
  },
  {
    name: "Vanuatu",
    iso: CountryCodes.VU,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
  {
    name: "Vatican",
    iso: CountryCodes.VA,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Venezuela",
    iso: CountryCodes.VE,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
      administrativeArea: "State",
    },
  },
  {
    name: "Vietnam",
    iso: CountryCodes.VN,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "State",
      postalCode: "Postal code",
    },
  },
  {
    name: "Wallis and Futuna",
    iso: CountryCodes.WF,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Western Sahara",
    iso: CountryCodes.EH,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Yemen",
    iso: CountryCodes.YE,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Zambia",
    iso: CountryCodes.ZM,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      postalCode: "Postal code",
      locality: "City",
    },
  },
  {
    name: "Zimbabwe",
    iso: CountryCodes.ZW,
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
    },
  },
];

export default postalAddressCountries;
