# dasa0739-FinalProjectIndividual
This is the individual part of the creative coding major project in which I included time-based interactivity to the original code

# 🎡 Wheel of Fortune — Time-Based Circle Animation (p5.js)

This project is a reinterpretation of the theme **“Wheel of Fortune”** using time-based animation.  
Instead of depicting luck or randomness literally, the artwork explores **life paths**—how people move through life at different paces, how plans change, and how events can shift direction unexpectedly.

The animation uses layered circles that:
- **Appear one-by-one over time** (like life stages unfolding)
- **Rotate at different speeds**
- **Start rotating at different times**
- All circles rotate **clockwise**, symbolising how everyone moves through time together but not identically.

The result is a meditative, clock-like movement expressing:
- lives that follow expectations  
- lives that diverge  
- slow periods  
- rapid bursts  
- attempts to “change direction”  

Every circle evolves at its own pace, just like people.

---

## ✨ **Conceptual Breakdown**

### **Why Wheel of Fortune?**
The Wheel of Fortune archetype is usually about luck and unpredictability.  
Here, it represents:
- Life going “according to plan” or the complete opposite  
- Social expectations vs. personal choices  
- Sudden turns (illness, opportunity, growth, setbacks)  
- Individual pacing: some people “spin” faster, some slower  

### **Interpretation in the animation**
- The circles **appear from the center outward**, like life stages emerging.
- Each circle begins rotating at a **unique time** based on a time variable (`millis()` offset).  
- The differing speeds reflect how some people:
  - move steadily  
  - accelerate  
  - plateau  
  - or feel like they’re racing through time  

---

## ⏱ **Time-Based Interaction**

The project specifically uses **timers and time functions** rather than button-clicks or user input.

### Time functions used:
- `millis()` — controls when circles appear  
- `millis()` — offsets rotation start time  
- Optional: `second()` or `minute()` could also influence speed  

### Behaviours implemented:
- ⏳ **Staggered reveal:**  
  Circles appear every *N* milliseconds, creating a build-up effect.
  
- 🌀 **Individual rotation:**  
  Each circle has:
  - its own rotation speed  
  - its own rotation start delay  
  - continual clockwise rotation  

- 🕰 **Continuous evolution:**  
  Animation never resets — just like time, it always moves forward.

---

# 🧠 **Technical Plan**

### **1. Data Structure**
```js
class CircleArt {
  constructor(radius, startDelay, rotationSpeed) {
    this.radius = radius;
    this.startDelay = startDelay;     // millis() value that determines when to begin spinning
    this.rotationSpeed = rotationSpeed;
    this.visible = false;
  }

  update() {
    if (millis() > this.startDelay) {
      this.visible = true;
    }
  }

  display() {
    if (!this.visible) return;
    push();
    rotate((millis() - this.startDelay) / this.rotationSpeed);
    ellipse(0, 0, this.radius * 2);
    pop();
  }
}
