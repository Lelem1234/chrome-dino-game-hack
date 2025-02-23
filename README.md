# Chrome Dino Bot

A JavaScript bot that plays the Chrome Dino game automatically by detecting obstacles and making the Dino jump at the right time.

## How It Works
This script:
- Accesses the game instance (`Runner.instance_`).
- Detects obstacles (`runner.horizon.obstacles`).
- Calculates the distance to the obstacle and the Dino's speed.
- Simulates a spacebar press (`keyCode: 32`) to make the Dino jump.
- Runs in a loop using `requestAnimationFrame()` for real-time updates.

## Installation & Usage
1. Open Google Chrome and go to the **Dino game** by typing `chrome://dino/` in the address bar.
2. Open **Developer Console**:
   - Press `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I` (Mac).
   - Go to the `Console` tab.
3. Copy and paste the following script into the console:
   
   ```javascript
   (function() {
       const dispatchJump = () => {
           let event = new KeyboardEvent('keydown', { keyCode: 32 });
           document.dispatchEvent(event);
       };

       function autoPlay() {
           let runner = Runner.instance_;
           if (!runner) return;

           let obstacles = runner.horizon.obstacles;
           if (obstacles.length > 0) {
               let obstacle = obstacles[0];
               let distance = obstacle.xPos;
               let speed = runner.currentSpeed;
               
               if (distance < (speed * 10) + 50) {
                   dispatchJump();
               }
           }
           requestAnimationFrame(autoPlay);
       }

       autoPlay();
   })();
   ```
4. Press `Enter` to execute the script.
5. Watch as the bot plays the game for you!

## Notes
- The bot works by detecting obstacles and calculating when to jump.
- It continuously runs and updates in real-time using `requestAnimationFrame()`.
- If you want to **stop the bot**, simply refresh the page.

## License
This project is open-source and free to use.

