// Tampere coordinates
const LATITUDE = 61.4991;
const LONGITUDE = 23.7871;
const TIMEZONE = "Europe/Helsinki";
const BASE_API_URL = "https://api.open-meteo.com/v1/forecast";

let state = {
    currentView: 'view-1',
    timespans: {
        'view-2': '1w',
        'view-3': '1w'
    },
    v1Options: {
        measurement: 'temperature_2m',
        startDate: null,
        endDate: null
    },
    charts: {
        view1: null,
        view2: null,
        view3: null
    }
};

const TIMESPAN_DAYS_MAP = {
    '24h': 1,
    '48h': 2,
    '72h': 3,
    '1w': 7,
    '1m': 30
};

const MEASURE_LABELS = {
    'temperature_2m': { label: 'Temperature (°C)', color: 'rgba(239, 68, 68, 1)' },
    'rain': { label: 'Rain (mm)', color: 'rgba(56, 189, 248, 1)' },
    'wind_speed_10m': { label: 'Wind Speed (km/h)', color: 'rgba(167, 139, 250, 1)' }
};

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initDateBadge();
    initInteractions();

    // default dates for view 1 (last 7 days)
    const today = new Date();
    let lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 7);

    document.getElementById('v1-start-date').value = lastWeek.toISOString().split('T')[0];
    document.getElementById('v1-end-date').value = today.toISOString().split('T')[0];

    loadView1();
    loadView2();
    loadView3();
});

// updates the date/time badge in header
function updateDateBadge() {
    let now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    document.getElementById('current-date-badge').textContent = now.toLocaleString('en-US', options);
}

function initDateBadge() {
    updateDateBadge();
    setInterval(updateDateBadge, 60000);
}

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(n => n.classList.remove('active'));
            document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));

            item.classList.add('active');
            const target = item.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
            document.getElementById('current-view-title').textContent = item.querySelector('.nav-label').textContent;
            state.currentView = target;
        });
    });
}

function initInteractions() {
    // timespan dropdowns for view 2 and 3
    document.querySelectorAll('.timespan-select').forEach(select => {
        select.addEventListener('change', (e) => {
            let viewId = e.target.getAttribute('data-view');
            state.timespans[viewId] = e.target.value;

            if (viewId === 'view-2') loadView2();
            else if (viewId === 'view-3') loadView3();
        });
    });

    // view 1 update button
    document.getElementById('v1-update-btn').addEventListener('click', () => {
        state.v1Options.measurement = document.getElementById('v1-measure-select').value;
        state.v1Options.startDate = document.getElementById('v1-start-date').value;
        state.v1Options.endDate = document.getElementById('v1-end-date').value;
        loadView1();
    });
}

// builds the api url with the right params
function buildApiUrl(measurements, pastDays, forecastDays, startDate, endDate) {
    let measureStr = Array.isArray(measurements) ? measurements.join(',') : measurements;
    let url = `${BASE_API_URL}?latitude=${LATITUDE}&longitude=${LONGITUDE}&hourly=${measureStr}&timezone=${encodeURIComponent(TIMEZONE)}`;

    if (startDate && endDate) {
        url += `&start_date=${startDate}&end_date=${endDate}`;
    } else {
        url += `&past_days=${pastDays || 1}&forecast_days=${forecastDays || 0}`;
    }
    return url;
}

function formatTime(isoStr) {
    let d = new Date(isoStr);
    return d.toLocaleDateString('en-GB') + ' ' + d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

// renders a chart.js line chart on a given canvas
function renderChart(canvasId, chartKey, labels, dataPoints, label, color) {
    let ctx = document.getElementById(canvasId).getContext('2d');

    if (state.charts[chartKey]) {
        state.charts[chartKey].destroy();
    }

    let gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, 'rgba(0,0,0,0)');

    state.charts[chartKey] = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: dataPoints,
                borderColor: color,
                backgroundColor: gradient,
                borderWidth: 2,
                fill: true,
                pointRadius: 0,
                pointHoverRadius: 6,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    titleColor: '#f8fafc',
                    bodyColor: '#f8fafc',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    padding: 12
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#94a3b8', maxTicksLimit: 8 }
                },
                y: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#94a3b8' }
                }
            }
        }
    });
}

// shows the stat cards (mean, median, etc) for a given dataset
function renderStatsBlock(containerId, dataArray, unit) {
    let container = document.getElementById(containerId);
    if (!container) return;

    let mean = calculateMean(dataArray);
    let median = calculateMedian(dataArray);
    let mode = calculateMode(dataArray);
    let range = calculateRange(dataArray);
    let stdDev = calculateStandardDeviation(dataArray);
    let minMax = calculateMinMax(dataArray);

    container.innerHTML = `
        <div class="stat-card stat-mean">
            <span class="stat-label">Mean</span>
            <div><span class="stat-value">${mean}</span><span class="stat-unit">${unit}</span></div>
        </div>
        <div class="stat-card stat-median">
            <span class="stat-label">Median</span>
            <div><span class="stat-value">${median}</span><span class="stat-unit">${unit}</span></div>
        </div>
        <div class="stat-card stat-mode">
            <span class="stat-label">Mode</span>
            <div><span class="stat-value">${mode}</span><span class="stat-unit">${unit}</span></div>
        </div>
        <div class="stat-card stat-range">
            <span class="stat-label">Range</span>
            <div><span class="stat-value">${range}</span><span class="stat-unit">${unit}</span></div>
        </div>
        <div class="stat-card stat-std">
            <span class="stat-label">Std Dev</span>
            <div><span class="stat-value">${stdDev}</span><span class="stat-unit">${unit}</span></div>
        </div>
        <div class="stat-card stat-minmax">
            <span class="stat-label">Min / Max</span>
            <div><span class="stat-value">${minMax.min} / ${minMax.max}</span><span class="stat-unit">${unit}</span></div>
        </div>
    `;
}

// ---- view loaders ----

async function loadView1() {
    let tbody = document.querySelector('#view1-table tbody');
    let measure = state.v1Options.measurement;

    let sDate = state.v1Options.startDate || document.getElementById('v1-start-date').value;
    let eDate = state.v1Options.endDate || document.getElementById('v1-end-date').value;

    let url;
    if (sDate && eDate) {
        url = buildApiUrl(measure, null, null, sDate, eDate);
    } else {
        url = buildApiUrl(measure, 7, 0);
    }

    tbody.innerHTML = '<tr><td colspan="2" class="empty-state"><div class="loader"></div> Loading...</td></tr>';

    try {
        let resp = await fetch(url);
        let data = await resp.json();

        let times = data.hourly.time;
        let values = data.hourly[measure];

        // table - last 20 entries
        let last20Times = times.slice(-20);
        let last20Vals = values.slice(-20);

        let measureInfo = MEASURE_LABELS[measure];
        document.querySelector('#view1-table thead th:nth-child(2)').textContent = measureInfo.label;

        tbody.innerHTML = '';
        for (let i = 0; i < last20Times.length; i++) {
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>${formatTime(last20Times[i])}</td><td><strong>${last20Vals[i]}</strong></td>`;
            tbody.appendChild(tr);
        }

        // chart
        let chartLabels = times.map(t => {
            let d = new Date(t);
            return `${d.getDate()}/${d.getMonth() + 1} ${d.getHours()}:00`;
        });
        renderChart('view1Chart', 'view1', chartLabels, values, measureInfo.label, measureInfo.color);

    } catch (err) {
        console.error("View 1 error:", err);
        tbody.innerHTML = '<tr><td colspan="2" class="empty-state">Failed to load data.</td></tr>';
    }
}

async function loadView2() {
    let tbody = document.querySelector('#view2-table tbody');
    tbody.innerHTML = '<tr><td colspan="2" class="empty-state"><div class="loader"></div> Loading...</td></tr>';

    let timespan = state.timespans['view-2'];
    let pastDays = TIMESPAN_DAYS_MAP[timespan] || 7;

    try {
        let url = buildApiUrl('rain', pastDays, 0);
        let resp = await fetch(url);
        let data = await resp.json();

        let times = data.hourly.time;
        let rainData = data.hourly.rain;

        // table
        let last20t = times.slice(-20);
        let last20r = rainData.slice(-20);

        tbody.innerHTML = '';
        for (let i = 0; i < last20t.length; i++) {
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>${formatTime(last20t[i])}</td><td><strong>${last20r[i]} mm</strong></td>`;
            tbody.appendChild(tr);
        }

        // chart
        let chartLabels = times.map(t => {
            let d = new Date(t);
            if (pastDays > 3) return `${d.getDate()}/${d.getMonth() + 1}`;
            return `${d.getDate()}/${d.getMonth() + 1} ${d.getHours()}:00`;
        });
        renderChart('view2Chart', 'view2', chartLabels, rainData, 'Rain (mm)', 'rgba(56, 189, 248, 1)');

        // stats
        renderStatsBlock('v2-stats', rainData, 'mm');

    } catch (err) {
        console.error("View 2 error:", err);
        tbody.innerHTML = '<tr><td colspan="2" class="empty-state">Failed to load data.</td></tr>';
    }
}

async function loadView3() {
    let tbody = document.querySelector('#view3-table tbody');
    tbody.innerHTML = '<tr><td colspan="2" class="empty-state"><div class="loader"></div> Loading...</td></tr>';

    let timespan = state.timespans['view-3'];
    let pastDays = TIMESPAN_DAYS_MAP[timespan] || 7;

    try {
        let url = buildApiUrl('wind_speed_10m', pastDays, 0);
        let resp = await fetch(url);
        let data = await resp.json();

        let times = data.hourly.time;
        let windData = data.hourly.wind_speed_10m;

        // table
        let last20t = times.slice(-20);
        let last20w = windData.slice(-20);

        tbody.innerHTML = '';
        for (let i = 0; i < last20t.length; i++) {
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>${formatTime(last20t[i])}</td><td><strong>${last20w[i]} km/h</strong></td>`;
            tbody.appendChild(tr);
        }

        // chart
        let chartLabels = times.map(t => {
            let d = new Date(t);
            if (pastDays > 3) return `${d.getDate()}/${d.getMonth() + 1}`;
            return `${d.getDate()}/${d.getMonth() + 1} ${d.getHours()}:00`;
        });
        renderChart('view3Chart', 'view3', chartLabels, windData, 'Wind Speed (km/h)', 'rgba(167, 139, 250, 1)');

        // stats
        renderStatsBlock('v3-stats', windData, 'km/h');

    } catch (err) {
        console.error("View 3 error:", err);
        tbody.innerHTML = '<tr><td colspan="2" class="empty-state">Failed to load data.</td></tr>';
    }
}
