// Temporary override storage.
// Refreshing the page clears this automatically.
let equipmentOverrides = {};
let currentEquipmentType = null;

// Formats numbers using user's locale
function formatNumber(value) {
  const userLocale = navigator.language || 'en-US';
  return isNaN(value) ? value : new Intl.NumberFormat(userLocale).format(value);
}

function getRarityNameByValue(value) {
  for (const [name, num] of Object.entries(rarityValues)) {
    if (num === value) return name;
  }
  return "Unknown";
}

function toRoman(num) {
  const romanMap = ["", "I", "II", "III", "IV"];
  if (isNaN(num) || num < 1) return "I";
  if (num >= 4) return "IV";
  return romanMap[num];
}

// Initialize Equipment Stats Lookup
function initEquipmentStats() {
  const equipmentSelect = document.getElementById('equipment');
  const raritySelect = document.getElementById('rarity');
  const levelSelect = document.getElementById('level');

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

  currentEquipmentType = equipmentSelect.value;

  equipmentSelect.addEventListener('change', () => {
    currentEquipmentType = equipmentSelect.value;
    equipmentOverrides = {}; // reset only when equipment changes
    updateResultsHeader();
  });

  raritySelect.addEventListener('change', updateResultsHeader);
  levelSelect.addEventListener('change', updateResultsHeader);

  updateResultsHeader();
}

// Main Equipment Results table update
function updateResultsHeader() {
  const type = document.getElementById('equipment').value;
  const rarityName = document.getElementById('rarity').value;
  const level = parseInt(document.getElementById('level').value);
  const rarity = rarityValues[rarityName];
  const equipment = equipmentStats[type];

  const resultTableHeader = document.querySelector('#equipmentResults thead');
  const resultTableBody = document.querySelector('#equipmentResults tbody');

  resultTableHeader.innerHTML = `
    <tr>
      <th>Stat</th>
      <th>Minimum</th>
      <th>Maximum</th>
      <th>%</th>
      <th>MinX</th>
      <th>MaxX</th>
      <th>MinS</th>
      <th>MaxS</th>
    </tr>
  `;

  resultTableBody.innerHTML = '';

  if (!equipment || !equipment.stats) {
    resultTableBody.innerHTML = '<tr><td colspan="8">There was an error. Please contact @Jondoe.</td></tr>';
    return;
  }

  const percentageStats = [
    "Critical Chance", "Critical Damage", "Lifesteal", "Burn Chance", "Bleed Chance",
    "Berserk Damage", "Stun Chance", "Armor", "Hp Efficiency", "Double Ore",
    "Endure", "Poison Reduction", "Triple Ore", "Knockback", "Life Heal",
    "Mana Efficiency", "Paralysis Chance", "Cast Surge", "Ore Explorer",
    "Reflect Chance", "Spell Damage", "Elite Damage", "Boss Damage",
    "Poison Chance", "Quad Ore", "Max Barrier", "Haste Damage", "Self Damage",
    "Spellcast Marty", "Free Spellcast", "Haste Chance", "Double Item Chance",
    "Mana %", "Pull Chance", "Stun Resistance", "Throw Damage", "Poison Damage",
    "Knockback Resistance", "Oxygen Boost", "Water Breathing", "Panic Resist",
    "Recycle Throwable", "Hp %"
  ];

  const roundStats = [
    "Health", "Damage", "Mana", "Mp Damage", "Extra Coin", "Burn Damage",
    "Bleed", "+1 Stew Output", "Multi-Atk", "Quick Breaking", "Unbinding",
    "Range", "Ricochet", "Snow Day", "Amount", "Scatter", "Sweeping",
    "Coin Magnet", "Crit 3 Combo", "Quick Hit 3", "Crit 2 Combo",
    "Knockback 3", "Controller", "Paralysis 3", "Quick Hit 2", "AOE"
  ];

  const romanNumeralStats = ["Piercing", "Mining", "Looting"];

  const statMinCapKeys = {
    "Range": "minrange"
  };

  const statMaxCapKeys = {
    "Range": "maxrange",
    "Armor": "maxarmor",
    "Mana %": "maxmana",
    "Ore Explorer": "maxoreexplorer",
    "Critical Damage": "maxcritdmg",
    "Reflect Chance": "maxreflect",
    "Double Item Chance": "maxgreed"
  };

  const minValues = {
    "Extra Coin": 1,
    "+1 Stew Output": 1,
    "Multi-Atk": 1,
    "Quick Breaking": 1,
    "Unbinding": 1,
    "Ricochet": 1,
    "Mining": 1,
    "Snow Day": 1,
    "Scatter": 1,
    "Sweeping": 1,
    "Looting": 1,
    "Coin Magnet": 1,
    "Piercing": 1,
    "Crit 3 Combo": 1,
    "Quick Hit 3": 1,
    "Crit 2 Combo": 1,
    "Knockback 3": 1,
    "Controller": 1,
    "Paralysis 3": 1,
    "Quick Hit 2": 1,
    "AOE": 1
  };

  const maxValues = {
    "Critical Chance": 100,
    "Extra Coin": 1,
    "Lifesteal": 100,
    "Burn Chance": 100,
    "Bleed Chance": 100,
    "Berserk Damage": 300,
    "Stun Chance": 50,
    "Hp Efficiency": 65,
    "+1 Stew Output": 1,
    "Multi-Atk": 3,
    "Quick Breaking": 1,
    "Double Ore": 100,
    "Endure": 50,
    "Unbinding": 1,
    "Poison Reduction": 50,
    "Ricochet": 1,
    "Triple Ore": 100,
    "Mining": 4,
    "Knockback": 100,
    "Snow Day": 1,
    "Scatter": 1,
    "Sweeping": 1,
    "Looting": 4,
    "Life Heal": 100,
    "Mana Efficiency": 30,
    "Paralysis Chance": 50,
    "Cast Surge": 300,
    "Coin Magnet": 2,
    "Spell Damage": 200,
    "Elite Damage": 10,
    "Boss Damage": 10,
    "Piercing": 2,
    "Poison Chance": 30,
    "Crit 3 Combo": 1,
    "Quad Ore": 100,
    "Max Barrier": 50,
    "Haste Damage": 10,
    "Self Damage": 10,
    "Spellcast Marty": 40,
    "Free Spellcast": 10,
    "Haste Chance": 5,
    "Quick Hit 3": 1,
    "Crit 2 Combo": 1,
    "Knockback 3": 1,
    "Controller": 1,
    "Pull Chance": 100,
    "Stun Resistance": 100,
    "Paralysis 3": 1,
    "Quick Hit 2": 1,
    "Knockback Resistance": 100,
    "Water Breathing": 100,
    "Panic Resist": 50,
    "Recycle Throwable": 25,
    "Hp %": 20,
    "AOE": 2
  };

  const minrarity = equipment.minrarity;
  const maxrarity = equipment.maxrarity;

  equipment.stats.forEach(item => {
    const stat = item.stat;

    const override = equipmentOverrides[stat] || {};

    const minx = override.minx !== undefined && override.minx !== "" ? Number(override.minx) : item.minx;
    const maxx = override.maxx !== undefined && override.maxx !== "" ? Number(override.maxx) : item.maxx;
    const mins = override.mins !== undefined && override.mins !== "" ? Number(override.mins) : item.mins;
    const maxs = override.maxs !== undefined && override.maxs !== "" ? Number(override.maxs) : item.maxs;

    let minCalc = (minx + ((maxx - minx) / 2 * rarity)) * (level ** 2) +
                  mins + ((maxs - mins) / 2 * rarity);

    let maxCalc = (maxx + ((maxx - minx) / 2 * rarity)) * (level ** 2) +
                  maxs + ((maxs - mins) / 2 * rarity);

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
      <td>
        <div class="override-input-wrap">
          <input type="number" class="override-input" data-stat="${stat}" data-field="minx" placeholder="${item.minx}" value="${override.minx ?? ''}">
          <button type="button" class="clear-override" data-stat="${stat}" data-field="minx">×</button>
        </div>
      </td>

      <td>
        <div class="override-input-wrap">
          <input type="number" class="override-input" data-stat="${stat}" data-field="maxx" placeholder="${item.maxx}" value="${override.maxx ?? ''}">
          <button type="button" class="clear-override" data-stat="${stat}" data-field="maxx">×</button>
        </div>
      </td>

      <td>
        <div class="override-input-wrap">
        <input type="number" class="override-input" data-stat="${stat}" data-field="mins" placeholder="${item.mins}" value="${override.mins ?? ''}">
          <button type="button" class="clear-override" data-stat="${stat}" data-field="mins">×</button>
        </div>
      </td>

      <td>
        <div class="override-input-wrap">
          <input type="number" class="override-input" data-stat="${stat}" data-field="maxs" placeholder="${item.maxs}" value="${override.maxs ?? ''}">
          <button type="button" class="clear-override" data-stat="${stat}" data-field="maxs">×</button>
        </div>
      </td>
    `;

    resultTableBody.appendChild(row);
  });

  const rarityRow = document.createElement("tr");
  rarityRow.innerHTML = `
    <td>Rarity:</td>
    <td colspan="3">${getRarityNameByValue(minrarity)} - ${getRarityNameByValue(maxrarity)}</td>
    <td class="empty-extension-cell"></td>
    <td class="empty-extension-cell"></td>
    <td class="empty-extension-cell"></td>
    <td class="empty-extension-cell"></td>
  `;
  resultTableBody.appendChild(rarityRow);

  attachOverrideListeners();
}

// Adds listeners to override inputs after the table is rebuilt
function attachOverrideListeners() {
  document.querySelectorAll('.override-input').forEach(input => {
    input.addEventListener('input', () => {
      const stat = input.dataset.stat;
      const field = input.dataset.field;

      if (!equipmentOverrides[stat]) {
        equipmentOverrides[stat] = {};
      }

      let value = Number(input.value);

      if (isNaN(value) || input.value === "") {
        equipmentOverrides[stat][field] = "";
      } else {
        equipmentOverrides[stat][field] = Math.max(0, value);
      }

      updateResultsHeader();
    });
  });
  document.querySelectorAll('.clear-override').forEach(button => {
    button.addEventListener('click', () => {
      const stat = button.dataset.stat;
      const field = button.dataset.field;

      if (equipmentOverrides[stat]) {
        delete equipmentOverrides[stat][field];

        if (Object.keys(equipmentOverrides[stat]).length === 0) {
          delete equipmentOverrides[stat];
        }
      }

      updateResultsHeader();
    });
  });
}

window.initEquipmentStats = initEquipmentStats;