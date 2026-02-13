// S.T CLAN SHOPS DATABASE
// Edit this file to add/remove/update shop items

const shopData = {
    vionShop: [
        {
            name: "Premium Gaming Setup Guide",
            price: "Free",
            description: "Complete guide to building the perfect gaming setup",
            available: true
        },
        {
            name: "Minecraft Build Tutorials",
            price: "$5",
            description: "Learn advanced building techniques from Vion",
            available: true
        },
        {
            name: "Custom Roblox Scripts Pack",
            price: "$10",
            description: "Exclusive scripts for Blox Fruits - Gravity User special",
            available: true
        },
        {
            name: "Pokemon Unite Strategy Guide",
            price: "$3",
            description: "Master the meta and dominate ranked matches",
            available: true
        },
        {
            name: "1-on-1 Mining Tutorial",
            price: "$8/session",
            description: "Personal Minecraft mining coaching with Vion",
            available: false
        }
    ],
    
    juviliusShop: [
        {
            name: "PUBG Pro Tips & Tricks",
            price: "Free",
            description: "Master the battlefield with expert strategies from a Season 9 Conqueror",
            available: true
        },
        {
            name: "Pokemon Unite Battle Guide",
            price: "$3",
            description: "Gengar main techniques - Learn from 4 years experience",
            available: true
        },
        {
            name: "S.T Exclusive Merchandise",
            price: "$15",
            description: "Limited edition clan merch - Hoodies and T-shirts",
            available: true
        },
        {
            name: "1-on-1 Gaming Coaching",
            price: "$20/hr",
            description: "Personal coaching session with Juvilius - All games",
            available: true
        },
        {
            name: "Chess Strategy Course",
            price: "$5",
            description: "Learn chess basics to 800 ELO level",
            available: true
        },
        {
            name: "Genshin Impact Account Boost",
            price: "$25",
            description: "Level boosting service - Fast and safe",
            available: false
        }
    ]
};

// ==========================================
// HOW TO ADD/EDIT SHOP ITEMS:
// ==========================================
//
// To ADD a new item:
//
// {
//     name: "Item Name",
//     price: "$10" or "Free" or "$5/hr" (whatever you want),
//     description: "What the item is",
//     available: true or false
// },
//
// Example:
// {
//     name: "Fortnite Battle Pass Account",
//     price: "$25",
//     description: "Fully upgraded season pass with all skins",
//     available: true
// },
//
// REMEMBER: Comma after each item (except the last one)!
//
