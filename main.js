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
