# dasa0739-FinalProjectIndividual
**Sandy Asawaprecha dasa0739**
This is the individual part of the creative coding major project in which I included time-based interactivity to the original code

# Wheel of Fortune — Time-Based Circle Animation (p5.js)

![An image of Pacita Abad’s Wheel of Fortune (2000)](/Users/sansans/Desktop/Final version for individual part/dasa0739-FinalProjectIndividual/Pacita Abad Wheels of fortune.jpg)

## Introduction
This project uses time-based animation to reinterpret Pacita Abad’s Wheel of Fortune (2000). While Abad’s work often reflects how the wheel weaves people together across cultural and societal boundaries, my interpretation focuses instead on how the wheel symbolizes the human life journey.

## Concept
To express this idea, I plan to create a time-based animation that begins with the appearance of circles, followed by their spinning motion to represent life’s progression. At first, I considered making the circles spin both clockwise and anti-clockwise to suggest human effort in changing one’s destiny. However, I later decided that all circles should spin clockwise, as human life universally begins at the same point—birth—and eventually ends at the same point—death. Furthermore, the interpretation from the meaning of ‘Wheel of Fortune’ tarot card also further reinforces the decision to make all circles spin clock-wise. As human life is depicted as having its up and down moments (success and obstacles). As the tarot meaning of the reverse wheel of fortune A lack of recognition of life’s fluidity may lead to arrogant mistakes and karmic retribution. Take a moment to humble yourself before the Wheel and to experience life as it is.A person cannot fully control or go against it but instead keep going with the flow. 

## Animation Details
Within this animation, some circles will move more slowly while others will move more quickly, reflecting the different paces of individual lives. The unique patterns within each circle will depict diverse life experiences. Through this, I aim to explore the concept of “living in your own time.” For example, one person might achieve success early, such as entering university at 15, but tragically die of cancer at 30. Another might struggle to find direction until nearly 30, yet later discover purpose and live until 90.

## Background Design
The background is drawn with different color by quadrant depicting red, blue, green, and orange color. This represents the fact that people in different geographical areas and have cultural differences (in relation to Pacita Abad) but are universal in terms of each person having their own individuality, fortune and luck, and life experiences. Moreover, all humans have to experience birth and death.

---

##  **Time-Based Interaction**

The project specifically uses **timers and time functions** rather than button-clicks or user input.

### Time functions used:
- `millis()` — controls when circles appear  
- `millis()` — offsets rotation start time  
- Optional: `second()` or `minute()` could also influence speed  

### Behaviours implemented:
-  **Staggered reveal:**  
  Circles appear every *N* milliseconds, creating a build-up effect.
  
-  **Individual rotation:**  
  Each circle has:
  - its own rotation speed  
  - its own rotation start delay  
  - continual clockwise rotation  

-  **Continuous evolution:**  
  Animation never resets — just like time, it always moves forward.

---

#  **Technical Plan**

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
