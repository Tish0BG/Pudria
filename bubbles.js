document.addEventListener('DOMContentLoaded', () => {
    // Create styles
    const style = document.createElement('style');
    style.textContent = `
    .bubble-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
    }
    
    .bubble {
      position: absolute;
      bottom: -100px;
      background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
      animation: rise linear infinite;
    }
    
    @keyframes rise {
      0% {
        transform: translateY(0) translateX(0);
        opacity: 0;
      }
      10% {
        opacity: 0.5;
      }
      90% {
        opacity: 0.5;
      }
      100% {
        transform: translateY(-120vh) translateX(20px);
        opacity: 0;
      }
    }
  `;
    document.head.appendChild(style);

    // Create container
    const container = document.createElement('div');
    container.className = 'bubble-container';
    document.body.prepend(container);

    // Create bubbles
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';

        const size = Math.random() * 60 + 20; // 20px - 80px
        const left = Math.random() * 100; // 0% - 100%
        const duration = Math.random() * 10 + 10; // 10s - 20s
        const delay = Math.random() * 10;

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}%`;
        bubble.style.animationDuration = `${duration}s`;
        bubble.style.animationDelay = `-${delay}s`; // Negative delay to start immediately

        container.appendChild(bubble);

        // Reset bubble when animation ends (though infinite helps, resetting DOM helps if we wanted clean loops, 
        // but linear infinite is simpler. The issue with infinite linear is they all sync up if not randomized well.
        // CSS animation handles the loop, so we just need enough bubbles.)

        // To make it continuous and random, we can just spawn them. 
        // But CSS 'infinite' is efficient. Let's just spawn a fixed number.
    }

    for (let i = 0; i < 20; i++) {
        createBubble();
    }
});
