# postal-address-field-names

[![Built with
typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://www.typescriptlang.org/)
[![version](https://badgen.net/npm/v/postal-address-field-names)](https://www.npmjs.com/package/postal-address-field-names)
![dependants](https://badgen.net/npm/dependents/postal-address-field-names) ![license](https://badgen.net/npm/license/postal-address-field-names)

This module exports address field names for every country, in English. This is
useful as many countries have subtle differences in field names (e.g. Postcode
in the UK vs ZIP code in the US). It is based on the Oasis XAL standard for addresses.

The output is c.33kb (minified) with no dependencies, and it will work on both node & the browser. It also includes
Typescript types for your convenience.

## Sample

```javascript
[
  //...
  {
    name: "United Kingdom",
    iso: "GB",
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
    iso: "US",
    fields: {
      addressLine1: "Address 1",
      addressLine2: "Address 2",
      locality: "City",
      administrativeArea: "State",
      postalCode: "ZIP code",
    },
  },
  //...
];
```

Note that several fields are excluded from this array to save space, as they
exist (and are named the same) for all countries. These are:

- givenName
- additionalNames
- familyName
- organisation
- sortingCode - Rarely used so this is omitted, but some regions use sorting
  code as well as postal code (often users will place this in address line 2 instead).
- country

## Use

### Get field names for a specific country

```typescript
import countryAddressDetails, {
  CountryCodes,
} from "postal-address-field-names";

function getFieldNames(countryISO: CountryCodes) {
  const countryISO = "GB";
  const country = countryAddressDetails.find(
    (country) => country.iso === countryISO
  );
  return country.fields;
}
```

### Typescript Helpers

The module includes a few useful Typescript helpers:

- CountryCodes - ENUM with each 2-letter country code in capital letters
- AddressFields - Full OASIS XAL address field names interface
- CountryAddressDetails - The type exported by this module (as `Array<CountryAddressDetails>`)

## Built by Skyhook

This module is contributed by the team at [Skyhook](https://www.skyhookadventure.com/)
