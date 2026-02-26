// statistics functions
// using window.* so they're accessible from script.js without module bundling

function calculateMean(data) {
    if (!data || data.length === 0) return 'N/A';
    let sum = data.reduce((acc, val) => acc + val, 0);
    return (sum / data.length).toFixed(2);
}

function calculateMedian(data) {
    if (!data || data.length === 0) return 'N/A';
    let sorted = [...data].sort((a, b) => a - b);
    let mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return ((sorted[mid - 1] + sorted[mid]) / 2).toFixed(2);
    }
    return sorted[mid].toFixed(2);
}

// rounding to 1 decimal because exact matches are rare with weather data
function calculateMode(data) {
    if (!data || data.length === 0) return 'N/A';

    let freq = {};
    let maxFreq = 0;
    let mode = null;

    data.forEach(val => {
        let rounded = Number(val).toFixed(1);
        freq[rounded] = (freq[rounded] || 0) + 1;

        if (freq[rounded] > maxFreq) {
            maxFreq = freq[rounded];
            mode = rounded;
        }
    });

    return mode;
}

function calculateRange(data) {
    if (!data || data.length === 0) return 'N/A';
    return (Math.max(...data) - Math.min(...data)).toFixed(2);
}

function calculateStandardDeviation(data) {
    if (!data || data.length === 0) return 'N/A';
    let mean = Number(calculateMean(data));
    let squareDiffs = data.map(val => Math.pow(val - mean, 2));
    let avgSqDiff = squareDiffs.reduce((a, b) => a + b, 0) / squareDiffs.length;
    return Math.sqrt(avgSqDiff).toFixed(2);
}

function calculateMinMax(data) {
    if (!data || data.length === 0) return { min: 'N/A', max: 'N/A' };
    return {
        min: Math.min(...data).toFixed(2),
        max: Math.max(...data).toFixed(2)
    };
}

// extra: variance (std dev squared basically)
function calculateVariance(data) {
    if (!data || data.length === 0) return 'N/A';
    let sd = Number(calculateStandardDeviation(data));
    return (sd * sd).toFixed(2);
}
