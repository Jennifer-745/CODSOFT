//Format time to HH:MM (24hr)
function formatTime(dateObj) {
    return dateObj.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false});
}

let alarms = [];
let alarmTimeouts = {};
let activeAlarmId = null;
const alarmList = document.getElementById('alarms-list');
const setAlarmBtn = document.getElementById('set-alarm-btn');
const alarmTimeInput = document.getElementById('alarm-time');
const alarmAudioSelect = document.getElementById('alarm-audio');
const alarmPopup = document.getElementById('alarm-popup');
const ringTimeElem = document.getElementById('ring-time');
const snoozeBtn = document.getElementById('snooze-btn');
const stopBtn = document.getElementById('stop-btn');
const animationWrapper = document.getElementById('animation-wrapper');
const ringAnim = animationWrapper.querySelector('.ringing-animation');

// Load alarms from localStorage
window.onload = function() {
    let stored = localStorage.getItem('alarms');
    if (stored) {
        alarms = JSON.parse(stored);
        alarms.forEach(alarm => scheduleAlarm(alarm));
    }
    renderAlarms();
};

// Set Alarm
setAlarmBtn.onclick = function() {
    const time = alarmTimeInput.value;
    const audio = alarmAudioSelect.value;
    if (!time) {
        alert("Please select a time.");
        return;
    }
    const id = Date.now();
    const alarm = { id, time, audio, snooze: false };
    alarms.push(alarm);
    localStorage.setItem('alarms', JSON.stringify(alarms));
    renderAlarms();
    scheduleAlarm(alarm);
    alarmTimeInput.value = "";
};

function renderAlarms() {
    alarmList.innerHTML = "";
    if (alarms.length === 0) {
        alarmList.innerHTML = "<li>No alarms set.</li>";
        return;
    }
    alarms.forEach(alarm => {
        const li = document.createElement('li');
        li.className = 'alarm-item';
        li.innerHTML = `
            <span>⏰ ${alarm.time} (${audioLabel(alarm.audio)})</span>
            <button class="delete-btn" onclick="deleteAlarm(${alarm.id})" title="Delete Alarm">&times;</button>
        `;
        alarmList.appendChild(li);
    });
}

window.deleteAlarm = function(id) {
    alarms = alarms.filter(a => a.id !== id);
    localStorage.setItem('alarms', JSON.stringify(alarms));
    if (alarmTimeouts[id]) {
        clearTimeout(alarmTimeouts[id]);
        delete alarmTimeouts[id];
    }
    renderAlarms();
};

function scheduleAlarm(alarm) {
    // Calculate ms until alarm
    const now = new Date();
    let [hour, minute] = alarm.time.split(":").map(Number);
    let alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0, 0);
    if (alarmTime < now) alarmTime.setDate(alarmTime.getDate() + 1);

    const ms = alarmTime.getTime() - now.getTime();
    if (alarmTimeouts[alarm.id]) clearTimeout(alarmTimeouts[alarm.id]);
    alarmTimeouts[alarm.id] = setTimeout(() => ringAlarm(alarm), ms);
}

function audioLabel(audio) {
    if (audio === "audio1") return "Classic Bell";
    if (audio === "audio2") return "Digital Beep";
    if (audio === "audio3") return "Melody";
    return "Alarm";
}

function ringAlarm(alarm) {
    activeAlarmId = alarm.id;
    ringTimeElem.textContent = `Time: ${alarm.time}`;
    showNotification("Alarm", `It's ${alarm.time}!`);
    alarmPopup.classList.remove('hidden');
    animationWrapper.classList.add('ringing-active');
    playAudio(alarm.audio);

    // Repeat audio every 7s until stopped/snoozed
    let repeatCount = 0;
    alarmTimeouts['audio'] = setInterval(() => {
        playAudio(alarm.audio);
        repeatCount++;
    }, 7000);
}

function playAudio(audioId) {
    const audios = ["audio1", "audio2", "audio3"];
    audios.forEach(a => {
        const el = document.getElementById(a);
        el.pause();
        el.currentTime = 0;
    });
    document.getElementById(audioId).play();
}

function stopAlarm() {
    alarmPopup.classList.add('hidden');
    animationWrapper.classList.remove('ringing-active');
    const audios = ["audio1", "audio2", "audio3"];
    audios.forEach(a => {
        const el = document.getElementById(a);
        el.pause();
        el.currentTime = 0;
    });
    clearInterval(alarmTimeouts['audio']);
    // Remove alarm from list
    if (activeAlarmId) {
        deleteAlarm(activeAlarmId);
    }
    activeAlarmId = null;
}

function snoozeAlarm() {
    alarmPopup.classList.add('hidden');
    animationWrapper.classList.remove('ringing-active');
    clearInterval(alarmTimeouts['audio']);
    const audios = ["audio1", "audio2", "audio3"];
    audios.forEach(a => {
        const el = document.getElementById(a);
        el.pause();
        el.currentTime = 0;
    });
    if (activeAlarmId) {
        // Snooze for 5 minutes
        let alarm = alarms.find(a => a.id === activeAlarmId);
        if (alarm) {
            let [hour, minute] = alarm.time.split(":").map(Number);
            let snoozeDate = new Date();
            snoozeDate.setHours(hour, minute, 0, 0);
            snoozeDate = new Date(snoozeDate.getTime() + 5 * 60000);
            let newTime = `${snoozeDate.getHours().toString().padStart(2, "0")}:${snoozeDate.getMinutes().toString().padStart(2, "0")}`;
            alarm.time = newTime;
            scheduleAlarm(alarm);
            localStorage.setItem('alarms', JSON.stringify(alarms));
            renderAlarms();
        }
    }
    activeAlarmId = null;
}

stopBtn.onclick = stopAlarm;
snoozeBtn.onclick = snoozeAlarm;

// Show browser notification
function showNotification(title, body) {
    if (window.Notification && Notification.permission === "granted") {
        new Notification(title, { body: body });
    } else if (window.Notification && Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                new Notification(title, { body: body });
            }
        });
    }
}