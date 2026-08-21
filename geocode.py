import json
import urllib.request
import urllib.parse
import time
import sys

def geocode(address):
    url = "https://nominatim.openstreetmap.org/search?" + urllib.parse.urlencode({
        'q': address,
        'format': 'json',
        'limit': 1
    })
    req = urllib.request.Request(url, headers={'User-Agent': 'opencode-agent'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if data:
                return data[0]['lat'], data[0]['lon']
    except Exception as e:
        print(f"Error geocoding {address}: {e}", file=sys.stderr)
    return None, None

def process_file(filename, out_filename):
    with open(filename, 'r') as f:
        content = f.read()
    
    lines = content.split('\n')
    
    # skip title
    idx = 0
    while idx < len(lines):
        if 'Toronto Coffee' in lines[idx]:
            break
        idx += 1
        
    if idx < len(lines):
        idx += 1
    
    # Handle possible blank line
    while idx < len(lines) and not lines[idx].strip():
        idx += 1

    entries = []
    current_entry = []
    
    while idx < len(lines):
        line = lines[idx]
        if not line.strip() and current_entry:
            entries.append(current_entry)
            current_entry = []
        elif line.strip():
            current_entry.append(line)
        idx += 1
        
    if current_entry:
        entries.append(current_entry)
        
    output_lines = ["Toronto Coffee", ""]
    
    for entry in entries:
        if len(entry) >= 2:
            title = entry[0]
            address = entry[1]
            
            print(f"Geocoding {title}...")
            
            # Clean address for Nominatim (sometimes suite numbers throw it off)
            clean_address = address
            if '#' in clean_address:
                parts = clean_address.split(',')
                new_parts = []
                for p in parts:
                    if '#' in p:
                        p = p.split('#')[0].strip()
                    new_parts.append(p)
                clean_address = ', '.join(new_parts)
                
            lat, lon = geocode(clean_address)
            if not lat or not lon:
                lat, lon = geocode(address)
            time.sleep(1) # rate limit
            
            output_lines.append(title)
            output_lines.append(address)
            if lat and lon:
                output_lines.append(f"{lat}, {lon}")
            else:
                output_lines.append("Coordinates not found")
                
            for desc_line in entry[2:]:
                output_lines.append(desc_line)
            output_lines.append("") # blank line between entries
        else:
            for line in entry:
                output_lines.append(line)
            output_lines.append("")
            
    with open(out_filename, 'w') as f:
        f.write('\n'.join(output_lines))
    print("Done")

if __name__ == '__main__':
    process_file('toronto_coffee.txt', 'toronto_coffee_geocoded.txt')
