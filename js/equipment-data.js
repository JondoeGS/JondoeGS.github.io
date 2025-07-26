// Rarity level mappings
const rarityValues = {
    "Basic": 0,
    "Common": 1,
    "Uncommon": 2,
    "Epic": 3,
    "Legendary": 4,
    "Rogue": 5,
    "Mythic": 6,
    "Ancient": 7,
    "Galactic": 8
};

// Equipment data used for all calculators
const equipmentStats = {
    // Melee weapons stats
 
        Longsword: {
        stats: [
            { stat: "Damage", minx: 0.15, maxx: 0.2, mins: 1, maxs: 5, percentage: 100 },
            { stat: "Critical Chance", minx: 0.2, maxx: 0.25, mins: 10, maxs: 200, percentage: 25 },
            { stat: "Critical Damage", minx: 1, maxx: 1.5, mins: 50, maxs: 200, percentage: 25 }
        ],
        minrarity: 0, maxrarity: 4
        },
 
        Cleaver: {
        stats: [
            { stat: "Damage", minx: 0.15, maxx: 0.25, mins: 2, maxs: 6, percentage: 100 }
        ],
        minrarity: 0, maxrarity: 4
        },
 
        Axe: {
        stats: [
            { stat: "Damage", minx: 0.15, maxx: 0.2, mins: 2, maxs: 6, percentage: 100 },
            { stat: "Bleed", minx: 0.02, maxx: 0.03, mins: 1, maxs: 3, percentage: 80 },
            { stat: "Bleed Chance", minx: 0.4, maxx: 0.5, mins: 100, maxs: 500, percentage: 100 },
            { stat: "Sweeping", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 50 }
        ],
        minrarity: 0, maxrarity: 4
        },
 
        Greatsword: {
        stats: [
            { stat: "Damage", minx: 0.2, maxx: 0.25, mins: 3, maxs: 7, percentage: 100 },
            { stat: "Critical Chance", minx: 0.35, maxx: 0.4, mins: 500, maxs: 1000, percentage: 100 },
            { stat: "Berserk Damage", minx: 1, maxx: 2, mins: 500, maxs: 1000, percentage: 50 },
            { stat: "Stun Chance", minx: 0.25, maxx: 0.3, mins: 100, maxs: 500, percentage: 25 }
        ],
        minrarity: 0, maxrarity: 8
        },
 
        Dagger: {
        stats: [
            { stat: "Damage", minx: 0.01, maxx: 0.03, mins: 1, maxs: 3, percentage: 100 },
            { stat: "Critical Chance", minx: 0.5, maxx: 0.6, mins: 100, maxs: 500, percentage: 100 },
            { stat: "Critical Damage", minx: 2, maxx: 3, mins: 1000, maxs: 2000, percentage: 50 }
        ],
        minrarity: 5, maxrarity: 8
        },
 
        Pickaxe: {
        stats: [
            { stat: "Damage", minx: 0.1, maxx: 0.15, mins: 1, maxs: 4, percentage: 100 },
            { stat: "Double Ore", minx: 1, maxx: 1.5, mins: 100, maxs: 500, percentage: 50 },
            { stat: "Triple Ore", minx: 0, maxx: 1, mins: 100, maxs: 250, percentage: 25 },
            { stat: "Mining", minx: 0, maxx: 0.0003, mins: 1, maxs: 1, percentage: 75 }
        ],
        minrarity: 1, maxrarity: 5,
        },
 
        BattleAxe: {
        stats: [
            { stat: "Damage", minx: 0.2, maxx: 0.25, mins: 3, maxs: 6, percentage: 100 },
            { stat: "Bleed", minx: 0.03, maxx: 0.07, mins: 2, maxs: 6, percentage: 100 },
            { stat: "Bleed Chance", minx: 0.5, maxx: 0.6, mins: 100, maxs: 400, percentage: 100 },
            { stat: "Berserk Damage", minx: 1, maxx: 2, mins: 500, maxs: 1000, percentage: 25 },
            { stat: "Sweeping", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 25 }
        ],
        minrarity: 3, maxrarity: 8
        },
 
        Mallet: {
        stats: [
            { stat: "Damage", minx: 0.15, maxx: 0.2, mins: 1, maxs: 3, percentage: 100 },
            { stat: "Knockback", minx: 0.25, maxx: 0.3, mins: 100, maxs: 500, percentage: 100 },
            { stat: "Sweeping", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 50 }
        ],
        minrarity: 2, maxrarity: 8
        },
 
        JaggedBlade: {
        stats: [
            { stat: "Damage", minx: 0.1, maxx: 0.2, mins: 1, maxs: 3, percentage: 100 },
            { stat: "Critical Chance", minx: 0.4, maxx: 0.5, mins: 100, maxs: 200, percentage: 100 },
            { stat: "Critical Damage", minx: 1, maxx: 1.5, mins: 200, maxs: 500, percentage: 50 },
            { stat: "Looting", minx: 0, maxx: 0.0002, mins: 1, maxs: 1, percentage: 25 }
        ],
        minrarity: 4, maxrarity: 8
        },
 
        Splitter: {
        stats: [
            { stat: "Damage", minx: 0.2, maxx: 0.25, mins: 3, maxs: 6, percentage: 100 },
            { stat: "Bleed", minx: 0.03, maxx: 0.07, mins: 2, maxs: 6, percentage: 100 },
            { stat: "Bleed Chance", minx: 0.5, maxx: 0.65, mins: 100, maxs: 400, percentage: 100 },
            { stat: "Critical Chance", minx: 0.3, maxx: 0.5, mins: 100, maxs: 500, percentage: 75 },
            { stat: "Sweeping", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 50 }
        ],
        minrarity: 3, maxrarity: 8
        },
 
        Scimitar: {
            stats: [
            { stat: "Damage", minx: 0.175, maxx: 0.25, mins: 2, maxs: 6, percentage: 100 },
            { stat: "Critical Chance", minx: 0.3, maxx: 0.4, mins: 100, maxs: 500, percentage: 100 },
            { stat: "Critical Damage", minx: 1, maxx: 1.5, mins: 100, maxs: 500, percentage: 75 },
            { stat: "Poison Chance", minx: 0.15, maxx: 0.3, mins: 100, maxs: 500, percentage: 75 }
        ],
        minrarity: 2, maxrarity: 8
        },
 
        Gladius: {
        stats: [
            { stat: "Damage", minx: 0.2, maxx: 0.3, mins: 3, maxs: 7, percentage: 100 },
            { stat: "Crit 2 Combo", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 90 },
            { stat: "Critical Damage", minx: 0.75, maxx: 1.4, mins: 100, maxs: 500, percentage: 75 },
            { stat: "Stun Chance", minx: 0.2, maxx: 0.3, mins: 100, maxs: 500, percentage: 25 }
        ],
        minrarity: 4, maxrarity: 8
        },
 
        Crusher: {
        stats: [
            { stat: "Damage", minx: 0.15, maxx: 0.2, mins: 1, maxs: 3, percentage: 100 },
            { stat: "Critical Damage", minx: 0.5, maxx: 1, mins: 100, maxs: 500, percentage: 50 },
            { stat: "Knockback", minx: 0.25, maxx: 0.45, mins: 100, maxs: 500, percentage: 100 },
            { stat: "Crit 3 Combo", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 75 }
        ],
        minrarity: 3, maxrarity: 8
        },
 
        GreaterPickaxe: {
        stats: [
            { stat: "Damage", minx: 0.15, maxx: 0.2, mins: 1, maxs: 4, percentage: 100 },
            { stat: "Triple Ore", minx: 0, maxx: 1, mins: 100, maxs: 500, percentage: 75 },
            { stat: "Quad Ore", minx: 0, maxx: 0.4, mins: 100, maxs: 250, percentage: 50 },
            { stat: "Mining", minx: 0, maxx: 0.0003, mins: 1, maxs: 1, percentage: 50 },
            { stat: "Quick Breaking", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 75 }
        ],
        minrarity: 6, maxrarity: 8,
        },
 
        DivineBlade: {
        stats: [
            { stat: "Damage", minx: 0.1, maxx: 0.1725, mins: 1, maxs: 4, percentage: 100 },
            { stat: "Critical Chance", minx: 0.2, maxx: 0.3, mins: 100, maxs: 1000, percentage: 100 },
            { stat: "Critical Damage", minx: 0.05, maxx: 0.6, mins: 100, maxs: 500, percentage: 75 },
            { stat: "Quick Hit 2", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 50 },
            { stat: "Self Damage", minx: 0, maxx: 0, mins: 0, maxs: 1000, percentage: 95 }
        ],
        minrarity: 4, maxrarity: 8,
        },
 
        Slicer: {
        stats: [
            { stat: "Damage", minx: 0.15, maxx: 0.2, mins: 3, maxs: 6, percentage: 100 },
            { stat: "Bleed", minx: 0.03, maxx: 0.2, mins: 2, maxs: 6, percentage: 100 },
            { stat: "Bleed Chance", minx: 0.3, maxx: 0.4, mins: 100, maxs: 400, percentage: 100 },
            { stat: "Critical Chance", minx: 0.15, maxx: 0.21, mins: 100, maxs: 250, percentage: 100 },
            { stat: "Critical Damage", minx: 0.1, maxx: 0.15, mins: 100, maxs: 500, percentage: 50 },
            { stat: "Sweeping", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 25 }
        ],
        minrarity: 4, maxrarity: 8
        },
 
        Smasher: {
        stats: [
            { stat: "Damage", minx: 0.15, maxx: 0.25, mins: 1, maxs: 5, percentage: 100 },
            { stat: "Critical Damage", minx: 0.075, maxx: 1.125, mins: 100, maxs: 1000, percentage: 50 },
            { stat: "Knockback 3", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 75 },
            { stat: "Crit 3 Combo", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 50 }
        ],
        minrarity: 4, maxrarity: 8
        },
 
        ChargedSpear: {
        stats: [
            { stat: "Damage", minx: 0.25, maxx: 0.375, mins: 3, maxs: 9, percentage: 100 },
            { stat: "Paralysis 3", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 100 }
        ],
        minrarity: 4, maxrarity: 8
        },
 
    // Magic weapons stats
 
        MagicStick: {
        stats: [
            { stat: "Mp Damage", minx: 0.1, maxx: 0.15, mins: 3, maxs: 6, percentage: 100 }
        ],
        minrarity: 0, maxrarity: 1
        },
 
        LargeRod: {
        stats: [
            { stat: "Mp Damage", minx: 0.2, maxx: 0.22, mins: 2, maxs: 6, percentage: 100 },
            { stat: "Mana", minx: 0.2, maxx: 0.3, mins: 10, maxs: 20, percentage: 60 }
        ],
        minrarity: 1, maxrarity: 4
        },
 
        Scepter: {
        stats: [
            { stat: "Mp Damage", minx: 0.3, maxx: 0.35, mins: 3, maxs: 6, percentage: 100 },
            { stat: "Mana", minx: 0.4, maxx: 0.5, mins: 20, maxs: 40, percentage: 100 },
            { stat: "Multi-Atk", minx: 0.001, maxx: 0.003, mins: 1, maxs: 3, percentage: 50 }
        ],
        minrarity: 2, maxrarity: 4
        },
 
        SpiritStaff: {
        stats: [
            { stat: "Mp Damage", minx: 0.25, maxx: 0.3, mins: 1, maxs: 5, percentage: 100 },
            { stat: "Mana", minx: 0.15, maxx: 0.2, mins: 10, maxs: 50, percentage: 100 },
            { stat: "Life Heal", minx: 0.3, maxx: 0.35, mins: 100, maxs: 500, percentage: 80 },
            { stat: "Stun Chance", minx: 0.25, maxx: 0.3, mins: 100, maxs: 500, percentage: 30 }
        ],
        minrarity: 2, maxrarity: 8
        },
 
        JadeStaff: {
        stats: [
            { stat: "Mp Damage", minx: 0.15, maxx: 0.2, mins: 2, maxs: 5, percentage: 100 },
            { stat: "Mana", minx: 0.25, maxx: 0.3, mins: 10, maxs: 40, percentage: 100 },
            { stat: "Paralysis Chance", minx: 0.2, maxx: 0.28, mins: 100, maxs: 500, percentage: 70 },
            { stat: "Cast Surge", minx: 0.1, maxx: 0.2, mins: 100, maxs: 500, percentage: 50 }
        ],
        minrarity: 3, maxrarity: 8
        },
 
        LongStaff: {
        stats: [
            { stat: "Mp Damage", minx: 0.3, maxx: 0.35, mins: 3, maxs: 6, percentage: 100 },
            { stat: "Mana", minx: 0.4, maxx: 0.5, mins: 20, maxs: 40, percentage: 100 },
            { stat: "Mana %", minx: 0.1, maxx: 0.25, mins: 100, maxs: 500, percentage: 75 },
            { stat: "Multi-Atk", minx: 0.001, maxx: 0.003, mins: 1, maxs: 1, percentage: 50 },
            { stat: "Cast Surge", minx: 0.15, maxx: 0.25, mins: 1000, maxs: 2500, percentage: 50 }
        ],
        minrarity: 2, maxrarity: 8
        },
 
        CrystalStaff: {
        stats: [
            { stat: "Mp Damage", minx: 0.3, maxx: 0.35, mins: 3, maxs: 6, percentage: 100 },
            { stat: "Mana", minx: 0.4, maxx: 0.5, mins: 20, maxs: 40, percentage: 100 },
            { stat: "Cast Surge", minx: 0.2, maxx: 0.3, mins: 500, maxs: 1500, percentage: 50 },
            { stat: "Mana Efficiency", minx: 0.1, maxx: 0.2, mins: 100, maxs: 500, percentage: 50 }
        ],
        minrarity: 2, maxrarity: 8
        },
 
        FrailStaff: {
        stats: [
            { stat: "Mp Damage", minx: 0.15, maxx: 0.2, mins: 4, maxs: 8, percentage: 100 },
            { stat: "Spell Damage", minx: 0.3, maxx: 0.65, mins: 100, maxs: 500, percentage: 100 },
            { stat: "Cast Surge", minx: 0.1, maxx: 0.2, mins: 100, maxs: 500, percentage: 50 }
        ],
        minrarity: 4, maxrarity: 8
        },
 
        NemesisOrb: {
        stats: [
            { stat: "Mp Damage", minx: 0.2, maxx: 0.32, mins: 2, maxs: 10, percentage: 100 },
            { stat: "Mana", minx: 0.3, maxx: 0.35, mins: 10, maxs: 50, percentage: 100 },
            { stat: "Cast Surge", minx: 0.1, maxx: 0.15, mins: 100, maxs: 500, percentage: 75 },
            { stat: "Controller", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 50 }
        ],
        minrarity: 4, maxrarity: 8
        },
 
        BeholderWand: {
        stats: [
            { stat: "Mp Damage", minx: 0.25, maxx: 0.33, mins: 4, maxs: 8, percentage: 100 },
            { stat: "Mana", minx: 0.15, maxx: 0.2, mins: 10, maxs: 50, percentage: 100 },
            { stat: "Boss Damage", minx: 0.1, maxx: 0.125, mins: 100, maxs: 250, percentage: 100 },
            { stat: "Cast Surge", minx: 0.1, maxx: 0.15, mins: 100, maxs: 500, percentage: 100 },
            { stat: "Multi-Atk", minx: 0.001, maxx: 0.003, mins: 1, maxs: 3, percentage: 50 }
        ],
        minrarity: 4, maxrarity: 8
        },
 
    // Ranged weapons stats
 
        QuickBow: {
        stats: [
            { stat: "Damage", minx: 0.1, maxx: 0.25, mins: 2, maxs: 6, percentage: 100 },
            { stat: "Range", minx: 0, maxx: 0, mins: 1, maxs: 2, percentage: 100 },
            { stat: "Critical Chance", minx: 0.35, maxx: 0.45, mins: 500, maxs: 1000, percentage: 25 },
            { stat: "Quick Breaking", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 10 }
        ],
        minrarity: 0, maxrarity: 3,
        minrange: 2, maxrange: 3
        },
 
        Tribow: {
        stats: [
            { stat: "Damage", minx: 0.2, maxx: 0.3, mins: 1, maxs: 8, percentage: 100 },
            { stat: "Range", minx: 0, maxx: 0, mins: 1, maxs: 2, percentage: 100 },
            { stat: "Ricochet", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 100 },
            { stat: "Stun Chance", minx: 0.12, maxx: 0.2, mins: 100, maxs: 500, percentage: 25 }
        ],
        minrarity: 0, maxrarity: 8,
        minrange: 2, maxrange: 3
        },
 
        RecurveBow: {
        stats: [
            { stat: "Damage", minx: 0.15, maxx: 0.25, mins: 4, maxs: 9, percentage: 100 },
            { stat: "Range", minx: 0, maxx: 0, mins: 3, maxs: 4, percentage: 100 },
            { stat: "Critical Chance", minx: 0.2, maxx: 0.3, mins: 1000, maxs: 2000, percentage: 50 },
            { stat: "Critical Damage", minx: 1.5, maxx: 2, mins: 1000, maxs: 2000, percentage: 75 }
        ],
        minrarity: 0, maxrarity: 8,
        minrange: 4, maxrange: 5,
        maxcritdmg: 1500
        },
 
        Shuriken: {
        stats: [
            { stat: "Damage", minx: 0.15, maxx: 0.2, mins: 1, maxs: 5, percentage: 100 },
            { stat: "Range", minx: 0, maxx: 0, mins: 1, maxs: 3, percentage: 100 },
            { stat: "Ricochet", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 25 },
            { stat: "Amount", minx: 0, maxx: 0, mins: 1, maxs: 5, percentage: 100 },
            { stat: "Scatter", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 50 }
        ],
        minrarity: 1, maxrarity: 8,
        minrange: 2, maxrange: 4
        },
 
        Tomahawk: {
        stats: [
            { stat: "Damage", minx: 0.2, maxx: 0.3, mins: 1, maxs: 5, percentage: 100 },
            { stat: "Range", minx: 0, maxx: 0, mins: 1, maxs: 3, percentage: 100 },
            { stat: "Bleed", minx: 0.01, maxx: 0.02, mins: 1, maxs: 3, percentage: 75 },
            { stat: "Bleed Chance", minx: 0.25, maxx: 0.3, mins: 100, maxs: 500, percentage: 100 },
            { stat: "Stun Chance", minx: 0, maxx: 0, mins: 700, maxs: 1000, percentage: 25 },
            { stat: "Amount", minx: 0, maxx: 0, mins: 1, maxs: 5, percentage: 100 }
        ],
        minrarity: 1, maxrarity: 8,
        minrange: 2, maxrange: 4
        },
 
        Warbow: {
        stats: [
            { stat: "Damage", minx: 0.1, maxx: 0.2, mins: 4, maxs: 9, percentage: 100 },
            { stat: "Range", minx: 0, maxx: 0, mins: 3, maxs: 4, percentage: 100 },
            { stat: "Critical Chance", minx: 0.2, maxx: 0.3, mins: 1000, maxs: 2000, percentage: 100 },
            { stat: "Critical Damage", minx: 1.5, maxx: 2, mins: 1000, maxs: 2000, percentage: 75 },
            { stat: "Piercing", minx: 0, maxx: 0, mins: 1, maxs: 4, percentage: 75 }
        ],
        minrarity: 3, maxrarity: 8,
        minrange: 4, maxrange: 5
        },
 
        Kunai: {
        stats: [
            { stat: "Damage", minx: 0.15, maxx: 0.25, mins: 1, maxs: 3, percentage: 100 },
            { stat: "Range", minx: 0, maxx: 0, mins: 3, maxs: 5, percentage: 100 },
            { stat: "Ricochet", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 50 },
            { stat: "Critical Damage", minx: 1, maxx: 1.5, mins: 100, maxs: 1000, percentage: 50 },
            { stat: "Amount", minx: 0, maxx: 0, mins: 1, maxs: 5, percentage: 100 }
        ],
        minrarity: 3, maxrarity: 8,
        minrange: 3, maxrange: 5
        },
 
        ColossalBow: {
        stats: [
            { stat: "Damage", minx: 0.1, maxx: 0.25, mins: 4, maxs: 9, percentage: 100 },
            { stat: "Range", minx: 0, maxx: 0, mins: 4, maxs: 6, percentage: 100 },
            { stat: "Critical Chance", minx: 0.2, maxx: 0.3, mins: 500, maxs: 2000, percentage: 100 },
            { stat: "Critical Damage", minx: 0.05, maxx: 0.125, mins: 100, maxs: 1000, percentage: 75 },
            { stat: "AOE", minx: 0, maxx: 0, mins: 1, maxs: 2, percentage: 75 }
        ],
        minrarity: 4, maxrarity: 8,
        minrange: 5, maxrange: 7
        },
 
        TrinityBow: {
        stats: [
            { stat: "Damage", minx: 0.1, maxx: 0.2, mins: 1, maxs: 8, percentage: 100 },
            { stat: "Range", minx: 0, maxx: 0, mins: 3, maxs: 4, percentage: 100 },
            { stat: "Critical Chance", minx: 0.15, maxx: 0.25, mins: 100, maxs: 1000, percentage: 100 },
            { stat: "Critical Damage", minx: 0.1, maxx: 0.6, mins: 100, maxs: 500, percentage: 50 },
            { stat: "Quick Hit 3", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 50 }
        ],
        minrarity: 4, maxrarity: 8,
        minrange: 3, maxrange: 4
        },
 
        Gnasher: {
        stats: [
            { stat: "Damage", minx: 0.1, maxx: 0.125, mins: 1, maxs: 8, percentage: 100 },
            { stat: "Range", minx: 0, maxx: 0, mins: 2, maxs: 4, percentage: 100 },
            { stat: "Ricochet", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 50 },
            { stat: "Poison Chance", minx: 0.15, maxx: 0.2, mins: 100, maxs: 500, percentage: 75 },
            { stat: "Scatter", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 50 },
            { stat: "Quick Hit 2", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 25 }
        ],
        minrarity: 4, maxrarity: 8,
        minrange: 3, maxrange: 5
        },
 
        Tendril: {
        stats: [
            { stat: "Damage", minx: 0.05, maxx: 0.07, mins: 1, maxs: 3, percentage: 100 },
            { stat: "Range", minx: 0, maxx: 0, mins: 2, maxs: 3, percentage: 100 },
            { stat: "Pull Chance", minx: 0.1, maxx: 0.125, mins: 100, maxs: 500, percentage: 100 }
        ],
        minrarity: 4, maxrarity: 8,
        minrange: 3, maxrange: 3
        },
 
        Fang: {
        stats: [
            { stat: "Damage", minx: 0.2, maxx: 0.25, mins: 1, maxs: 5, percentage: 100 },
            { stat: "Range", minx: 0, maxx: 0, mins: 3, maxs: 5, percentage: 100 },
            { stat: "Amount", minx: 0, maxx: 0, mins: 1, maxs: 5, percentage: 100 },
            { stat: "Poison Chance", minx: 0.2, maxx: 0.25, mins: 500, maxs: 1000, percentage: 100 }
        ],
        minrarity: 4, maxrarity: 8,
        minrange: 3, maxrange: 5
        },
 
    // Chestpieces stats
 
        RusticC: {
        stats: [
            { stat: "Health", minx: 0.3, maxx: 0.5, mins: 10, maxs: 50, percentage: 100 },
            { stat: "Extra Coin", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 5 }
        ],
        minrarity: 0, maxrarity: 4,
        maxarmor: 15
        },
 
        DefenderC: {
        stats: [
            { stat: "Health", minx: 0.5, maxx: 0.75, mins: 40, maxs: 60, percentage: 100 },
            { stat: "Armor", minx: 0.1, maxx: 0.4, mins: 10, maxs: 100, percentage: 50 }
        ],
        minrarity: 1, maxrarity: 6,
        maxarmor: 15
        },
 
        BrodC: {
        stats: [
            { stat: "Health", minx: 0.6, maxx: 0.8, mins: 60, maxs: 100, percentage: 100 },
            { stat: "Armor", minx: 0.1, maxx: 0.2, mins: 100, maxs: 300, percentage: 80 },
            { stat: "+1 Stew Output", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 40 }
        ],
        minrarity: 1, maxrarity: 8,
        maxarmor: 15
        },
 
        GauntletC: {
        stats: [
            { stat: "Health", minx: 0.65, maxx: 0.8, mins: 30, maxs: 40, percentage: 100 },
            { stat: "Armor", minx: 0.3, maxx: 0.5, mins: 200, maxs: 500, percentage: 100 },
            { stat: "Quick Breaking", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 50 },
            { stat: "Double Ore", minx: 1, maxx: 1.5, mins: 100, maxs: 500, percentage: 10 }
        ],
        minrarity: 3, maxrarity: 8,
        maxarmor: 15
        },
 
        MajesticC: {
        stats: [
            { stat: "Health", minx: 0.8, maxx: 1, mins: 20, maxs: 30, percentage: 100 },
            { stat: "Armor", minx: 0.5, maxx: 0.7, mins: 200, maxs: 400, percentage: 100 }
        ],
        minrarity: 4, maxrarity: 8,
        maxarmor: 15
        },
 
        MinerC: {
        stats: [
            { stat: "Health", minx: 0.7, maxx: 0.9, mins: 20, maxs: 30, percentage: 100 },
            { stat: "Armor", minx: 0.5, maxx: 0.7, mins: 200, maxs: 400, percentage: 100 },
            { stat: "Ore Explorer", minx: 0.5, maxx: 0.7, mins: 200, maxs: 400, percentage: 50 }
        ],
        minrarity: 2, maxrarity: 8,
        maxarmor: 15,
        maxoreexplorer: 30
        },
 
        HeavyC: {
        stats: [
            { stat: "Health", minx: 0.9, maxx: 1.1, mins: 20, maxs: 30, percentage: 100 },
            { stat: "Armor", minx: 0.5, maxx: 0.7, mins: 200, maxs: 400, percentage: 100 },
            { stat: "Reflect Chance", minx: 0.5, maxx: 0.7, mins: 200, maxs: 400, percentage: 50 }
        ],
        minrarity: 4, maxrarity: 8,
        maxarmor: 15
        },
 
        GreedC: {
        stats: [
            { stat: "Health", minx: 0.7, maxx: 0.9, mins: 20, maxs: 40, percentage: 100 },
            { stat: "Armor", minx: 0.1, maxx: 0.15, mins: 200, maxs: 500, percentage: 100 },
            { stat: "Double Item Chance", minx: 0.1, maxx: 0.15, mins: 200, maxs: 500, percentage: 50 }
        ],
        minrarity: 3, maxrarity: 8,
        maxarmor: 15
        },
 
        MagicianC: {
        stats: [
            { stat: "Health", minx: 0.5, maxx: 0.6, mins: 10, maxs: 30, percentage: 100 },
            { stat: "Mana %", minx: 0.1, maxx: 0.125, mins: 200, maxs: 500, percentage: 100 }
        ],
        minrarity: 2, maxrarity: 8,
        maxarmor: 15,
        maxmana: 50
        },
 
        MonsterC: {
        stats: [
            { stat: "Health", minx: 0.8, maxx: 1, mins: 20, maxs: 50, percentage: 100 },
            { stat: "Armor", minx: 0.1, maxx: 0.15, mins: 200, maxs: 500, percentage: 100 },
            { stat: "Boss Damage", minx: 0.1, maxx: 0.15, mins: 200, maxs: 500, percentage: 100 }
        ],
        minrarity: 4, maxrarity: 8,
        maxarmor: 15
        },
 
        FanaticC: {
        stats: [
            { stat: "Health", minx: 0.1, maxx: 0.15, mins: 2, maxs: 20, percentage: 100 },
            { stat: "Max Barrier", minx: 0.25, maxx: 0.35, mins: 100, maxs: 500, percentage: 75 },
            { stat: "Haste Damage", minx: 0.05, maxx: 0.15, mins: 100, maxs: 200, percentage: 50 }
        ],
        minrarity: 6, maxrarity: 8,
        maxarmor: 15
        },
 
        SerpentC: {
        stats: [
            { stat: "Health", minx: 0.2, maxx: 0.3, mins: 10, maxs: 20, percentage: 100 },
            { stat: "Mana %", minx: 0.1, maxx: 0.2, mins: 100, maxs: 250, percentage: 100 },
            { stat: "Armor", minx: 0.1, maxx: 0.15, mins: 100, maxs: 400, percentage: 75 },
            { stat: "Free Spellcast", minx: 0.05, maxx: 0.075, mins: 100, maxs: 200, percentage: 50 }
        ],
        minrarity: 4, maxrarity: 8,
        maxarmor: 15,
        maxmana: 50
        },
 
        Cloak: {
        stats: [
            { stat: "Health", minx: 0.3, maxx: 0.4, mins: 10, maxs: 40, percentage: 100 },
            { stat: "Armor", minx: 0.1, maxx: 0.2, mins: 100, maxs: 250, percentage: 50 },
            { stat: "Haste Damage", minx: 0.1, maxx: 0.15, mins: 100, maxs: 500, percentage: 75 },
            { stat: "Haste Chance", minx: 0.03, maxx: 0.04, mins: 0, maxs: 200, percentage: 75 }
        ],
        minrarity: 4, maxrarity: 8,
        maxarmor: 15
        },
 
        WarlockC: {
        stats: [
            { stat: "Health", minx: 0.4, maxx: 0.5, mins: 50, maxs: 100, percentage: 100 },
            { stat: "Armor", minx: 0.05, maxx: 0.1, mins: 100, maxs: 500, percentage: 100 },
            { stat: "Mana %", minx: 0.1, maxx: 0.12, mins: 100, maxs: 500, percentage: 100 },
            { stat: "Paralysis Chance", minx: 0.2, maxx: 0.25, mins: 100, maxs: 250, percentage: 75 }
        ],
        minrarity: 4, maxrarity: 8,
        maxarmor: 15,
        maxmana: 50
        },
 
        RoninC: {
        stats: [
            { stat: "Health", minx: 0.4, maxx: 0.5, mins: 10, maxs: 20, percentage: 100 },
            { stat: "Armor", minx: 0.1, maxx: 0.2, mins: 200, maxs: 500, percentage: 100 },
            { stat: "Elite Damage", minx: 0.15, maxx: 0.2, mins: 100, maxs: 500, percentage: 75 },
            { stat: "Poison Damage", minx: 0.15, maxx: 0.25, mins: 100, maxs: 1000, percentage: 50 }
        ],
        minrarity: 4, maxrarity: 8,
        maxarmor: 15
        },
 
        DragonC: {
        stats: [
            { stat: "Health", minx: 0.8, maxx: 0.9, mins: 30, maxs: 40, percentage: 100 },
            { stat: "Armor", minx: 0.3, maxx: 0.4, mins: 200, maxs: 500, percentage: 100 },
            { stat: "Knockback Resistance", minx: 0.15, maxx: 0.2, mins: 100, maxs: 500, percentage: 75 }
        ],
        minrarity: 4, maxrarity: 8,
        maxarmor: 15
        },
 
        SentinelC: {
        stats: [
            { stat: "Health", minx: 0.8, maxx: 1, mins: 30, maxs: 60, percentage: 100 },
            { stat: "Armor", minx: 0.05, maxx: 0.1, mins: 100, maxs: 500, percentage: 100 },
            { stat: "Boss Damage", minx: 0.1, maxx: 0.125, mins: 100, maxs: 500, percentage: 50 },
            { stat: "Hp %", minx: 0.2, maxx: 0.3, mins: 500, maxs: 1000, percentage: 25 }
        ],
        minrarity: 4, maxrarity: 8,
        maxarmor: 15
        },
 
        DivingC: {
        stats: [
            { stat: "Health", minx: 0.8, maxx: 1, mins: 30, maxs: 60, percentage: 100 },
            { stat: "Armor", minx: 0.05, maxx: 0.1, mins: 100, maxs: 500, percentage: 100 },
            { stat: "Oxygen Boost", minx: 0.1, maxx: 0.2, mins: 100, maxs: 500, percentage: 50 }
        ],
        minrarity: 0, maxrarity: 8,
        maxarmor: 15
        },
 
    // Helmet stats
 
        RusticH: {
        stats: [
            { stat: "Health", minx: 0.03, maxx: 0.05, mins: 1, maxs: 20, percentage: 100 }
        ],
        minrarity: 0, maxrarity: 4,
        maxarmor: 5
        },
 
        DefenderH: {
        stats: [
            { stat: "Health", minx: 0.075, maxx: 0.1, mins: 10, maxs: 20, percentage: 100 },
            { stat: "Hp Efficiency", minx: 1, maxx: 2, mins: 500, maxs: 1000, percentage: 50 }
        ],
        minrarity: 1, maxrarity: 8,
        maxarmor: 5
        },
 
        BrodH: {
        stats: [
            { stat: "Health", minx: 0.1, maxx: 0.15, mins: 2, maxs: 40, percentage: 100 }
        ],
        minrarity: 2, maxrarity: 6,
        maxarmor: 5
        },
 
        GauntletH: {
        stats: [
            { stat: "Health", minx: 0.1, maxx: 0.2, mins: 20, maxs: 30, percentage: 100 },
            { stat: "Armor", minx: 0.05, maxx: 0.09, mins: 100, maxs: 400, percentage: 80 },
            { stat: "Endure", minx: 0.5, maxx: 0.75, mins: 100, maxs: 500, percentage: 25 }
        ],
        minrarity: 3, maxrarity: 8,
        maxarmor: 5
        },
 
        MajesticH: {
        stats: [
            { stat: "Health", minx: 0.2, maxx: 0.3, mins: 40, maxs: 60, percentage: 100 },
            { stat: "Armor", minx: 0.1, maxx: 0.15, mins: 200, maxs: 500, percentage: 100 }
        ],
        minrarity: 4, maxrarity: 8,
        maxarmor: 5
        },
 
        GustafsMask: {
        stats: [
            { stat: "Health", minx: 0.1, maxx: 0.15, mins: 2, maxs: 20, percentage: 100 },
            { stat: "Poison Reduction", minx: 0.2, maxx: 0.6, mins: 100, maxs: 500, percentage: 50 },
            { stat: "Unbinding", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 25 },
            { stat: "Panic Resist", minx: 0.04, maxx: 0.05, mins: 100, maxs: 500, percentage: 50 }
        ],
        minrarity: 0, maxrarity: 8,
        maxarmor: 5
        },
 
        SnowHat: {
        stats: [
            { stat: "Health", minx: 0.03, maxx: 0.05, mins: 1, maxs: 20, percentage: 100 },
            { stat: "Snow Day", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 100 }
        ],
        minrarity: 0, maxrarity: 8,
        maxarmor: 5
        },
 
        MinerH: {
        stats: [
            { stat: "Health", minx: 0.1, maxx: 0.2, mins: 40, maxs: 60, percentage: 100 },
            { stat: "Armor", minx: 0.1, maxx: 0.15, mins: 200, maxs: 500, percentage: 100 },
            { stat: "Ore Explorer", minx: 0.1, maxx: 0.15, mins: 200, maxs: 500, percentage: 75 }
        ],
        minrarity: 2, maxrarity: 8,
        maxarmor: 5,
        maxoreexplorer: 20
        },
 
        HeavyH: {
        stats: [
            { stat: "Health", minx: 0.2, maxx: 0.3, mins: 40, maxs: 60, percentage: 100 },
            { stat: "Armor", minx: 0.1, maxx: 0.15, mins: 200, maxs: 500, percentage: 100 },
            { stat: "Reflect Chance", minx: 0.1, maxx: 0.15, mins: 200, maxs: 500, percentage: 75 }
        ],
        minrarity: 4, maxrarity: 8,
        maxarmor: 5
        },
 
        GreedH: {
        stats: [
            { stat: "Health", minx: 0.15, maxx: 0.2, mins: 10, maxs: 20, percentage: 100 },
            { stat: "Armor", minx: 0.1, maxx: 0.15, mins: 200, maxs: 500, percentage: 100 },
            { stat: "Coin Magnet", minx: 0, maxx: 0, mins: 2, maxs: 2, percentage: 75 }
        ],
        minrarity: 3, maxrarity: 8,
        maxarmor: 5
        },
 
        MagicianH: {
        stats: [
            { stat: "Health", minx: 0.2, maxx: 0.3, mins: 40, maxs: 60, percentage: 100 },
            { stat: "Mana %", minx: 0.1, maxx: 0.125, mins: 200, maxs: 500, percentage: 100 },
            { stat: "Spell Damage", minx: 0.1, maxx: 0.2, mins: 200, maxs: 500, percentage: 75 }
        ],
        minrarity: 3, maxrarity: 8,
        maxarmor: 5,
        maxmana: 10
        },
 
        MonsterH: {
        stats: [
            { stat: "Health", minx: 0.15, maxx: 0.25, mins: 10, maxs: 20, percentage: 100 },
            { stat: "Armor", minx: 0.1, maxx: 0.15, mins: 200, maxs: 500, percentage: 100 },
            { stat: "Elite Damage", minx: 0.1, maxx: 0.15, mins: 200, maxs: 500, percentage: 100 }
        ],
        minrarity: 4, maxrarity: 8,
        maxarmor: 5
        },
 
        FanaticH: {
        stats: [
            { stat: "Health", minx: 0.05, maxx: 0.1, mins: 2, maxs: 6, percentage: 100 },
            { stat: "Max Barrier", minx: 0.15, maxx: 0.25, mins: 100, maxs: 250, percentage: 75 },
            { stat: "Unbinding", minx: 0, maxx: 0, mins: 1, maxs: 1, percentage: 75 }
        ],
        minrarity: 6, maxrarity: 8,
        maxarmor: 5
        },
 
        SerpentH: {
        stats: [
            { stat: "Health", minx: 0.1, maxx: 0.15, mins: 10, maxs: 20, percentage: 100 },
            { stat: "Mana %", minx: 0.05, maxx: 0.075, mins: 100, maxs: 200, percentage: 100 },
            { stat: "Armor", minx: 0.05, maxx: 0.1, mins: 100, maxs: 250, percentage: 75 },
            { stat: "Spellcast Marty", minx: 0.1, maxx: 0.25, mins: 100, maxs: 500, percentage: 75 }
        ],
        minrarity: 4, maxrarity: 8,
        maxarmor: 5,
        maxmana: 10
        },
 
        WarlockH: {
        stats: [
            { stat: "Health", minx: 0.1, maxx: 0.15, mins: 10, maxs: 20, percentage: 100 },
            { stat: "Armor", minx: 0.05, maxx: 0.1, mins: 100, maxs: 250, percentage: 100 },
            { stat: "Mana Efficiency", minx: 0.1, maxx: 0.2, mins: 100, maxs: 500, percentage: 75 },
            { stat: "Free Spellcast", minx: 0.05, maxx: 0.06, mins: 100, maxs: 250, percentage: 50 }
        ],
        minrarity: 4, maxrarity: 8,
        maxarmor: 5
        },
 
        RoninH: {
        stats: [
            { stat: "Health", minx: 0.1, maxx: 0.15, mins: 10, maxs: 20, percentage: 100 },
            { stat: "Armor", minx: 0.1, maxx: 0.15, mins: 200, maxs: 500, percentage: 75 },
            { stat: "Throw Damage", minx: 0.1, maxx: 0.125, mins: 100, maxs: 500, percentage: 50 },
            { stat: "Recycle Throwable", minx: 0.03, maxx: 0.04, mins: 50, maxs: 200, percentage: 25 }
        ],
        minrarity: 4, maxrarity: 8,
        maxarmor: 5
        },
 
        FlameH: {
        stats: [
            { stat: "Health", minx: 0.1, maxx: 0.15, mins: 4, maxs: 10, percentage: 100 },
            { stat: "Burn Chance", minx: 0.2, maxx: 0.25, mins: 100, maxs: 500, percentage: 100 },
            { stat: "Burn Damage", minx: 0.3, maxx: 0.6, mins: 4, maxs: 10, percentage: 100 }
        ],
        minrarity: 4, maxrarity: 8,
        maxarmor: 5
        },
 
        DragonH: {
        stats: [
            { stat: "Health", minx: 0.1, maxx: 0.15, mins: 20, maxs: 30, percentage: 100 },
            { stat: "Armor", minx: 0.05, maxx: 0.09, mins: 100, maxs: 400, percentage: 100 },
            { stat: "Stun Resistance", minx: 0.1, maxx: 0.2, mins: 100, maxs: 250, percentage: 50 }
        ],
        minrarity: 4, maxrarity: 8,
        maxarmor: 5
        },
 
        SentinelH: {
        stats: [
            { stat: "Health", minx: 0.25, maxx: 0.35, mins: 20, maxs: 30, percentage: 100 },
            { stat: "Armor", minx: 0.5, maxx: 1, mins: 100, maxs: 500, percentage: 100 },
            { stat: "Endure", minx: 0.5, maxx: 0.85, mins: 100, maxs: 250, percentage: 75 }
        ],
        minrarity: 4, maxrarity: 8,
        maxarmor: 5
        },
 
        DivingH: {
        stats: [
            { stat: "Health", minx: 0.25, maxx: 0.35, mins: 30, maxs: 60, percentage: 100 },
            { stat: "Armor", minx: 0.05, maxx: 0.09, mins: 100, maxs: 400, percentage: 100 },
            { stat: "Water Breathing", minx: 0.2, maxx: 0.3, mins: 100, maxs: 500, percentage: 50 }
        ],
        minrarity: 2, maxrarity: 8,
        maxarmor: 5
        },
    };