      document.addEventListener("DOMContentLoaded", () => {
        // Sidebar Menu Control
        const hamburgerBtn = document.getElementById("hamburger-btn");
        const closeSidebarBtn = document.getElementById("close-sidebar");
        const sidebarMenu = document.getElementById("sidebar-menu");
        const sidebarOverlay = document.getElementById("sidebar-overlay");
        const sidebarLinks = document.querySelectorAll(".sidebar-link");

        function openSidebar() {
          sidebarOverlay.classList.remove("pointer-events-none");
          sidebarOverlay.classList.add("opacity-100");
          sidebarMenu.classList.remove("translate-x-full");
        }

        function closeSidebar() {
          sidebarOverlay.classList.remove("opacity-100");
          sidebarOverlay.classList.add("pointer-events-none");
          sidebarMenu.classList.add("translate-x-full");
        }

        hamburgerBtn.addEventListener("click", openSidebar);
        closeSidebarBtn.addEventListener("click", closeSidebar);
        sidebarOverlay.addEventListener("click", closeSidebar);
        sidebarLinks.forEach((link) =>
          link.addEventListener("click", closeSidebar),
        );

        // Hero Viewport Freeze Button
        const heroBtn = document.getElementById("hero-action-btn");
        const freezeOverlay = document.getElementById("freeze-overlay");
        const freezeTitle = document.getElementById("freeze-title");
        const freezeDesc = document.getElementById("freeze-desc");

        heroBtn.addEventListener("click", () => {
          const isBrilliant = Math.random() > 0.4;
          if (isBrilliant) {
            freezeTitle.innerText = "🌟 Brilliant (!!)";
            freezeTitle.className =
              "text-4xl font-black font-mono text-neonCyan mb-2";
            freezeDesc.innerText =
              "Reflex latency breakdown verified at 112ms. Superior computational efficiency achieved across WebAssembly registers.";
          } else {
            freezeTitle.innerText = "🚨 Blunder (??)";
            freezeTitle.className =
              "text-4xl font-black font-mono text-crimsonRed mb-2";
            freezeDesc.innerText =
              "Decomposition threshold exceeded 850ms limit. Cognitive delay drop detected during calculation sequence.";
          }
          freezeOverlay.classList.remove("hidden");
          freezeOverlay.classList.add("flex");
          setTimeout(() => {
            freezeOverlay.classList.add("hidden");
            freezeOverlay.classList.remove("flex");
          }, 1200);
        });

        // Countdown Timer
        const targetDate = new Date("October 31, 2026 23:59:59").getTime();
        function updateClock() {
          const now = new Date().getTime();
          const diff = targetDate - now;
          if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
              (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById("clock-days").innerText = String(
              days,
            ).padStart(2, "0");
            document.getElementById("clock-hours").innerText = String(
              hours,
            ).padStart(2, "0");
            document.getElementById("clock-mins").innerText = String(
              mins,
            ).padStart(2, "0");
            document.getElementById("clock-secs").innerText = String(
              secs,
            ).padStart(2, "0");
          }
        }
        setInterval(updateClock, 1000);
        updateClock();

        // Cryptographic Signature Animation
        const cryptoToken = document.getElementById("crypto-token");
        setInterval(() => {
          const randomHex = Math.random()
            .toString(16)
            .substring(2, 8)
            .toUpperCase();
          cryptoToken.innerText = `SIG_OK: 0x${randomHex}`;
        }, 2500);

        // Psycho-Acoustic Wave Canvas
        const sieveCanvas = document.getElementById("sieve-canvas");
        const sieveCtx = sieveCanvas.getContext("2d");
        let phase = 0;

        function resizeSieve() {
          sieveCanvas.width = sieveCanvas.clientWidth;
          sieveCanvas.height = sieveCanvas.clientHeight;
        }
        window.addEventListener("resize", resizeSieve);
        resizeSieve();

        function renderSieve() {
          sieveCtx.clearRect(0, 0, sieveCanvas.width, sieveCanvas.height);
          sieveCtx.beginPath();
          sieveCtx.lineWidth = 2;
          sieveCtx.strokeStyle = "#00f3ff";

          const w = sieveCanvas.width;
          const h = sieveCanvas.height;
          const cy = h / 2;

          for (let x = 0; x < w; x++) {
            const y =
              cy +
              Math.sin(x * 0.03 + phase) * 25 +
              Math.cos(x * 0.01 + phase * 1.5) * 15;
            if (x === 0) sieveCtx.moveTo(x, y);
            else sieveCtx.lineTo(x, y);
          }
          sieveCtx.stroke();
          phase += 0.05;
          requestAnimationFrame(renderSieve);
        }
        renderSieve();

        // Web Audio Oscillator
        let audioCtx = null;
        let osc = null;
        let isAudioPlaying = false;
        const freqSlider = document.getElementById("freq-slider");
        const freqDisplay = document.getElementById("freq-display");
        const toggleAudioBtn = document.getElementById("toggle-audio-btn");

        freqSlider.addEventListener("input", (e) => {
          const val = e.target.value;
          freqDisplay.innerText = `${val} Hz`;
          if (osc && audioCtx) {
            osc.frequency.setValueAtTime(val, audioCtx.currentTime);
          }
        });

        toggleAudioBtn.addEventListener("click", () => {
          if (!isAudioPlaying) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(
              freqSlider.value,
              audioCtx.currentTime,
            );
            gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            isAudioPlaying = true;
            toggleAudioBtn.innerHTML =
              '<i class="fa-solid fa-volume-xmark mr-2"></i>STOP SYNTH AUDIO';
            toggleAudioBtn.classList.add("bg-neonCyan/20");
          } else {
            if (osc) osc.stop();
            isAudioPlaying = false;
            toggleAudioBtn.innerHTML =
              '<i class="fa-solid fa-volume-high mr-2"></i>TOGGLE SYNTH AUDIO';
            toggleAudioBtn.classList.remove("bg-neonCyan/20");
          }
        });

        // Honeypot Inspection
        const honeyInput = document.getElementById("honey-input");
        const honeyBtn = document.getElementById("honey-check-btn");
        const honeyResult = document.getElementById("honey-result");

        honeyBtn.addEventListener("click", () => {
          const val = parseInt(honeyInput.value, 10);
          if (isNaN(val)) {
            honeyResult.className =
              "mt-4 p-4 rounded-xl font-mono text-xs border border-laserAmber text-laserAmber bg-laserAmber/10";
            honeyResult.innerText = "PLEASE INPUT A VALID TARGET INTEGER";
            honeyResult.classList.remove("hidden");
            return;
          }

          const isTrailingZero = val > 0 && val % 100 === 0;
          const isPowerOfTwo = val > 0 && (val & (val - 1)) === 0;

          if (isTrailingZero || isPowerOfTwo) {
            honeyResult.className =
              "mt-4 p-4 rounded-xl font-mono text-xs border border-crimsonRed text-crimsonRed bg-crimsonRed/10 shadow-[0_0_15px_rgba(255,33,80,0.3)]";
            honeyResult.innerText =
              "🚨 REJECTED // HONEYPOT RULE TRIGGERED (ARTIFICIAL PATTERN DETECTED)";
          } else {
            honeyResult.className =
              "mt-4 p-4 rounded-xl font-mono text-xs border border-emerald-500 text-emerald-400 bg-emerald-500/10";
            honeyResult.innerText =
              "✅ PASSED // ORGANIC NUMBER STRUCTURE VERIFIED";
          }
          honeyResult.classList.remove("hidden");
        });

        // Combo Multi-meter
        const comboInput = document.getElementById("combo-input");
        const comboBar = document.getElementById("combo-bar");
        const keyIntervalDisp = document.getElementById("key-interval");
        const comboMultDisp = document.getElementById("combo-multiplier");

        let lastKeyTime = 0;
        let comboMultiplier = 1.0;

        comboInput.addEventListener("keydown", () => {
          const now = performance.now();
          if (lastKeyTime !== 0) {
            const deltaSec = (now - lastKeyTime) / 1000;
            keyIntervalDisp.innerText = `${deltaSec.toFixed(2)}s`;

            if (deltaSec < 1.0) {
              comboMultiplier = Math.min(5.0, comboMultiplier + 0.2);
              comboBar.style.width = `${(comboMultiplier / 5.0) * 100}%`;
            } else {
              comboMultiplier = 1.0;
              comboBar.style.width = "20%";
            }
            comboMultDisp.innerText = `x${comboMultiplier.toFixed(1)}`;
          }
          lastKeyTime = now;
        });

        // Latency Chart Visualizer
        const latencyCanvas = document.getElementById("latency-canvas");
        const latencyCtx = latencyCanvas.getContext("2d");

        function drawLatencyGraph() {
          latencyCanvas.width = latencyCanvas.clientWidth;
          latencyCanvas.height = latencyCanvas.clientHeight;

          const primes = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
          ];
          const latencies = [
            12, 14, 15, 18, 22, 25, 30, 28, 35, 40, 42, 45, 110, 50, 52,
          ];

          const w = latencyCanvas.width;
          const h = latencyCanvas.height;
          const step = w / primes.length;

          latencyCtx.clearRect(0, 0, w, h);

          latencyCtx.beginPath();
          latencyCtx.strokeStyle = "#00f3ff";
          latencyCtx.lineWidth = 2;

          primes.forEach((p, i) => {
            const x = i * step + step / 2;
            const y = h - (latencies[i] / 120) * (h - 40) - 20;
            if (i === 0) latencyCtx.moveTo(x, y);
            else latencyCtx.lineTo(x, y);
          });
          latencyCtx.stroke();

          primes.forEach((p, i) => {
            const x = i * step + step / 2;
            const y = h - (latencies[i] / 120) * (h - 40) - 20;

            latencyCtx.beginPath();
            if (p === 41) {
              latencyCtx.arc(x, y, 6, 0, Math.PI * 2);
              latencyCtx.fillStyle = "#ffaa00";
              latencyCtx.fill();
              latencyCtx.strokeStyle = "#ffffff";
              latencyCtx.stroke();

              latencyCtx.fillStyle = "#ffaa00";
              latencyCtx.font = "10px JetBrains Mono";
              latencyCtx.fillText("P=41 (Spike)", x - 25, y - 12);
            } else {
              latencyCtx.arc(x, y, 3, 0, Math.PI * 2);
              latencyCtx.fillStyle = "#00f3ff";
              latencyCtx.fill();
            }
          });
        }
        window.addEventListener("resize", drawLatencyGraph);
        drawLatencyGraph();

        // Thermal Mode Toggle
        const modeStreakBtn = document.getElementById("mode-streak-btn");
        const modeForfeitBtn = document.getElementById("mode-forfeit-btn");

        modeStreakBtn.addEventListener("click", () => {
          document.body.classList.remove("theme-forfeit");
          modeStreakBtn.classList.add("bg-neonCyan", "text-obsidian");
          modeStreakBtn.classList.remove("bg-neonCyan/20", "text-neonCyan");
          modeForfeitBtn.classList.remove("bg-crimsonRed", "text-white");
          modeForfeitBtn.classList.add("bg-crimsonRed/20", "text-crimsonRed");
        });

        modeForfeitBtn.addEventListener("click", () => {
          document.body.classList.add("theme-forfeit");
          modeForfeitBtn.classList.add("bg-crimsonRed", "text-white");
          modeForfeitBtn.classList.remove(
            "bg-crimsonRed/20",
            "text-crimsonRed",
          );
          modeStreakBtn.classList.remove("bg-neonCyan", "text-obsidian");
          modeStreakBtn.classList.add("bg-neonCyan/20", "text-neonCyan");
        });

        // Biometric Reflex Button
        const reflexBtn = document.getElementById("reflex-verify-btn");
        const reflexStatus = document.getElementById("reflex-status");

        reflexBtn.addEventListener("click", () => {
          reflexBtn.innerText = "ANALYZING BIOMETRIC INPUT CURVE...";
          reflexStatus.innerText = "MEASURING TOUCH DELTA JITTER...";
          setTimeout(() => {
            reflexBtn.innerText = "✓ ORGANIC REFLEX VERIFIED";
            reflexBtn.className =
              "w-full py-4 rounded-xl bg-emerald-500 text-obsidian font-mono font-black text-sm tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.5)]";
            reflexStatus.innerText =
              "STATUS: PASS (ORGANIC OPERATOR CONFIRMED)";
          }, 800);
        });

        // ELO Calculator
        const eloInput = document.getElementById("elo-delta-input");
        const eloSelect = document.getElementById("elo-restriction-select");
        const eloOutput = document.getElementById("elo-final-output");

        function computeElo() {
          const delta = parseFloat(eloInput.value) || 0;
          const isRestricted = eloSelect.value === "active";

          if (isRestricted && delta > 0) {
            eloOutput.innerText = "0 ELO (COLLAPSED)";
            eloOutput.className =
              "text-2xl font-bold text-crimsonRed font-mono";
          } else {
            eloOutput.innerText = `+${delta} ELO`;
            eloOutput.className = "text-2xl font-bold text-neonCyan font-mono";
          }
        }
        eloInput.addEventListener("input", computeElo);
        eloSelect.addEventListener("change", computeElo);

        // Toast Spawner
        const spawnToastBtn = document.getElementById("spawn-toast-btn");
        const toastContainer = document.getElementById("toast-container");

        const sampleToasts = [
          {
            title: "SECURITY LOG",
            msg: "ECDSA Key re-anchored on Node 07",
            color: "border-neonCyan text-neonCyan",
          },
          {
            title: "LATENCY ALERT",
            msg: "Sub-second reflex jitter detected",
            color: "border-laserAmber text-laserAmber",
          },
          {
            title: "CIRCUIT ALERT",
            msg: "Friday Clash Circuit suspended for V4.0",
            color: "border-crimsonRed text-crimsonRed",
          },
        ];

        spawnToastBtn.addEventListener("click", () => {
          const item =
            sampleToasts[Math.floor(Math.random() * sampleToasts.length)];
          const toast = document.createElement("div");
          toast.className = `glass-panel p-4 border-l-4 ${item.color} shadow-2xl max-w-xs font-mono text-xs transition-all duration-300 transform translate-x-10 opacity-0`;
          toast.innerHTML = `<div class="font-bold mb-1">${item.title}</div><div class="text-slate-300">${item.msg}</div>`;

          toastContainer.appendChild(toast);
          setTimeout(
            () => toast.classList.remove("translate-x-10", "opacity-0"),
            10,
          );
          setTimeout(() => {
            toast.classList.add("opacity-0", "translate-x-10");
            setTimeout(() => toast.remove(), 300);
          }, 3000);
        });

        // FAQ Reader Tracker
        const faqItems = document.querySelectorAll(".faq-item");
        const faqCountDisp = document.getElementById("faq-read-count");
        let readCount = 0;

        faqItems.forEach((item) => {
          item.addEventListener("click", () => {
            if (!item.dataset.read) {
              item.dataset.read = "true";
              item.style.opacity = "0.65";
              readCount += 100;
              faqCountDisp.innerText = Math.min(200, readCount);
            }
          });
        });

        // Regex Search Filter
        const logSearchInput = document.getElementById("log-search-input");
        const logEntries = document.querySelectorAll(".log-entry");

        logSearchInput.addEventListener("input", (e) => {
          const query = e.target.value.toLowerCase();
          logEntries.forEach((entry) => {
            const text = entry.innerText.toLowerCase();
            entry.style.display = text.includes(query) ? "block" : "none";
          });
        });

        // Miller-Rabin Code Highlights
        const stepBtn = document.getElementById("step-mr-btn");
        let currentStep = 0;

        stepBtn.addEventListener("click", () => {
          currentStep = (currentStep % 5) + 1;
          for (let i = 1; i <= 5; i++) {
            const line = document.getElementById(`mr-line-${i}`);
            line.className =
              i === currentStep
                ? "block p-1 bg-neonCyan/20 text-neonCyan font-bold rounded-md"
                : "block p-1 text-slate-300";
          }
        });

        // Pollard's Rho Canvas
        const rhoCanvas = document.getElementById("rho-canvas");
        const rhoCtx = rhoCanvas.getContext("2d");
        const redrawRhoBtn = document.getElementById("redraw-rho-btn");

        function drawRhoCycle() {
          rhoCanvas.width = rhoCanvas.clientWidth;
          rhoCanvas.height = rhoCanvas.clientHeight;
          const w = rhoCanvas.width;
          const h = rhoCanvas.height;
          const cx = w / 2;
          const cy = h / 2;
          const radius = Math.min(w, h) * 0.35;

          rhoCtx.clearRect(0, 0, w, h);

          rhoCtx.beginPath();
          rhoCtx.arc(cx, cy, radius, 0, Math.PI * 2);
          rhoCtx.strokeStyle = "rgba(255, 170, 0, 0.3)";
          rhoCtx.lineWidth = 2;
          rhoCtx.stroke();

          const nodeCount = 8;
          for (let i = 0; i < nodeCount; i++) {
            const angle = (i / nodeCount) * Math.PI * 2;
            const nx = cx + Math.cos(angle) * radius;
            const ny = cy + Math.sin(angle) * radius;

            rhoCtx.beginPath();
            rhoCtx.arc(nx, ny, 4, 0, Math.PI * 2);
            rhoCtx.fillStyle = "#ffaa00";
            rhoCtx.fill();
          }

          rhoCtx.beginPath();
          rhoCtx.moveTo(cx - radius - 40, cy);
          rhoCtx.lineTo(cx - radius, cy);
          rhoCtx.strokeStyle = "#00f3ff";
          rhoCtx.lineWidth = 2;
          rhoCtx.stroke();
        }
        redrawRhoBtn.addEventListener("click", drawRhoCycle);
        window.addEventListener("resize", drawRhoCycle);
        drawRhoCycle();

        // SHA-256 HMAC Hasher
        const hmacInput = document.getElementById("hmac-input");
        const hmacOutput = document.getElementById("hmac-output");

        async function computeHash() {
          const text = hmacInput.value;
          const encoder = new TextEncoder();
          const data = encoder.encode(text);
          const hashBuffer = await crypto.subtle.digest("SHA-256", data);
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          const hashHex = hashArray
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");
          hmacOutput.innerText = `0x${hashHex}`;
        }
        hmacInput.addEventListener("input", computeHash);
        computeHash();

        // Matrix Awakening Flash
        const awakeningBtn = document.getElementById("awakening-btn");
        const matrixFlash = document.getElementById("matrix-flash");

        awakeningBtn.addEventListener("click", () => {
          matrixFlash.style.opacity = "0.9";
          setTimeout(() => (matrixFlash.style.opacity = "0"), 400);
        });
      });
