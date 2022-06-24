<script>
  const mp3 = "/assets/Ready_to_Fight_-_David_Fesliyan.mp3";
  export let duration = 2;
  const durationReset = duration;
  let elapsed = 0;
  let interval;
  export let width = "auto";
  export let height = "auto";
  let state = "idle";
  let audioEl;
  function getTime() {
    const toGo = Math.ceil(duration - elapsed);
    const minutes = Math.floor(Math.abs(toGo) / 60);
    const seconds = String(Math.abs(toGo) % 60);
    let prefix = "";
    if (elapsed > duration) {
      prefix = "-";
    }
    return `${prefix}${minutes}:${seconds.padStart(2, "0")}`;
  }
  $: timeString = getTime(elapsed, duration);
  const timerExpired = () => {
    if (elapsed >= duration) {
      state = "end";
      audioEl.play();
    }
  };
  const deadlineApproaching = () => {
    if (duration - 10 <= elapsed) {
      state = "deadline_approaching";
    }
  };
  function reset() {
    duration = durationReset;
    state = "idle";
    audioEl.pause();
    audioEl.currentTime = 0;
    elapsed = 0;
    clearInterval(interval);
    interval = null;
  }
</script>

<div class="container" />
<div
  class="Timer"
  data-state={state}
  style={`--duration: ${duration}; --elapsed: ${elapsed}; --interval:${interval}; --maxwidth: ${width}; --maxheight: ${height};`}
>
  <div class="timerwrapper">
    <svg
      class="timer-circle"
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill="none"
    >
      <circle r="40" cx="50" cy="50" pathLength="1" />
      <circle class="progressCircle" r="40" cx="50" cy="50" pathLength="1" />
    </svg>
    <div class="display">
      <!-- <div class="state faded">{state}</div> -->
      <div class="addtime">
        <button on:click={() => (duration = duration + 60)}> +1 </button>
        <button on:click={() => (duration = duration + 600)}> +10 </button>
        <button on:click={() => (duration = duration - 60)}> -1 </button>
        <button on:click={() => (duration = duration - 600)}> -10 </button>
      </div>
      <button
        class="actions"
        disabled={state === "running" ||
          state === "deadline_approaching" ||
          state === "end"}
        on:click={reset}
      >
        Reset
      </button>
      <div class="timer">{timeString}</div>
      <div id="controls">
        {#if state === "running" || state === "end" || state === "deadline_approaching"}
          <button
            on:click={() => {
              state = "paused";
              audioEl.pause();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pause-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"
              />
            </svg>
          </button>
        {/if}
        {#if state === "idle" || state === "paused"}
          <button
            on:click={() => {
              state = "running";
              if (!interval) {
                interval = setInterval(() => {
                  if (
                    state === "running" ||
                    state === "deadline_approaching" ||
                    state === "end"
                  ) {
                    elapsed = elapsed + 1;
                    deadlineApproaching();
                    timerExpired();
                  }
                }, 1000);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-play-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
              />
            </svg>
          </button>
        {/if}
      </div>
    </div>
  </div>

  <audio bind:this={audioEl}>
    <source src={mp3} type="audio/mpeg" />
  </audio>
</div>

<style>
  :root {
    --color-background: #202124;
    --color-text: white;
    --color-primary: #5192e6;
    --color-primary-light: hsl(214.5, 65.8%, 78.2%);
    --color-secondary: #8b9096;
    --stroke-width: 1px;
    --progress: 0;
  }
  .Timer {
    display: flex;
    --progress: calc(1px - (var(--elapsed) / var(--duration)) * 1px);
    --offset: calc(1px - var(--progress) * 1px);
    flex-direction: column;
    max-width: var(--maxwidth);
    max-height: var(--maxheight);
  }
  .timerwrapper {
    display: grid;
    flex-grow: 2;
  }

  .timerwrapper > * {
    grid-column: 1;
    grid-row: 1;
  }
  svg {
    height: 100%;
    width: 100%;
  }
  svg.timer-circle {
    transform: rotate(-0.25turn);
    grid-row: 1;
    grid-column: 1;
    align-self: center;
    justify-self: center;
    width: 90%;
    height: auto;
  }
  svg.timer-circle circle {
    stroke: var(--color-primary-light);
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-width: var(--stroke-width);
    height: 100%;
    width: 100%;
  }
  svg.timer-circle circle.progressCircle {
    stroke: var(--color-primary);
    stroke-dashoffset: calc(var(--progress) + 1px);
    stroke-dasharray: 1px;
  }

  .display {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-row: 1;
    grid-column: 1;
    position: relative;
    z-index: 10;
  }

  /* #controls {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 15;
    margin-top: auto;
  }
 */
  #controls button {
    all: unset;
    display: block;
    height: 100px;
    width: 100px;
  }
  #controls button svg {
    fill: var(--color-primary);
  }
  #controls button:hover svg {
    cursor: pointer;
    fill: var(--color-primary-light);
  }

  @media (orientation: landscape) {
    /*  #controls {
      position: fixed;
      bottom: 0;
      left: calc(50% - 50px);
    } */
  }
  @media (max-width: 500px) {
    :root {
      --stroke-width: 2px;
    }
  }
  [data-state="deadline_approaching"] svg.timer-circle {
    animation: pulse infinite 1s steps(1);
  }

  [data-state="paused"] .timer {
    animation: pulse infinite 1s steps(1);
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  .faded {
    color: var(--color-secondary);
    font-size: 0.8rem;
  }
  .display > * {
    grid-column: 1;
    grid-row: 1;
    align-self: center;
    justify-self: center;
  }
  .display .addtime {
    display: flex;
    gap: 1rem;
  }
  .display button {
    all: unset;
    cursor: pointer;
    color: var(--color-secondary);
  }
  .display button:hover {
    transition: all 0.2s;
    opacity: 1;
  }
  .display button[disabled]:hover {
    color: var(--color-secondary);
    cursor: unset;
  }
  .timer {
    font-size: calc(2rem + 12vmin);
    color: var(--color-primary);
  }
</style>
