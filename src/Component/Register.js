import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
function Register() {
  const navigate = useNavigate();

  const countryOptions = [
    { code: "AF", country: "Afghanistan" },
    { code: "AX", country: "Åland Islands" },
    { code: "AL", country: "Albania" },
    { code: "DZ", country: "Algeria" },
    { code: "AS", country: "American Samoa" },
    { code: "AD", country: "Andorra" },
    { code: "AO", country: "Angola" },
    { code: "AI", country: "Anguilla" },
    { code: "AQ", country: "Antarctica" },
    { code: "AG", country: "Antigua & Barbuda" },
    { code: "AR", country: "Argentina" },
    { code: "AM", country: "Armenia" },
    { code: "AW", country: "Aruba" },
    { code: "AC", country: "Ascension Island" },
    { code: "AU", country: "Australia" },
    { code: "AT", country: "Austria" },
    { code: "AZ", country: "Azerbaijan" },
    { code: "BS", country: "Bahamas" },
    { code: "BH", country: "Bahrain" },
    { code: "BD", country: "Bangladesh" },
    { code: "BB", country: "Barbados" },
    { code: "BY", country: "Belarus" },
    { code: "BE", country: "Belgium" },
    { code: "BZ", country: "Belize" },
    { code: "BJ", country: "Benin" },
    { code: "BM", country: "Bermuda" },
    { code: "BT", country: "Bhutan" },
    { code: "BO", country: "Bolivia" },
    { code: "BA", country: "Bosnia & Herzegovina" },
    { code: "BW", country: "Botswana" },
    { code: "BV", country: "Bouvet Island" },
    { code: "BR", country: "Brazil" },
    { code: "IO", country: "British Indian Ocean Territory" },
    { code: "VG", country: "British Virgin Islands" },
    { code: "BN", country: "Brunei" },
    { code: "BG", country: "Bulgaria" },
    { code: "BF", country: "Burkina Faso" },
    { code: "BI", country: "Burundi" },
    { code: "KH", country: "Cambodia" },
    { code: "CM", country: "Cameroon" },
    { code: "CA", country: "Canada" },
    { code: "IC", country: "Canary Islands" },
    { code: "CV", country: "Cape Verde" },
    { code: "BQ", country: "Caribbean Netherlands" },
    { code: "KY", country: "Cayman Islands" },
    { code: "CF", country: "Central African Republic" },
    { code: "EA", country: "Ceuta & Melilla" },
    { code: "TD", country: "Chad" },
    { code: "CL", country: "Chile" },
    { code: "CN", country: "China" },
    { code: "CX", country: "Christmas Island" },
    { code: "CP", country: "Clipperton Island" },
    { code: "CC", country: "Cocos (Keeling) Islands" },
    { code: "CO", country: "Colombia" },
    { code: "KM", country: "Comoros" },
    { code: "CG", country: "Congo - Brazzaville" },
    { code: "CD", country: "Congo - Kinshasa" },
    { code: "CK", country: "Cook Islands" },
    { code: "CR", country: "Costa Rica" },
    { code: "CI", country: "Côte d'Ivoire" },
    { code: "HR", country: "Croatia" },
    { code: "CU", country: "Cuba" },
    { code: "CW", country: "Curaçao" },
    { code: "CY", country: "Cyprus" },
    { code: "CZ", country: "Czechia" },
    { code: "DK", country: "Denmark" },
    { code: "DG", country: "Diego Garcia" },
    { code: "DJ", country: "Djibouti" },
    { code: "DM", country: "Dominica" },
    { code: "DO", country: "Dominican Republic" },
    { code: "EC", country: "Ecuador" },
    { code: "EG", country: "Egypt" },
    { code: "SV", country: "El Salvador" },
    { code: "GQ", country: "Equatorial Guinea" },
    { code: "ER", country: "Eritrea" },
    { code: "EE", country: "Estonia" },
    { code: "SZ", country: "Eswatini" },
    { code: "ET", country: "Ethiopia" },
    { code: "FK", country: "Falkland Islands" },
    { code: "FO", country: "Faroe Islands" },
    { code: "FJ", country: "Fiji" },
    { code: "FI", country: "Finland" },
    { code: "FR", country: "France" },
    { code: "GF", country: "French Guiana" },
    { code: "PF", country: "French Polynesia" },
    { code: "TF", country: "French Southern Territories" },
    { code: "GA", country: "Gabon" },
    { code: "GM", country: "Gambia" },
    { code: "GE", country: "Georgia" },
    { code: "DE", country: "Germany" },
    { code: "GH", country: "Ghana" },
    { code: "GI", country: "Gibraltar" },
    { code: "GR", country: "Greece" },
    { code: "GL", country: "Greenland" },
    { code: "GD", country: "Grenada" },
    { code: "GP", country: "Guadeloupe" },
    { code: "GU", country: "Guam" },
    { code: "GT", country: "Guatemala" },
    { code: "GG", country: "Guernsey" },
    { code: "GN", country: "Guinea" },
    { code: "GW", country: "Guinea-Bissau" },
    { code: "GY", country: "Guyana" },
    { code: "HT", country: "Haiti" },
    { code: "HM", country: "Heard & McDonald Islands" },
    { code: "HN", country: "Honduras" },
    { code: "HK", country: "Hong Kong SAR China" },
    { code: "HU", country: "Hungary" },
    { code: "IS", country: "Iceland" },
    { code: "IN", country: "India" },
    { code: "ID", country: "Indonesia" },
    { code: "IR", country: "Iran" },
    { code: "IQ", country: "Iraq" },
    { code: "IE", country: "Ireland" },
    { code: "IM", country: "Isle of Man" },
    { code: "IL", country: "Israel" },
    { code: "IT", country: "Italy" },
    { code: "JM", country: "Jamaica" },
    { code: "JP", country: "Japan" },
    { code: "JE", country: "Jersey" },
    { code: "JO", country: "Jordan" },
    { code: "KZ", country: "Kazakhstan" },
    { code: "KE", country: "Kenya" },
    { code: "KI", country: "Kiribati" },
    { code: "XK", country: "Kosovo" },
    { code: "KW", country: "Kuwait" },
    { code: "KG", country: "Kyrgyzstan" },
    { code: "LA", country: "Laos" },
    { code: "LV", country: "Latvia" },
    { code: "LB", country: "Lebanon" },
    { code: "LS", country: "Lesotho" },
    { code: "LR", country: "Liberia" },
    { code: "LY", country: "Libya" },
    { code: "LI", country: "Liechtenstein" },
    { code: "LT", country: "Lithuania" },
    { code: "LU", country: "Luxembourg" },
    { code: "MO", country: "Macao SAR China" },
    { code: "MG", country: "Madagascar" },
    { code: "MW", country: "Malawi" },
    { code: "MY", country: "Malaysia" },
    { code: "MV", country: "Maldives" },
    { code: "ML", country: "Mali" },
    { code: "MT", country: "Malta" },
    { code: "MH", country: "Marshall Islands" },
    { code: "MQ", country: "Martinique" },
    { code: "MR", country: "Mauritania" },
    { code: "MU", country: "Mauritius" },
    { code: "YT", country: "Mayotte" },
    { code: "MX", country: "Mexico" },
    { code: "FM", country: "Micronesia" },
    { code: "MD", country: "Moldova" },
    { code: "MC", country: "Monaco" },
    { code: "MN", country: "Mongolia" },
    { code: "ME", country: "Montenegro" },
    { code: "MS", country: "Montserrat" },
    { code: "MA", country: "Morocco" },
    { code: "MZ", country: "Mozambique" },
    { code: "MM", country: "Myanmar (Burma)" },
    { code: "NA", country: "Namibia" },
    { code: "NR", country: "Nauru" },
    { code: "NP", country: "Nepal" },
    { code: "NL", country: "Netherlands" },
    { code: "NC", country: "New Caledonia" },
    { code: "NZ", country: "New Zealand" },
    { code: "NI", country: "Nicaragua" },
    { code: "NE", country: "Niger" },
    { code: "NG", country: "Nigeria" },
    { code: "NU", country: "Niue" },
    { code: "NF", country: "Norfolk Island" },
    { code: "KP", country: "North Korea" },
    { code: "MK", country: "North Macedonia" },
    { code: "MP", country: "Northern Mariana Islands" },
    { code: "NO", country: "Norway" },
    { code: "OM", country: "Oman" },
    { code: "PK", country: "Pakistan" },
    { code: "PW", country: "Palau" },
    { code: "PS", country: "Palestinian Territories" },
    { code: "PA", country: "Panama" },
    { code: "PG", country: "Papua New Guinea" },
    { code: "PY", country: "Paraguay" },
    { code: "PE", country: "Peru" },
    { code: "PH", country: "Philippines" },
    { code: "PN", country: "Pitcairn Islands" },
    { code: "PL", country: "Poland" },
    { code: "PT", country: "Portugal" },
    { code: "PR", country: "Puerto Rico" },
    { code: "QA", country: "Qatar" },
    { code: "RE", country: "Réunion" },
    { code: "RO", country: "Romania" },
    { code: "RU", country: "Russia" },
    { code: "RW", country: "Rwanda" },
    { code: "WS", country: "Samoa" },
    { code: "SM", country: "San Marino" },
    { code: "ST", country: "São Tomé & Príncipe" },
    { code: "SA", country: "Saudi Arabia" },
    { code: "SN", country: "Senegal" },
    { code: "RS", country: "Serbia" },
    { code: "SC", country: "Seychelles" },
    { code: "SL", country: "Sierra Leone" },
    { code: "SG", country: "Singapore" },
    { code: "SX", country: "Sint Maarten" },
    { code: "SK", country: "Slovakia" },
    { code: "SI", country: "Slovenia" },
    { code: "SB", country: "Solomon Islands" },
    { code: "SO", country: "Somalia" },
    { code: "ZA", country: "South Africa" },
    { code: "GS", country: "South Georgia & South Sandwich Islands" },
    { code: "KR", country: "South Korea" },
    { code: "SS", country: "South Sudan" },
    { code: "ES", country: "Spain" },
    { code: "LK", country: "Sri Lanka" },
    { code: "BL", country: "St. Barthélemy" },
    { code: "SH", country: "St. Helena" },
    { code: "KN", country: "St. Kitts & Nevis" },
    { code: "LC", country: "St. Lucia" },
    { code: "MF", country: "St. Martin" },
    { code: "PM", country: "St. Pierre & Miquelon" },
    { code: "VC", country: "St. Vincent & Grenadines" },
    { code: "SD", country: "Sudan" },
    { code: "SR", country: "Suricountry" },
    { code: "SJ", country: "Svalbard & Jan Mayen" },
    { code: "SE", country: "Sweden" },
    { code: "CH", country: "Switzerland" },
    { code: "SY", country: "Syria" },
    { code: "TW", country: "Taiwan" },
    { code: "TJ", country: "Tajikistan" },
    { code: "TZ", country: "Tanzania" },
    { code: "TH", country: "Thailand" },
    { code: "TL", country: "Timor-Leste" },
    { code: "TG", country: "Togo" },
    { code: "TK", country: "Tokelau" },
    { code: "TO", country: "Tonga" },
    { code: "TT", country: "Trinidad & Tobago" },
    { code: "TA", country: "Tristan da Cunha" },
    { code: "TN", country: "Tunisia" },
    { code: "TR", country: "Turkey" },
    { code: "TM", country: "Turkmenistan" },
    { code: "TC", country: "Turks & Caicos Islands" },
    { code: "TV", country: "Tuvalu" },
    { code: "UM", country: "U.S. Outlying Islands" },
    { code: "VI", country: "U.S. Virgin Islands" },
    { code: "UG", country: "Uganda" },
    { code: "UA", country: "Ukraine" },
    { code: "AE", country: "United Arab Emirates" },
    { code: "GB", country: "United Kingdom" },
    { code: "US", country: "United States" },
    { code: "UY", country: "Uruguay" },
    { code: "UZ", country: "Uzbekistan" },
    { code: "VU", country: "Vanuatu" },
    { code: "VA", country: "Vatican City" },
    { code: "VE", country: "Venezuela" },
    { code: "VN", country: "Vietnam" },
    { code: "WF", country: "Wallis & Futuna" },
    { code: "EH", country: "Western Sahara" },
    { code: "YE", country: "Yemen" },
    { code: "ZM", country: "Zambia" },
    { code: "ZW", country: "Zimbabwe" },
  ];

  const countrycode = [
    { code: "AF", country: "Afghanistan (+93)" },
    { code: "AL", country: "Albania (+355)" },
    { code: "DZ", country: "Algeria (+213)" },
    { code: "AS", country: "American Samoa (+1)" },
    { code: "AD", country: "Andorra (+376)" },
    { code: "AO", country: "Angola (+244)" },
    { code: "AI", country: "Anguilla (+1)" },
    { code: "AG", country: "Antigua & Barbuda (+1)" },
    { code: "AR", country: "Argentina (+54)" },
    { code: "AM", country: "Armenia (+374)" },
    { code: "AW", country: "Aruba (+297)" },
    { code: "AC", country: "Ascension Island (+247)" },
    { code: "AU", country: "Australia (+61)" },
    { code: "AT", country: "Austria (+43)" },
    { code: "AZ", country: "Azerbaijan (+994)" },
    { code: "BS", country: "Bahamas (+1)" },
    { code: "BH", country: "Bahrain (+973)" },
    { code: "BD", country: "Bangladesh (+880)" },
    { code: "BB", country: "Barbados (+1)" },
    { code: "BY", country: "Belarus (+375)" },
    { code: "BE", country: "Belgium (+32)" },
    { code: "BZ", country: "Belize (+501)" },
    { code: "BJ", country: "Benin (+229)" },
    { code: "BM", country: "Bermuda (+1)" },
    { code: "BT", country: "Bhutan (+975)" },
    { code: "BO", country: "Bolivia (+591)" },
    { code: "BA", country: "Bosnia & Herzegovina (+387)" },
    { code: "BW", country: "Botswana (+267)" },
    { code: "BR", country: "Brazil (+55)" },
    { code: "IO", country: "British Indian Ocean Territory (+246)" },
    { code: "VG", country: "British Virgin Islands (+1)" },
    { code: "BN", country: "Brunei (+673)" },
    { code: "BG", country: "Bulgaria (+359)" },
    { code: "BF", country: "Burkina Faso (+226)" },
    { code: "BI", country: "Burundi (+257)" },
    { code: "KH", country: "Cambodia (+855)" },
    { code: "CM", country: "Cameroon (+237)" },
    { code: "CA", country: "Canada (+1)" },
    { code: "CV", country: "Cape Verde (+238)" },
    { code: "BQ", country: "Caribbean Netherlands (+599)" },
    { code: "KY", country: "Cayman Islands (+1)" },
    { code: "CF", country: "Central African Republic (+236)" },
    { code: "TD", country: "Chad (+235)" },
    { code: "CL", country: "Chile (+56)" },
    { code: "CN", country: "China (+86)" },
    { code: "CX", country: "Christmas Island (+61)" },
    { code: "CC", country: "Cocos (Keeling) Islands (+61)" },
    { code: "CO", country: "Colombia (+57)" },
    { code: "KM", country: "Comoros (+269)" },
    { code: "CG", country: "Congo - Brazzaville (+242)" },
    { code: "CD", country: "Congo - Kinshasa (+243)" },
    { code: "CK", country: "Cook Islands (+682)" },
    { code: "CR", country: "Costa Rica (+506)" },
    { code: "HR", country: "Croatia (+385)" },
    { code: "CU", country: "Cuba (+53)" },
    { code: "CW", country: "Curaçao (+599)" },
    { code: "CY", country: "Cyprus (+357)" },
    { code: "CZ", country: "Czechia (+420)" },
    { code: "CI", country: "Côte d’Ivoire (+225)" },
    { code: "DK", country: "Denmark (+45)" },
    { code: "DJ", country: "Djibouti (+253)" },
    { code: "DM", country: "Dominica (+1)" },
    { code: "DO", country: "Dominican Republic (+1)" },
    { code: "EC", country: "Ecuador (+593)" },
    { code: "EG", country: "Egypt (+20)" },
    { code: "SV", country: "El Salvador (+503)" },
    { code: "GQ", country: "Equatorial Guinea (+240)" },
    { code: "ER", country: "Eritrea (+291)" },
    { code: "EE", country: "Estonia (+372)" },
    { code: "SZ", country: "Eswatini (+268)" },
    { code: "ET", country: "Ethiopia (+251)" },
    { code: "FK", country: "Falkland Islands (+500)" },
    { code: "FO", country: "Faroe Islands (+298)" },
    { code: "FJ", country: "Fiji (+679)" },
    { code: "FI", country: "Finland (+358)" },
    { code: "FR", country: "France (+33)" },
    { code: "GF", country: "French Guiana (+594)" },
    { code: "PF", country: "French Polynesia (+689)" },
    { code: "GA", country: "Gabon (+241)" },
    { code: "GM", country: "Gambia (+220)" },
    { code: "GE", country: "Georgia (+995)" },
    { code: "DE", country: "Germany (+49)" },
    { code: "GH", country: "Ghana (+233)" },
    { code: "GI", country: "Gibraltar (+350)" },
    { code: "GR", country: "Greece (+30)" },
    { code: "GL", country: "Greenland (+299)" },
    { code: "GD", country: "Grenada (+1)" },
    { code: "GP", country: "Guadeloupe (+590)" },
    { code: "GU", country: "Guam (+1)" },
    { code: "GT", country: "Guatemala (+502)" },
    { code: "GG", country: "Guernsey (+44)" },
    { code: "GN", country: "Guinea (+224)" },
    { code: "GW", country: "Guinea-Bissau (+245)" },
    { code: "GY", country: "Guyana (+592)" },
    { code: "HT", country: "Haiti (+509)" },
    { code: "HN", country: "Honduras (+504)" },
    { code: "HK", country: "Hong Kong SAR China (+852)" },
    { code: "HU", country: "Hungary (+36)" },
    { code: "IS", country: "Iceland (+354)" },
    { code: "IN", country: "India (+91)" },
    { code: "ID", country: "Indonesia (+62)" },
    { code: "IR", country: "Iran (+98)" },
    { code: "IQ", country: "Iraq (+964)" },
    { code: "IE", country: "Ireland (+353)" },
    { code: "IM", country: "Isle of Man (+44)" },
    { code: "IL", country: "Israel (+972)" },
    { code: "IT", country: "Italy (+39)" },
    { code: "JM", country: "Jamaica (+1)" },
    { code: "JP", country: "Japan (+81)" },
    { code: "JE", country: "Jersey (+44)" },
    { code: "JO", country: "Jordan (+962)" },
    { code: "KZ", country: "Kazakhstan (+7)" },
    { code: "KE", country: "Kenya (+254)" },
    { code: "KI", country: "Kiribati (+686)" },
    { code: "XK", country: "Kosovo (+383)" },
    { code: "KW", country: "Kuwait (+965)" },
    { code: "KG", country: "Kyrgyzstan (+996)" },
    { code: "LA", country: "Laos (+856)" },
    { code: "LV", country: "Latvia (+371)" },
    { code: "LB", country: "Lebanon (+961)" },
    { code: "LS", country: "Lesotho (+266)" },
    { code: "LR", country: "Liberia (+231)" },
    { code: "LY", country: "Libya (+218)" },
    { code: "LI", country: "Liechtenstein (+423)" },
    { code: "LT", country: "Lithuania (+370)" },
    { code: "LU", country: "Luxembourg (+352)" },
    { code: "MO", country: "Macao SAR China (+853)" },
    { code: "MG", country: "Madagascar (+261)" },
    { code: "MW", country: "Malawi (+265)" },
    { code: "MY", country: "Malaysia (+60)" },
    { code: "MV", country: "Maldives (+960)" },
    { code: "ML", country: "Mali (+223)" },
    { code: "MT", country: "Malta (+356)" },
    { code: "MH", country: "Marshall Islands (+692)" },
    { code: "MQ", country: "Martinique (+596)" },
    { code: "MR", country: "Mauritania (+222)" },
    { code: "MU", country: "Mauritius (+230)" },
    { code: "YT", country: "Mayotte (+262)" },
    { code: "MX", country: "Mexico (+52)" },
    { code: "FM", country: "Micronesia (+691)" },
    { code: "MD", country: "Moldova (+373)" },
    { code: "MC", country: "Monaco (+377)" },
    { code: "MN", country: "Mongolia (+976)" },
    { code: "ME", country: "Montenegro (+382)" },
    { code: "MS", country: "Montserrat (+1)" },
    { code: "MA", country: "Morocco (+212)" },
    { code: "MZ", country: "Mozambique (+258)" },
    { code: "MM", country: "Myanmar (Burma) (+95)" },
    { code: "NA", country: "Namibia (+264)" },
    { code: "NR", country: "Nauru (+674)" },
    { code: "NP", country: "Nepal (+977)" },
    { code: "NL", country: "Netherlands (+31)" },
    { code: "NC", country: "New Caledonia (+687)" },
    { code: "NZ", country: "New Zealand (+64)" },
    { code: "NI", country: "Nicaragua (+505)" },
    { code: "NE", country: "Niger (+227)" },
    { code: "NG", country: "Nigeria (+234)" },
    { code: "NU", country: "Niue (+683)" },
    { code: "NF", country: "Norfolk Island (+672)" },
    { code: "KP", country: "North Korea (+850)" },
    { code: "MK", country: "North Macedonia (+389)" },
    { code: "MP", country: "Northern Mariana Islands (+1)" },
    { code: "NO", country: "Norway (+47)" },
    { code: "OM", country: "Oman (+968)" },
    { code: "PK", country: "Pakistan (+92)" },
    { code: "PW", country: "Palau (+680)" },
    { code: "PS", country: "Palestinian Territories (+970)" },
    { code: "PA", country: "Panama (+507)" },
    { code: "PG", country: "Papua New Guinea (+675)" },
    { code: "PY", country: "Paraguay (+595)" },
    { code: "PE", country: "Peru (+51)" },
    { code: "PH", country: "Philippines (+63)" },
    { code: "PL", country: "Poland (+48)" },
    { code: "PT", country: "Portugal (+351)" },
    { code: "PR", country: "Puerto Rico (+1)" },
    { code: "QA", country: "Qatar (+974)" },
    { code: "RO", country: "Romania (+40)" },
    { code: "RU", country: "Russia (+7)" },
    { code: "RW", country: "Rwanda (+250)" },
    { code: "RE", country: "Réunion (+262)" },
    { code: "WS", country: "Samoa (+685)" },
    { code: "SM", country: "San Marino (+378)" },
    { code: "SA", country: "Saudi Arabia (+966)" },
    { code: "SN", country: "Senegal (+221)" },
    { code: "RS", country: "Serbia (+381)" },
    { code: "SC", country: "Seychelles (+248)" },
    { code: "SL", country: "Sierra Leone (+232)" },
    { code: "SG", country: "Singapore (+65)" },
    { code: "SX", country: "Sint Maarten (+1)" },
    { code: "SK", country: "Slovakia (+421)" },
    { code: "SI", country: "Slovenia (+386)" },
    { code: "SB", country: "Solomon Islands (+677)" },
    { code: "SO", country: "Somalia (+252)" },
    { code: "ZA", country: "South Africa (+27)" },
    { code: "KR", country: "South Korea (+82)" },
    { code: "SS", country: "South Sudan (+211)" },
    { code: "ES", country: "Spain (+34)" },
    { code: "LK", country: "Sri Lanka (+94)" },
    { code: "BL", country: "St. Barthélemy (+590)" },
    { code: "SH", country: "St. Helena (+290)" },
    { code: "KN", country: "St. Kitts & Nevis (+1)" },
    { code: "LC", country: "St. Lucia (+1)" },
    { code: "MF", country: "St. Martin (+590)" },
    { code: "PM", country: "St. Pierre & Miquelon (+508)" },
    { code: "VC", country: "St. Vincent & Grenadines (+1)" },
    { code: "SD", country: "Sudan (+249)" },
    { code: "SR", country: "Suriname (+597)" },
    { code: "SJ", country: "Svalbard & Jan Mayen (+47)" },
    { code: "SE", country: "Sweden (+46)" },
    { code: "CH", country: "Switzerland (+41)" },
    { code: "SY", country: "Syria (+963)" },
    { code: "ST", country: "São Tomé & Príncipe (+239)" },
    { code: "TW", country: "Taiwan (+886)" },
    { code: "TJ", country: "Tajikistan (+992)" },
    { code: "TZ", country: "Tanzania (+255)" },
    { code: "TH", country: "Thailand (+66)" },
    { code: "TL", country: "Timor-Leste (+670)" },
    { code: "TG", country: "Togo (+228)" },
    { code: "TK", country: "Tokelau (+690)" },
    { code: "TO", country: "Tonga (+676)" },
    { code: "TT", country: "Trinidad & Tobago (+1)" },
    { code: "TA", country: "Tristan da Cunha (+290)" },
    { code: "TN", country: "Tunisia (+216)" },
    { code: "TR", country: "Turkey (+90)" },
    { code: "TM", country: "Turkmenistan (+993)" },
    { code: "TC", country: "Turks & Caicos Islands (+1)" },
    { code: "TV", country: "Tuvalu (+688)" },
    { code: "VI", country: "U.S. Virgin Islands (+1)" },
    { code: "UG", country: "Uganda (+256)" },
    { code: "UA", country: "Ukraine (+380)" },
    { code: "AE", country: "United Arab Emirates (+971)" },
    { code: "GB", country: "United Kingdom (+44)" },
    { code: "US", country: "United States (+1)" },
    { code: "UY", country: "Uruguay (+598)" },
    { code: "UZ", country: "Uzbekistan (+998)" },
    { code: "VU", country: "Vanuatu (+678)" },
    { code: "VA", country: "Vatican City (+39)" },
    { code: "VE", country: "Venezuela (+58)" },
    { code: "VN", country: "Vietnam (+84)" },
    { code: "WF", country: "Wallis & Futuna (+681)" },
    { code: "EH", country: "Western Sahara (+212)" },
    { code: "YE", country: "Yemen (+967)" },
    { code: "ZM", country: "Zambia (+260)" },
    { code: "ZW", country: "Zimbabwe (+263)" },
    { code: "AX", country: "Åland Islands (+358)" },
  ];

  const [formData, setFormData] = useState({
    field_first_name: "",
    field_last_name: "",
    mail: "",
    name: "",
    field_gender: "",
    field_country: "",
    countryCode: "",
    field_contact_info: "",
    field_govt_id: null,
  });

  const handleloginclick = () => {
    navigate("/login");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      field_govt_id: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const base64Credentials = btoa("admin:Admin@123#");
    try {
      const response = await fetch("http://pms.nvli.in/pms/entity/user?_format=json", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Basic ${base64Credentials}`, 
          
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data posted successfully");
        navigate("/login");
      } else {
        console.error("Error posting data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    // You can add form submission logic here

    console.log(formData);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "53%", height: "109.5vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} className="background-image">
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "30px", padding: "60px 100px" }}>
          <div style={{ color: "orange", paddingBottom: "70px " }}>Create Account</div>
          <form onSubmit={handleSubmit} style={{ width: "28.9vw" }} className="RegistrationForm">
            <div>
              <label>First Name</label>
              <input type="text" name="field_first_name" value={formData.field_first_name} onChange={handleInputChange} required style={{ width: "91%" }} />
            </div>

            <div>
              <label>Last Name</label>
              <input type="text" name="field_last_name" value={formData.field_last_name} onChange={handleInputChange} required style={{ width: "91%" }} />
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <label>Email address</label>
                <input type="mail" name="mail" value={formData.mail} onChange={handleInputChange} required />
              </div>

              <div>
                <label>Username</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>
            </div>
            <div>
              <label>Gender</label>
              <div>
                <select name="field_gender" value={formData.field_gender} onChange={handleInputChange} required style={{ width: "26.89vw", height: "4.75vh", borderRadius: "5px" }}>
                  <option value="">- Select a value -</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="female">Other</option>
                  <option value="female">Prefer not to say</option>
                </select>
              </div>
            </div>

            <div>
              <label>Country</label>
              <div>
                <select name="field_country" value={formData.field_country} onChange={handleInputChange} required style={{ width: "26.89vw", height: "4.75vh", borderRadius: "5px" }}>
                  <option value="">- Select a value -</option>
                  {countryOptions.map((country) => (
                    <option key={country.code} value={country.country}>
                      {country.country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <label>Country Code</label>

                <div>
                  <select name="countryCode" value={formData.countryCode} onChange={handleInputChange} required style={{ width: "8vw", height: "4.75vh", borderRadius: "5px" }}>
                    {countrycode.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label>Phone number</label>
                <input type="tel" name="field_contact_info" value={formData.field_contact_info} onChange={handleInputChange} required style={{ width: "18.2vw" }} />
              </div>
            </div>
            <div>
              <div>
                <label>Govt. ID</label>
              </div>
              <input type="file" name="field_govt_id" accept=".pdf" onChange={handleFileChange} required style={{ width: "91%", backgroundColor: "white" }} />
            </div>

            <div className="RegistrationNotice">
              <p>Please upload scanned copy of your ID for registration</p>
              <p>Accepted Documents:</p>
              <p> For Indian Citizen: Aadhar Card </p>
              <p> For Foreign Citizen: Passport</p>
              <br></br>
              <p> Upload requirements </p>
              <ul>
                <li> One file only. </li>
                <li> 5 MB limit.</li>
                <li> Allowed types: pdf.</li>
              </ul>
            </div>

            <button type="submit">Create new account</button>
          </form>
        </div>
      </div>
      <div style={{ width: "47%", height: "100vh", backgroundColor: "black", color: "white", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <button variant="Outlined" size="small" style={{ border: "2px solid yellow", marginBottom: "50px" }} onClick={handleloginclick}>
          Login
        </button>
        <div>
          <img src="http://pms.nvli.in/pms/themes/contrib/estore/images/logo.png" alt="logo" />
        </div>
        <div style={{ textAlign: "justify" }}>
          The Pradhanmantri Sangrahalaya is a tribute to every Prime Minister of India since Independence, and a narrative record of how each one has contributed to the development of our nation over the last 75 years. It is a history of collective effort, and powerful evidence of the creative success of India's democracy. Our Prime Ministers came from every class and tier of society, for the gates of democracy were equally open to all. Each one left an important footprint on the journey of
          development, social harmony and economic empowerment that has enabled India to give true meaning to freedom. We inherited an impoverished land from the debris of British colonialism, and together gave it a new life, lifting our country from famished deprivation to food-surplus status, and creating infrastructure over barren territory for the benefit of the people.
        </div>
        <div style={{ backgroundColor: "orange", borderRadius: "5px", marginTop: "20px", padding: "10px" }}>After clicking 'Create a New Account,' you will receive further updates via the provided email address.</div>
      </div>
    </div>
  );
}

export default Register;
