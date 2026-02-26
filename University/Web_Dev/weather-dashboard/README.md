# MeteoDash - Weather Dashboard

A weather dashboard that shows historical weather data for Tampere using the Open-Meteo API.

## What it does

- **3 views** you can switch between using the sidebar: temperature, rain, and wind speed
- Each view shows the last 20 hourly readings in a table
- Views 2 and 3 have charts (Chart.js) and statistics cards (mean, median, mode, range, std dev, min/max, and variance)
- You can change the timespan on views 2 and 3 (24h, 48h, 72h, 1 week, 1 month)
- View 1 lets you pick a measurement type and custom date range

## Tech

- HTML/CSS/JS (no frameworks)
- Chart.js for the graphs
- Open-Meteo API for weather data
- Inter font from Google Fonts

## How to run

Open it with any local server, for example:

```
python3 -m http.server 3000
```

Or just use the Live Server extension in VS Code.
