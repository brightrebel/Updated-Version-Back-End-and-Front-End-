
var lookup_bw_employer = [
  {"id":"", "desc":"Select"},
  {"id":"Goverment", "desc":"Goverment"},
  {"id":"Council", "desc":"Council"}
];

var lookup_bw_division_gov = [
  {"id":"", "desc":"Select"},
  {"id":"Botswana Department of Education", "desc":"Botswana Department of Education"},
  {"id":"Botswana Defence Force", "desc":"Botswana Defence Force"},
  {"id":"Botswana Police Force", "desc":"Botswana Police Force"},
  {"id":"Other Government", "desc":"Other Government"}
];

var lookup_bw_division_council = [
  {"id":"", "desc":"Select"},
  {"id":"Bobirwa Sub District", "desc":"Bobirwa Sub District"},
  {"id":"Boteti Sub District", "desc":"Boteti Sub District"},
  {"id":"Central District Council ICW", "desc":"Central District Council ICW"},
  {"id":"Central District Council PNP", "desc":"Central District Council PNP"},
  {"id":"Charleshill Sub district", "desc":"Charleshill Sub district"},
  {"id":"Chobe District Council", "desc":"Chobe District Council"},
  {"id":"Chobe landboard", "desc":"Chobe landboard"},
  {"id":"Francistown Council", "desc":"Francistown Council"},
  {"id":"Gaborone Council ICW", "desc":"Gaborone Council ICW"},
  {"id":"Gaborone Council PNP", "desc":"Gaborone Council PNP"},
  {"id":"Ghanzi District Council", "desc":"Ghanzi District Council"},
  {"id":"Ghanzi Landboard", "desc":"Ghanzi Landboard"},
  {"id":"Goodhope Sub District", "desc":"Goodhope Sub District"},
  {"id":"Hukuntsi Sub District", "desc":"Hukuntsi Sub District"},
  {"id":"Kanye Admin Authority ICW", "desc":"Kanye Admin Authority ICW"},
  {"id":"Kanye Admin Authority PNP", "desc":"Kanye Admin Authority PNP"},
  {"id":"Kgalagadi District Council", "desc":"Kgalagadi District Council"},
  {"id":"Kgatleng District Council", "desc":"Kgatleng District Council"},
  {"id":"Kgatleng Land Board", "desc":"Kgatleng Land Board"},
  {"id":"Kweneng District Council", "desc":"Kweneng District Council"},
  {"id":"Kweneng Land Board", "desc":"Kweneng Land Board"},
  {"id":"Lethakeng Sub District", "desc":"Lethakeng Sub District"},
  {"id":"Lobatse Town Council", "desc":"Lobatse Town Council"},
  {"id":"Mabutsane Sub District", "desc":"Mabutsane Sub District"},
  {"id":"Mahalapye Sub District", "desc":"Mahalapye Sub District"},
  {"id":"Malete Landboard", "desc":"Malete Landboard"},
  {"id":"Maun Admin", "desc":"Maun Admin"},
  {"id":"Moshupa Sub District", "desc":"Moshupa Sub District"},
  {"id":"Mogoditshane Sub District", "desc":"Mogoditshane Sub District"},
  {"id":"Molepolole Admin", "desc":"Molepolole Admin"},
  {"id":"Ngwaketse Landboard", "desc":"Ngwaketse Landboard"},
  {"id":"Ngwato Land Board ICW", "desc":"Ngwato Land Board ICW"},
  {"id":"Ngwato Land Board PNP", "desc":"Ngwato Land Board PNP"},
  {"id":"North East District", "desc":"North East District"},
  {"id":"Northwest District ", "desc":"Northwest District "},
  {"id":"Okavangu Sub District", "desc":"Okavangu Sub District"},
  {"id":"Palapye Admin Authority ICW", "desc":"Palapye Admin Authority ICW"},
  {"id":"Palapye Admin Authority PNP", "desc":"Palapye Admin Authority PNP"},
  {"id":"Selebe Phikwe sub district Council", "desc":"Selebe Phikwe sub district Council"},
  {"id":"Serowe Admin Authority", "desc":"Serowe Admin Authority"},
  {"id":"South East District", "desc":"South East District"},
  {"id":"Southern District Council ICW", "desc":"Southern District Council ICW"},
  {"id":"Southern District Council PNP", "desc":"Southern District Council PNP"},
  {"id":"Sowa Town Council", "desc":"Sowa Town Council"},
  {"id":"Tati Land Board", "desc":"Tati Land Board"},
  {"id":"Tawana Land Board", "desc":"Tawana Land Board"},
  {"id":"Tlokweng Land Board", "desc":"Tlokweng Land Board"},
  {"id":"Tlokweng Sub District", "desc":"Tlokweng Sub District"},
  {"id":"Tsabong Sub District Council", "desc":"Tsabong Sub District Council"},
  {"id":"Tutume Sub District", "desc":"Tutume Sub District"},
  {"id":"Tonata Sub District", "desc":"Tonata Sub District"}

];

var lookup_bw_claim_type = [
  {"id":"", "desc":"Select"},
  {"id":"Principal Member", "desc":"Funeral Claim: Principal Member"},
  {"id":"Other Member", "desc":"Funeral Claim: Other Member"},
  {"id":"Retrenchment", "desc":"Funeral Claim: Waiver of Premium - Retrenchment"},
  {"id":"Disability", "desc":"Funeral Claim: Waiver of Premium - Disability"},
  {"id":"Trauma or HIV Claim", "desc":"P3: Trauma or HIV Claim"},
  {"id":"Legal Claim", "desc":"Legal Claim"}
];

var lookup_bw_claim_state = [
  {"id":"", "desc":"Select"},
  {"id":"Referral Submitted", "desc":"Referral Submitted"},
  {"id":"Referral Received Representitive", "desc":"Referral Received Representitive"},
  {"id":"Client Contacted", "desc":"Client Contacted"},
  {"id":"Client Not available", "desc":"Client Not available"},
  {"id":"Client being assisted", "desc":"Client being assisted"},
  {"id":"Court Date set", "desc":"Court Date set"},
  {"id":"Case Finalised", "desc":"Case Finalised"}
];

var lookup_bw_claim_book = [
  {"id":"", "desc":"Select"},
  {"id":"BTU", "desc":"BTU"},
  {"id":"BTU0", "desc":"BTU0"},
  {"id":"Bllahwu", "desc":"Bllahwu"}
];

var lookup_bw_payment_method = [
  {"id":"Debit Order", "desc":"Debit Order"},
  {"id":"Payroll Deduction", "desc":"Payroll Deduction"}
];

var lookup_numbers4 = [];
for (var i=0; i <= 4; i++) {
  lookup_numbers4.push({"id": i, "desc": i.toString()});
}

var lookup_bw_marital_status = [
  {"id":"", "desc":"Select"},
  {"id":"Single", "desc":"Single"},
  {"id":"Maried", "desc":"Maried"},
  {"id":"Divorced", "desc":"Divorced"},
  {"id":"Widowed", "desc":"Widowed"}
];

var lookup_bw_title = [
  {"id":"", "desc":"Select"},
  {"id":"Mr", "desc":"Mr"},
  {"id":"Mrs", "desc":"Mrs"},
  {"id":"Ms", "desc":"Ms"}
];
var lookup_bw_gender = [
  {"id":"", "desc":"Select"},
  {"id":"Male", "desc":"Male"},
  {"id":"Female", "desc":"Female"}
];
var lookup_bw_yesno = [
  {"id":"Yes", "desc":"Yes"},
  {"id":"No", "desc":"No"}
];
var lookup_bw_income_bracket = [
  {"id":"", "desc":"Select"},
  {"id":"P2,499 or less", "desc":"P2,499 or less"},
  {"id":"P2,500 - P4,999", "desc":"P2,500 - P4,999"},
  {"id":"P5,000 - P9,999", "desc":"P5,000 - P9,999"},
  {"id":"P10,000 - P14,999", "desc":"P10,000 - P14,999"},
  {"id":"P15,000 - P19,999", "desc":"P15,000 - P19,999"},
  {"id":"P20,000 - P24,999", "desc":"P20,000 - P24,999"},
  {"id":"P30,000 - P34,999", "desc":"P30,000 - P34,999"},
  {"id":"P40,000 - P49,999", "desc":"P40,000 - P49,999"},
  {"id":"P50,000 - P79,999", "desc":"P50,000 - P79,999"},
  {"id":"P80,000 - P99,999", "desc":"P80,000 - P99,999"},
  {"id":"P100,000 - P149,999", "desc":"P100,000 - P149,999"},
  {"id":"P150,000 or more", "desc":"P150,000 or more"}
];
var lookup_bw_bank = [
  {"id":"", "desc":"Select"},
  {"id":"ABSA", "desc":"ABSA"},
  {"id":"Capitec", "desc":"Capitec"},
  {"id":"FNB", "desc":"FNB"},
  {"id":"Nedbank", "desc":"Nedbank"},
  {"id":"Standard Bank", "desc":"Standard Bank"}
];



var lookup_bw_beneficiary_relationship = [
  {"id":"", "desc":"Select"},
  {"id":"Aunt", "desc":"Aunt"},
  {"id":"Brother-In-Law", "desc":"Brother-In-Law"},
  {"id":"Brother", "desc":"Brother"},
  {"id":"Cousin", "desc":"Cousin"},
  {"id":"Daughter", "desc":"Daughter"},
  {"id":"Daughter-in-law", "desc":"Daughter-in-law"},
  {"id":"Father", "desc":"Father"},
  {"id":"Father-in-law", "desc":"Father-in-law"},
  {"id":"Fiance", "desc":"Fiance"},
  {"id":"Granddaughter", "desc":"Granddaughter"},
  {"id":"Grandfather", "desc":"Grandfather"},
  {"id":"Grandson", "desc":"Grandson"},
  {"id":"Great Grandson", "desc":"Great Grandson"},
  {"id":"Great Grandfather", "desc":"Great Grandfather"},
  {"id":"Great Grandmother", "desc":"Great Grandmother"},
  {"id":"Great-Great Grandfather", "desc":"Great-Great Grandfather"},
  {"id":"Great-Great Grandmother", "desc":"Great-Great Grandmother"},
  {"id":"Husband", "desc":"Husband"},
  {"id":"Mother", "desc":"Mother"},
  {"id":"Mother-in-law", "desc":"Mother-in-law"},
  {"id":"Nephew", "desc":"Nephew"},
  {"id":"Niece", "desc":"Niece"},
  {"id":"Grandson", "desc":"Grandson"},
  {"id":"Sister", "desc":"Sister"},
  {"id":"Sister-in-law", "desc":"Sister-in-law"},
  {"id":"Son", "desc":"Son"},
  {"id":"Son-in-law", "desc":"Son-in-law"},
  {"id":"Step-Daughter", "desc":"Step-Daughter"},
  {"id":"Step-Father", "desc":"Step-Father"},
  {"id":"Step-Mother", "desc":"Step-Mother"},
  {"id":"Step-Son", "desc":"Step-Son"},
  {"id":"Uncle", "desc":"Uncle"},
  {"id":"Wife", "desc":"Wife"}
];




var lookup_bw_child_relationship = [
  {"id":"", "desc":"Select"},
  {"id":"Son", "desc":"Son"},
  {"id":"Daughter", "desc":"Daughter"},
  {"id":"Step-Son", "desc":"Step-Son"},
  {"id":"Step-Daughter", "desc":"Step-Daughter"}
];

var lookup_bw_parent_relationship = [
  {"id":"", "desc":"Select"},
  {"id":"Father", "desc":"Father"},
  {"id":"Father-in law", "desc":"Father-in law"},
  {"id":"Mother", "desc":"Mother"},
  {"id":"Mother-in law", "desc":"Mother-in law"},
  {"id":"Step-Father", "desc":"Step-Father"},
  {"id":"Step-Mother", "desc":"Step-Mother"}
];



var lookup_bw_extended_family_relationship = [
  {"id":"", "desc":"Select"},
  {"id":"Aunt", "desc":"Aunt"},
  {"id":"Brother-In-Law", "desc":"Brother-In-Law"},
  {"id":"Brother", "desc":"Brother"},
  {"id":"Cousin", "desc":"Cousin"},
  {"id":"Daughter", "desc":"Daughter"},
  {"id":"Daughter-in-law", "desc":"Daughter-in-law"},
  {"id":"Father", "desc":"Father"},
  {"id":"Father-in-law", "desc":"Father-in-law"},
  {"id":"Fiance", "desc":"Fiance"},
  {"id":"Granddaughter", "desc":"Granddaughter"},
  {"id":"Grandfather", "desc":"Grandfather"},
  {"id":"Grandson", "desc":"Grandson"},
  {"id":"Great Grandson", "desc":"Great Grandson"},
  {"id":"Great Grandfather", "desc":"Great Grandfather"},
  {"id":"Great Grandmother", "desc":"Great Grandmother"},
  {"id":"Great-Great Grandfather", "desc":"Great-Great Grandfather"},
  {"id":"Great-Great Grandmother", "desc":"Great-Great Grandmother"},
  {"id":"Mother", "desc":"Mother"},
  {"id":"Mother-in-law", "desc":"Mother-in-law"},
  {"id":"Nephew", "desc":"Nephew"},
  {"id":"Niece", "desc":"Niece"},
  {"id":"Grandson", "desc":"Grandson"},
  {"id":"Sister", "desc":"Sister"},
  {"id":"Sister-in-law", "desc":"Sister-in-law"},
  {"id":"Son", "desc":"Son"},
  {"id":"Son-in-law", "desc":"Son-in-law"},
  {"id":"Step-Daughter", "desc":"Step-Daughter"},
  {"id":"Step-Father", "desc":"Step-Father"},
  {"id":"Step-Mother", "desc":"Step-Mother"},
  {"id":"Step-Son", "desc":"Step-Son"},
  {"id":"Uncle", "desc":"Uncle"}
];





var lookup_date_day = ['Day','01','02','03','04','05','06','07','08','09'];
for (var i=10; i <= 31; i++) {
  lookup_date_day.push(i.toString());
}
var lookup_date_month = ['Month','01','02','03','04','05','06','07','08','09','10','11','12'];
var lookup_date_year = [
  "Year"
];
for (var i=2014; i >= 1930; i--) {
  lookup_date_year.push(i.toString());  //{"id":0, "desc":"Select"} {"id": i, "desc": i.toString()}
}
var lookup_date_year_card = [
  "Year"
];
for (var i=2025; i >= 2014; i--) {
  lookup_date_year_card.push(i.toString());  //{"id":0, "desc":"Select"} {"id": i, "desc": i.toString()}
}


function calc_date(year, month, day, assign_dob, assign_age){
  if (!year || !month || !day) {
    assign_dob('');
    assign_age(0);
    return;
  }
  if (year == 'Year' || month == 'Month' || day == 'Day') {
    assign_dob('');
    assign_age(0);
    return;
  }
  var mdob = moment(year + '-' + month + '-' + day, "YYYY-MM-DD");
  if (!mdob.isValid()) {
    assign_dob('');
    assign_age(0);
    return;
  }
  assign_dob(mdob.format("YYYY-MM-DD"));
  assign_age(calc_moment_age(mdob));
}

function calc_moment_age(dob) {
  var today = moment();
  var age = today.year() - dob.year();
  if (today.month() < dob.month()) {
    age = age - 1;
    return age;
  }
  if ((today.month() == dob.month()) && (today.date() < dob.date())) {
    age = age - 1;
    return age;
  }
  return age;
}





//Unions & Civil
var lookup_bw_funeral1_product_opt1 = [
  {"id": "", "desc": "Select", "amount": 0, "type": ""},
  {"id": "funeral_bw1_30", "desc": "Funeral Cover P15,000  premium P30", "premium": 30, "benefit": 15000, "childA_cover": 2000, "childB_cover": 3750, "childC_cover": 7500, "childD_cover": 15000},
  {"id": "funeral_bw1_46", "desc": "Funeral Cover P25,000  premium P46", "premium": 46, "benefit": 25000, "childA_cover": 2000, "childB_cover": 3750, "childC_cover": 7500, "childD_cover": 15000}
];
var lookup_bw_funeral1_parent_opt1 = [
  {"id": "", "desc": "Select", "amount": 0, "type": ""},
  {"id": "parent_30", "desc": "P5,000 [P20]", "premium": 30, "benefit": 5000},
  {"id": "parent_60", "desc": "P10,000 [P40]", "premium": 60, "benefit": 10000}
];
var lookup_bw_funeral1_extfamily_opt1 = [
  {"id": "", "desc": "Select", "amount": 0, "type": ""},
  {"id": "extfamily_30", "desc": "P5,000", "premium": 30, "benefit": 5000}
];

//Non Unions & Civil
var lookup_bw_funeral1_product_opt2 = [
  {"id": "", "desc": "Select", "amount": 0, "type": ""},
  {"id": "funeral_bw1_45", "desc": "Funeral Cover P15,000  premium P45", "premium": 45, "benefit": 15000, "childA_cover": 2000, "childB_cover": 3750, "childC_cover": 7500, "childD_cover": 15000},
  {"id": "funeral_bw1_75", "desc": "Funeral Cover P25,000  premium P75", "premium": 75, "benefit": 25000, "childA_cover": 2000, "childB_cover": 3750, "childC_cover": 7500, "childD_cover": 15000}
];
var lookup_bw_funeral1_parent_opt2 = [
  {"id": "", "desc": "Select", "amount": 0, "type": ""},
  {"id": "parent_40", "desc": "P5,000 [P40]", "premium": 40, "benefit": 5000},
  {"id": "parent_80", "desc": "P10,000 [P80]", "premium": 80, "benefit": 10000}
];
var lookup_bw_funeral1_extfamily_opt2 = [
  {"id": "", "desc": "Select", "amount": 0, "type": ""},
  {"id": "extfamily_40", "desc": "P5,000", "premium": 40, "benefit": 5000}
];

//BTU0
var lookup_bw_funeral1_product_opt3 = [
  {"id": "", "desc": "Select", "amount": 0, "type": ""},
  {"id": "funeral_bw1_30", "desc": "Funeral Cover P15,000  premium P30", "premium": 30, "benefit": 15000, "childA_cover": 2000, "childB_cover": 3750, "childC_cover": 7500, "childD_cover": 15000}
];
var lookup_bw_funeral1_parent_opt3 = [
  {"id": "", "desc": "Select", "amount": 0, "type": ""},
  {"id": "parent_20", "desc": "P4,000 [P20]", "premium": 20, "benefit": 4000},
  {"id": "parent_40", "desc": "P8,000 [P40]", "premium": 40, "benefit": 8000}
];
var lookup_bw_funeral1_extfamily_opt3 = [
  {"id": "", "desc": "Select", "amount": 0, "type": ""},
  {"id": "extfamily_20", "desc": "P4,000", "premium": 20, "benefit": 4000}
];



//Get Legal: Unions & Civil
var lookup_bw_legal1_product_opt1 = [
  {"id": "", "desc": "Select", "amount": 0, "type": ""},
  {"id": "legal_bw1_30", "desc": "Basic P35,000  premium P30", "premium": 30, child_premium: 0, "benefit": 35000, "funeral_cover": 0},
  {"id": "legal_bw1_50", "desc": "Montsamaisa P75,000  premium P50", "premium": 50, child_premium: 35, "benefit": 75000, "funeral_cover": 2000},
  {"id": "legal_bw1_90", "desc": "Mmereki P120,000  premium P90", "premium": 90, child_premium: 25, "benefit": 120000, "funeral_cover": 3000},
  {"id": "legal_bw1_120", "desc": "Boleng P150,000  premium P120", "premium": 120, child_premium: 30, "benefit": 150000, "funeral_cover": 5000}
];

//Get Legal: Non Unions & Civil
var lookup_bw_legal1_product_opt2 = [
  {"id": "", "desc": "Select", "amount": 0, "type": ""},
  {"id": "legal_bw1_50", "desc": "Basic P35,000  premium P50", "premium": 50, child_premium: 0, "benefit": 35000, "funeral_cover": 0},
  {"id": "legal_bw1_70", "desc": "Montsamaisa P75,000  premium P70", "premium": 70, child_premium: 35, "benefit": 75000, "funeral_cover": 2000},
  {"id": "legal_bw1_110", "desc": "Mmereki P120,000  premium P110", "premium": 110, child_premium: 25, "benefit": 120000, "funeral_cover": 3000},
  {"id": "legal_bw1_145", "desc": "Boleng P150,000  premium P145", "premium": 145, child_premium: 30, "benefit": 150000, "funeral_cover": 5000}
];


//Legal Guard
var lookup_bw_legal0_product_opt1 = [
  {"id": "", "desc": "Select", "amount": 0, "type": ""},
  {"id": "legal_bw0_40", "desc": "Gold P35,000  premium P40", "premium": 40, "benefit": 35000},
  {"id": "legal_bw0_55", "desc": "Platinum P55,000  premium P55", "premium": 55, "benefit": 55000},
  {"id": "legal_bw0_100", "desc": "Premier P100,000  premium P100", "premium": 100, "benefit": 100000}
];
