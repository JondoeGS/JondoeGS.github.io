// Toggles the collapsible ☰ menu
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}

// Close menu if user clicks outside of it
document.addEventListener("click", function(event) {
  const menu = document.getElementById("menu");
  const menuToggle = document.getElementById("menuToggle");

  // If menu is open, and click is outside menu & toggle button → close
  if (menu.classList.contains("show") && 
      !menu.contains(event.target) && 
      !menuToggle.contains(event.target)) {
    menu.classList.remove("show");
  }
});

// Formats numbers using user's locale (e.g., 1,000 vs 1.000)
function formatNumber(value) {
  const userLocale = navigator.language || 'en-US';
  return new Intl.NumberFormat(userLocale).format(value);
}

// Simple tab switcher
function showTab(id) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

// Initialize Equipment Stats Lookup tab
function initEquipmentStats() {
  const equipmentSelect = document.getElementById('equipment');
  const raritySelect = document.getElementById('rarity');
  const levelSelect = document.getElementById('level');

  // Populate equipment types
  Object.keys(equipmentStats).forEach(type => {
    const option = document.createElement('option');
    option.value = type;
    option.textContent = type;
    equipmentSelect.appendChild(option);
  });

  // Populate rarities
  Object.keys(rarityValues).forEach(rarity => {
    const option = document.createElement('option');
    option.value = rarity;
    option.textContent = rarity;
    raritySelect.appendChild(option);
  });

  // Populate levels
  for (let i = 1; i <= 110; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    levelSelect.appendChild(option);
  }

  // Add change listeners
  [equipmentSelect, raritySelect, levelSelect].forEach(el => {
    el.addEventListener('change', updateResultsHeader);
  });

  // Trigger initial update
  updateResultsHeader();
}

// Populate equipmentResults table
function updateResultsHeader() {
  const type = document.getElementById('equipment').value;
  const rarityName = document.getElementById('rarity').value;
  const level = parseInt(document.getElementById('level').value);
  const rarity = rarityValues[rarityName];
  const equipment = equipmentStats[type] || [];

  const resultTableHeader = document.querySelector('#equipmentResults thead');
  const resultTableBody = document.querySelector('#equipmentResults tbody');

  // Clear table
  resultTableHeader.innerHTML = '<tr><th>Stat</th><th>Minimum</th><th>Maximum</th><th>%</th></tr>';
  resultTableBody.innerHTML = '';

  if (!equipment.length) {
    resultTableBody.innerHTML = '<tr><td colspan="4">No stats available for this equipment.</td></tr>';
    return;
  }

  equipment.forEach(item => {
    const stat = item.stat;
    const minresult = item.min + item.growth * level * rarity;
    const maxresult = item.max + item.growth * level * rarity;
    const isPercentage = percentageStats.includes(stat);
    const isRounded = roundStats.includes(stat);

    let displayMin = isRounded ? Math.round(minresult) : minresult.toFixed(2);
    let displayMax = isRounded ? Math.round(maxresult) : maxresult.toFixed(2);
    if (isPercentage) {
      displayMin += '%';
      displayMax += '%';
    }

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${stat}</td>
      <td>${displayMin}</td>
      <td>${displayMax}</td>
      <td>${isPercentage ? '✓' : ''}</td>
    `;
    resultTableBody.appendChild(row);
  });
}

// Initialize Glacier Calculator tab
function initGlacierCalculator() {
  const levelSelect = document.getElementById('LEVEL');
  if (levelSelect && levelSelect.options.length === 0) {
    for (let i = 15; i <= 110; i++) {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = i;
      levelSelect.appendChild(opt);
    }
  }

  document.querySelectorAll('#glacierTab select, #glacierTab input').forEach(el => {
    el.addEventListener('change', calculateGlacierDamage);
  });

  calculateGlacierDamage();
}

// Core logic for Glacier Calculator
function calculateGlacierDamage() {
  const LEVEL = parseInt(document.getElementById('LEVEL')?.value || 0);
  const WEAPONMP = parseFloat(document.getElementById('WEAPONMP')?.value) || 0;
  const CASTSURGE = parseFloat(document.getElementById('CASTSURGE')?.value) || 0;
  const AVAILABLESP = parseInt(document.getElementById('AVAILABLESP')?.value || 0);
  const EMPOWERMENT = document.getElementById('EMPOWERMENT')?.value === 'TRUE';
  const MORGANA = document.getElementById('MORGANA')?.value === 'TRUE';
  const SPELLDAMAGE = parseFloat(document.getElementById('SPELLDAMAGE')?.value) || 0;
  const FORKMP = parseFloat(document.getElementById('FORKMP')?.value) || 0;
  const ADVENTUREMP = parseInt(document.getElementById('ADVENTUREMP')?.value || 0);
  const ADVENTURESD = parseInt(document.getElementById('ADVENTURESD')?.value || 0);

  let bestY = 0;
  let bestDamage = 0;

  for (let Y = 0; Y <= AVAILABLESP; Y++) {
    const mpGain = 0.2 * LEVEL ** 2 + 3;
    const mpScale = 1 + Y * (EMPOWERMENT ? 10 : 5) / 100;
    const totalMP = mpGain * mpScale + WEAPONMP;

    const glacierBonus = 1 + ((800 + (AVAILABLESP - Y) * 25) / 100)
      + (CASTSURGE + ADVENTURESD * 10 + SPELLDAMAGE) / 100;

    const extraBuff = 1 + ((MORGANA ? 10 : 0) + (ADVENTUREMP > 0 ? 20 + 5 * (ADVENTUREMP - 1) : 0) + FORKMP) / 100;

    const totalDamage = totalMP * glacierBonus * extraBuff;

    if (totalDamage > bestDamage) {
      bestDamage = totalDamage;
      bestY = Y;
    }
  }

  document.getElementById('glacierSp').textContent = AVAILABLESP - bestY;
  document.getElementById('mpSp').textContent = bestY;
  document.getElementById('glacierDmg').textContent = Math.round(bestDamage).toLocaleString();
  document.getElementById('manaSacrifice').textContent = Math.round(bestDamage * 2).toLocaleString();
}

// Core logic for Archer Damage
//function calculateArcherDamage() {
  //const PL = +document.getElementById('pl').value;
  //const SP = +document.getElementById('sp').value;
  //const BD = +document.getElementById('bd').value;
  //const BC = +document.getElementById('bc').value;
  //const totalSlots = +document.getElementById('upgrades').value;
  //const critAllowed = !document.getElementById('bc').disabled;
  //const SD = 1;
  //const SC = 1;

  //let bestSU = 0, bestCU = 0, bestUP = 0, bestUC = 0;
  //let maxDamage = 0;

  //const baseCore = 0.14 * PL * PL + 2;

  //for (let UP = 0; UP <= totalSlots; UP++) {
    //const UC = critAllowed ? (totalSlots - UP) : 0;
    //const WD = BD * (1 + 0.25 * UP);
    //const WC = BC * (1 + 0.25 * UC);

    //for (let SU = 0; SU <= SP; SU++) {
      //const CU = SP - SU;
      //const rangeFactor = 1.05 + (SD * 5 * SU) / 100;
      //const critFactor = 1 + ((SC * 5 * CU) + WC) / 100;
      //const baseDamage = baseCore * rangeFactor + WD;
      //const totalDamage = baseDamage * critFactor;

      //if (totalDamage > maxDamage) {
        //maxDamage = totalDamage;
        //bestSU = SU;
        //bestCU = CU;
        //bestUP = UP;
        //bestUC = UC;
      //}
    //}
  //}

  //document.getElementById('bestSU').textContent = bestSU;
  //document.getElementById('bestCU').textContent = bestCU;
  //document.getElementById('bestUP').textContent = bestUP;
  //document.getElementById('bestUC').textContent = bestUC;
  //document.getElementById('maxDamage').textContent = maxDamage.toFixed(2);
//}

//function updateArcherBDandBC() {
  //const type = document.getElementById('archerWeaponName').value;
  //const rarityName = document.getElementById('archerWeaponRarity').value;
  //const level = parseInt(document.getElementById('archerWeaponLevel').value);
  //const rarity = rarityValues[rarityName]; // 0 to 8
  //const weapon = equipmentStats[type];
  //const bdInput = document.getElementById('bd');
  //const bcInput = document.getElementById('bc');

  //if (!weapon || !weapon.stats) return;

  // === Damage Calculation ===
  //const dmg = weapon.stats.find(s => s.stat === "Damage");
  //if (dmg) {
    //const baseDmg =
      //(dmg.maxx + ((dmg.maxx - dmg.minx) / 2 * rarity)) * (level ** 2) +
      //dmg.maxs + ((dmg.maxs - dmg.mins) / 2 * rarity);
    //bdInput.value = Math.round(baseDmg / 4);
  //}

  // === Critical Damage Calculation ===
  //const crit = weapon.stats.find(s => s.stat === "Critical Damage");
  //if (crit) {
    //const baseCrit =
      //(crit.maxx + ((crit.maxx - crit.minx) / 2 * rarity)) * (level ** 2) +
      //crit.maxs + ((crit.maxs - crit.mins) / 2 * rarity);
    //bcInput.value = Math.round(baseCrit / 4);
    //bcInput.disabled = false;
    //bcInput.classList.remove("disabled");
  //} else {
    //bcInput.value = 0;
    //bcInput.disabled = true;
    //bcInput.classList.add("disabled");
  //}
//}

//function initArcherCalculator() {
  //const fields = ['pl', 'sp', 'bd', 'bc', 'upgrades'];
  //fields.forEach(id => {
    //const el = document.getElementById(id);
    //if (el) el.addEventListener('input', calculateArcherDamage);
  //});

  //calculateArcherDamage();
//}

//function initArcherStats() {
  //const weaponSelect = document.getElementById('archerWeaponName');
  //const levelSelect = document.getElementById('archerWeaponLevel');
  //const raritySelect = document.getElementById('archerWeaponRarity');

  // ✅ Manually filtered list of ranged weapons with minrange and maxrange
  //const rangedWeapons = [
    //"Quick Bow", "Tri-bow", "Recurve Bow", "Shuriken", "Tomahawk",
    //"Warbow", "Kunai", "Colossal Bow", "Trinity Bow",
    //"Gnasher", "Tendril", "Fang"
  //];

  //rangedWeapons.forEach(name => {
    //const option = document.createElement('option');
    //option.value = name;
    //option.textContent = name;
    //weaponSelect.appendChild(option);
  //});

  // Weapon level dropdown: 1–110
  //for (let i = 1; i <= 110; i++) {
    //const option = document.createElement('option');
    //option.value = i;
    //option.textContent = i;
    //levelSelect.appendChild(option);
  //}

  // Rarity dropdown
  //Object.keys(rarityValues).forEach(rarity => {
    //const option = document.createElement('option');
    //option.value = rarity;
    //option.textContent = rarity;
    //raritySelect.appendChild(option);
  //});

  //weaponSelect.addEventListener('change', updateArcherBDandBC);
  //levelSelect.addEventListener('change', updateArcherBDandBC);
  //raritySelect.addEventListener('change', updateArcherBDandBC);

  // Run once on load
  //updateArcherBDandBC();

//}

function updateResultsHeader() {
  const type = document.getElementById('equipment').value;
  const rarityName = document.getElementById('rarity').value;
  const level = parseInt(document.getElementById('level').value);
  const rarity = rarityValues[rarityName];
  const equipment = equipmentStats[type];

  const resultTableHeader = document.querySelector('#equipmentResults thead');
  const resultTableBody = document.querySelector('#equipmentResults tbody');

  resultTableHeader.innerHTML = '<tr><th>Stat</th><th>Minimum</th><th>Maximum</th><th>%</th></tr>';
  resultTableBody.innerHTML = '';

  if (!equipment || !equipment.stats) {
    resultTableBody.innerHTML = '<tr><td colspan="4">No stats available for this equipment.</td></tr>';
    return;
  }

  const percentageStats = [
    "Critical Chance", "Critical Damage", "Lifesteal", "Burn Chance", "Bleed Chance", "Berserk Damage", "Stun Chance",
    "Armor", "Hp Efficiency", "Double Ore", "Endure", "Poison Reduction", "Triple Ore", "Knockback", "Life Heal",
    "Mana Efficiency", "Paralysis Chance", "Cast Surge", "Ore Explorer", "Reflect Chance", "Spell Damage",
    "Elite Damage", "Boss Damage", "Poison Chance", "Quad Ore", "Max Barrier", "Haste Damage", "Self Damage",
    "Spellcast Marty", "Free Spellcast", "Haste Chance", "Double Item Chance", "Mana %", "Pull Chance",
    "Stun Resistance", "Throw Damage", "Poison Damage", "Knockback Resistance", "Oxygen Boost", "Water Breathing",
    "Panic Resist", "Recycle Throwable", "Hp %"
  ];

  const roundStats = [
    "Health", "Damage", "Mana", "Mp Damage", "Extra Coin", "Burn Damage", "Bleed", "+1 Stew Output", "Multi-Atk",
    "Quick Breaking", "Unbinding", "Range", "Ricochet", "Mining", "Snow Day", "Amount", "Scatter", "Sweeping",
    "Looting", "Coin Magnet", "Piercing", "Crit 3 Combo", "Quick Hit 3", "Crit 2 Combo", "Knockback 3", "Controller",
    "Paralysis 3", "Quick Hit 2", "AOE"
  ];

  const romanNumeralStats = ["Piercing", "Mining"];

  const statMinCapKeys = { "Range": "minrange" };
  const statMaxCapKeys = {
    "Range": "maxrange",
    "Armor": "maxarmor",
    "Mana %": "maxmana",
    "Ore Explorer": "maxoreexplorer",
    "Critical Damage": "maxcritdmg"
  };

  const minValues = { "+1 Stew Output": 1, "Quick Breaking": 1, "Unbinding": 1, "Multi-Atk": 1 };
  const maxValues = { "Critical Chance": 100, "Triple Ore": 100, "Double Ore": 100, "Spell Damage": 200 };

  const minrarity = equipment.minrarity;
  const maxrarity = equipment.maxrarity;

  equipment.stats.forEach(item => {
    let stat = item.stat;

    let minCalc = (item.minx + ((item.maxx - item.minx) / 2 * rarity)) * (level ** 2) +
                  item.mins + ((item.maxs - item.mins) / 2 * rarity);
    let maxCalc = (item.maxx + ((item.maxx - item.minx) / 2 * rarity)) * (level ** 2) +
                  item.maxs + ((item.maxs - item.mins) / 2 * rarity);

    let min = roundStats.includes(stat) ? Math.round(minCalc) : (minCalc / 100).toFixed(2);
    let max = roundStats.includes(stat) ? Math.round(maxCalc) : (maxCalc / 100).toFixed(2);

    const minCapKey = statMinCapKeys[stat];
    if (minCapKey && equipment[minCapKey] !== undefined) {
      min = Math.max(min, equipment[minCapKey]);
      max = Math.max(max, equipment[minCapKey]);
    }

    const maxCapKey = statMaxCapKeys[stat];
    if (maxCapKey && equipment[maxCapKey] !== undefined) {
      min = Math.min(min, equipment[maxCapKey]);
      max = Math.min(max, equipment[maxCapKey]);
    }

    if (maxValues[stat] !== undefined) {
      min = Math.min(min, maxValues[stat]);
      max = Math.min(max, maxValues[stat]);
    }

    if (percentageStats.includes(stat)) {
      min += "%";
      max += "%";
    }

    if (romanNumeralStats.includes(stat)) {
      min = toRoman(parseInt(min));
      max = toRoman(parseInt(max));
    }

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${stat}</td>
      <td>${formatNumber(min)}</td>
      <td>${formatNumber(max)}</td>
      <td>${item.percentage ?? ''}%</td>
    `;
    resultTableBody.appendChild(row);
  });

  const rarityRow = document.createElement("tr");
  rarityRow.innerHTML = `
    <td>Rarity:</td>
    <td colspan="3">${getRarityNameByValue(minrarity)} - ${getRarityNameByValue(maxrarity)}</td>
  `;
  resultTableBody.appendChild(rarityRow);
}

function formatNumber(value) {
  const userLocale = navigator.language || 'en-US';
  return isNaN(value) ? value : new Intl.NumberFormat(userLocale).format(value);
}

function toRoman(num) {
  const romanMap = ["", "I", "II", "III", "IV"];
  if (isNaN(num) || num < 1) return "I";
  if (num >= 4) return "IV";
  return romanMap[num];
}

function getRarityNameByValue(value) {
  for (const [name, num] of Object.entries(rarityValues)) {
    if (num === value) return name;
  }
  return "Unknown";
}

// Export the init function for use in HTML

window.initEquipmentStats = initEquipmentStats;
window.initGlacierCalculator = initGlacierCalculator;
//window.initArcherCalculator = initArcherCalculator;
