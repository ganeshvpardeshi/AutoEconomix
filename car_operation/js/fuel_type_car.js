
// var data = {
//     fuel_types: [
//         {
//             fuel_type: "Hyundai",
//             types: [
//                 "Petrol",
//                 "Diesel",
//                 "Electric",
//                 "CNG",
//                 "Hybrid",
//                 "LPG",

//             ],
//         },
//     ]
// };

// window.onload = function () {
//     const selectState = document.getElementById("brand");
//     const selectDistrict = document.getElementById("model");
//     selectDistrict.disabled = true;

//     //Add State Value to State Select option
//     data.brands.forEach((value) => {
//         selectState.appendChild(createOption(value.brand, value.brand));
//     });

//     selectState.addEventListener("change", function (e) {
//         selectDistrict.disabled = false;
//         data.brands.forEach((detail, index) => {
//             //console.log(data.brands[index].models);
//             if (detail.brand == e.target.value) {
//                 selectDistrict.innerHTML = "";
//                 selectDistrict.append(createOption("Select Model", ""));
//                 data.brands[index].models.forEach((district) => {
//                     selectDistrict.append(createOption(district, district));
//                 });
//             }
//         });
//     });

//     //Create New Option Tag With Value
//     function createOption(displayMember, valueMember) {
//         const newOption = document.createElement("option");
//         newOption.value = valueMember;
//         newOption.text = displayMember;
//         return newOption;
//     }
// };