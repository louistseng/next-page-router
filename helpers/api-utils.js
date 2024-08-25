// import { getAllEvents } from '../dummy-data.js';

// export async function getAllEvents() {
//     const res = fetch('dummy-data.js');
//     const data = await res.json();
//     const events = [];

//     for (const key in data) {
//         events.push({
//             id: key,
//             ...data[key]
//         })
//     }
//     return events;
// }

// export async function getFeaturedEvents() {
//     const allEvents = await getAllEvents();
//     console.log(allEvents)
//     return allEvents.filter(i => i.isFeatured);
// }