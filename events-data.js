// S.T CLAN EVENTS DATABASE
// Edit this file to add/remove/update events

const eventsData = [
    {
        title: "NO ONGOING EVENT",
        date: "",
        countdown: "",
        host: "",
        description: "You'll be notified here if any events are ongoing, keep checking on us!",
        status: "Not Fixed",
        featured: true
    },
    {
        
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
