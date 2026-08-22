import fs from 'fs';

const data = fs.readFileSync('toronto_coffee_with_coordinates.txt', 'utf8');
const lines = data.split('\n');

const shops = [];
let currentShop = null;
let state = 0; // 0: name, 1: address, 2: coords, 3: notes

for (let line of lines) {
  line = line.trim();
  
  // Skip the title
  if (line === 'Toronto Coffee' || line === 'Books ----------------------------------' || line.startsWith('no software; bought 2 books -')) {
    continue;
  }

  if (line === '') {
    if (currentShop && currentShop.notes) {
        shops.push(currentShop);
        currentShop = null;
    }
    state = 0;
    continue;
  }

  if (state === 0) {
    if (!currentShop) {
      currentShop = { name: line, address: '', lat: 0, lng: 0, notes: '', wifi: false };
      state = 1;
    } else {
      // shouldn't happen if separated by blank lines
    }
  } else if (state === 1) {
    currentShop.address = line;
    state = 2;
  } else if (state === 2) {
    const coords = line.split(',').map(s => parseFloat(s.trim()));
    if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
      currentShop.lat = coords[0];
      currentShop.lng = coords[1];
      state = 3;
    } else {
      // it wasn't coords, maybe notes on the 3rd line?
      currentShop.notes += line + ' ';
      state = 3;
    }
  } else if (state === 3) {
    currentShop.notes += line + ' ';
  }
}

if (currentShop && currentShop.name && currentShop.lat) {
  shops.push(currentShop);
}

// Generate TS content
let tsContent = `export interface CoffeeShop {
  id: string;
  name: string;
  intersection: string;
  lat: number;
  lng: number;
  url?: string;
  wifi: boolean;
  notes: string;
}

export const coffeeShops: CoffeeShop[] = [
`;

for (const shop of shops) {
  const id = shop.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const wifi = shop.notes.toLowerCase().includes('wifi') && !shop.notes.toLowerCase().includes('no wifi') && !shop.notes.toLowerCase().includes('wifi broken');
  
  tsContent += `  {
    id: ${JSON.stringify(id)},
    name: ${JSON.stringify(shop.name)},
    intersection: ${JSON.stringify(shop.address)},
    lat: ${shop.lat},
    lng: ${shop.lng},
    wifi: ${wifi},
    notes: ${JSON.stringify(shop.notes.trim())}
  },
`;
}

tsContent += `];\n`;
fs.writeFileSync('src/coffeeshops.ts', tsContent);
console.log('Generated src/coffeeshops.ts with ' + shops.length + ' shops.');
