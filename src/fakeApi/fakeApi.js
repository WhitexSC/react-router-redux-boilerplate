export const fakeUsers = [
  {
    "id": "622598c4-b809-4ceb-bf09-ed7404c393c4",
    "picture": "http://placehold.it/512x512",
    "age": 20,
    "is_employee": false,
    "name": "Whitfield Leon",
    "email": "whitfield.leon@dvsignage.com",
    "nationality": "French",
    "position": "Technical support",
    "working_from": "2018-06-18",
    "skills": [
      "Excel",
      "Asana",
      "Linux",
      "Docker"
    ]
  },
  {
    "id": "edda5d7a-a188-4779-b5e6-600311e2ef3d",
    "picture": "http://placehold.it/511x511",
    "age": 34,
    "is_employee": true,
    "name": "Daphne Bullock",
    "email": "daphne.bullock@dvsignage.com",
    "nationality": "English",
    "position": "Front-end developer",
    "working_from": "2015-12-08",
    "skills": [
      "JavaScript",
      "React.js",
      "Python",
      "Docker",
      "Redux"
    ]
  },
  {
    "id": "1710679f-5aef-4464-b313-1398085c01fd",
    "picture": "http://placehold.it/511x511",
    "age": 38,
    "is_employee": true,
    "name": "Glenn Davidson",
    "email": "glenn.davidson@dvsignage.com",
    "nationality": "English",
    "position": "Back-end developer",
    "working_from": "2018-09-03",
    "skills": [
      "JavaScript",
      "Python",
      "Docker",
      "Django",
      "C++",
      "Linux"
    ]
  }
]
export const fakeSkills = [
  "Excel",
  "Asana",
  "Linux",
  "Docker",
  "JavaScript",
  "React.js",
  "Python",
  "Django",
  "C++",
  "Redux"
].map(el => el = { key: el, text: el, value: el.toLowerCase() })
export const fakeAges = () => {
  let age = [];
  for (let i = 18; i < 50; i++) {
    age.push({ key: i, text: i, value: i })
  }
  return age
}
export const nationality = ['English', 'French']
  .map(el => el = { key: el, text: el, value: el })
export const position = ['Front-end developer', 'Technical support', 'Back-end developer']
  .map(el => el = { key: el, text: el, value: el })
export const sortUsers = ['working_from', 'name', 'is_employee']
  .map(el => el = { key: el, text: el, value: el })