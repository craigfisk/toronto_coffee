import json
import urllib.request
import urllib.parse
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
                print(f"{address}: {data[0]['lat']}, {data[0]['lon']}")
            else:
                print(f"{address}: Not found")
    except Exception as e:
        print(f"Error geocoding {address}: {e}", file=sys.stderr)

geocode("55 University Ave, Toronto")
geocode("852 Pape Ave, Toronto")
