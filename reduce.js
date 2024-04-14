  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0,1,2,3,4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
//acc - accumlate
//curr - current value

//Expanding the functions above
// const nums2 = [0,1,2,3,4];
// let sum2 = nums2.reduce((acc, curr) =>{
//     console.log(
//         "Accumulator:", acc,
//         "Current value:", curr,
//         "Total:", acc + curr    
//     );
//     return acc + curr;
// }, 10);

// console.log(sum2);

const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    },
    {
        name: 'Holly',
        profession: 'IT',
        yrsExperience: 10
      }
  ];
  
  // Totaling a specific object property
  let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0); // always spewcifiy iniotial value
  console.log(totalExperience); 
  
  // Grouping by a property, and totaling it too

  let experienceByProfession = teamMembers.reduce((acc,curr) => {
    //boundary of call back function
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    }else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
  }, {});

  console.log(experienceByProfession);

  let nameByProfession = teamMembers.reduce((acc,curr) => {
    //boundary of call back function
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.name;
    }else {
        acc[key] += curr.name;
    }
    return acc;
  }, {});

  console.log(nameByProfession,",");