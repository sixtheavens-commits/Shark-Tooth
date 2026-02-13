// S.T CLAN EVENTS DATABASE
// Edit this file to add/remove/update events

const eventsData = [
    {
        title: "S.T CLAN MEETUP",
        date: "Saturday, March 1, 2026",
        countdown: "15 DAYS LEFT",
        host: "JUVILIUS",
        description: "First official S.T clan meetup! Gaming, pizza, and chaos. All members invited. Location TBA. RSVP required! 🦈🍕",
        status: "upcoming",
        featured: true
    },
    {
        title: "BGMI SQUAD SHOWDOWN",
        date: "Friday, February 21, 2026",
        countdown: "7 DAYS LEFT",
        host: "UMAR",
        description: "4v4 squad battles. Prove your team is the best in S.T! Winner gets bragging rights and exclusive clan badge.",
        status: "upcoming",
        featured: false
    },
    {
        title: "MINECRAFT BUILD COMPETITION",
        date: "Sunday, February 23, 2026",
        countdown: "9 DAYS LEFT",
        host: "VION",
        description: "Theme: Futuristic City. 3-hour build challenge. Best build wins $20 and gets featured on clan social media!",
        status: "upcoming",
        featured: false
    }
];

// ==========================================
// HOW TO ADD MORE EVENTS:
// ==========================================
//
// Just add another event using this format:
//
// {
//     title: "Event Name",
//     date: "Day, Month DD, YYYY",
//     countdown: "X DAYS LEFT",
//     host: "HOST NAME",
//     description: "Event details here",
//     status: "upcoming",
//     featured: false
// },
//
// Status options:
// - "upcoming" = Not started yet (green badge)
// - "ongoing" = Happening now (yellow badge)
// - "completed" = Finished (gray badge)
//
// Featured:
// - true = Shows FEATURED badge and highlights
// - false = Normal event
//
// DON'T FORGET THE COMMA after each event (except the last one)!
//
