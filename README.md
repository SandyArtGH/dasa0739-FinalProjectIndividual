# dasa0739-FinalProjectIndividual
Sandy Asawaprecha |unikey: dasa0739  

This is the individual part of the creative coding major project in which I included time-based interactivity to the original code

# Wheel of Fortune — Time-Based Circle Animation (p5.js)

## How to interact with the work:
* As this is a time-based adaptation, there is no need to interact with the work.
* Simply load the page and the animation will happen for a total duration of approximately 45 seconds. 
* The animation is automatic so there is no user interaction required as it works on a time interval. 
* Watch as each circle appear one by one.
* Each circle spin at a different random speed.
* Each circle disappear one by one based on its random speed, from fastest to slowest. The circle that spin the fastest will disappear first and the circle that spin the slowest will disappear last. This represents how lives lived intensely may be shorter, while measured lives may endure longer.
* The animation will not continue indefinitely. 
* Reload the page to start the new animation. The intro and outro would be the same. However, each circle will spin at a different random speed from the previous animation. 
* The animation adapts to the screen size automatically. 

## Details of my individual approach to animating the group code

In terms of my individual approach, I choose to drive my individual code with time. 
 In the group code, there are 8 different circles. These circles will be animated while the background remain still. This will be different from other group members’ work as they use audio, user input and perlin noise to animate the still image. For example, user input. 

## References to inspiration for animating your individual code
![Pacita Abad's wheel of fortune (2000)](Pacita_Abad.jpg)

Both Pacita Abad's Wheels of Fortune (2000) and the Wheel of Fortune tarot card have inspired my approach to this time-based animation. Abad's work is characterized by vibrant colors and explores themes of cultural connections, and her trapunto paintings fuse textile, paint, and political narrative while creating work that crosses borders and artistic disciplines. While her work often reflects how visual patterns and circular forms connect people across cultural and societal boundaries, the title "Wheel of Fortune" prompted me to explore how the wheel symbolizes human life journey.

To express this idea, I plan to create a time-based animation that begins with the appearance of circles, followed by their spinning motion to represent life’s progression. At first, I considered making the circles spin both clockwise and anti-clockwise to suggest human effort in changing one’s destiny. However, I later decided that all circles should spin clockwise, as human life universally begins at the same point—birth—and eventually ends at the same point—death. 


![Wheel of Fortune Tarot Card](Wheel_Tarot.png)

Furthermore, the Wheel of Fortune tarot card reinforces the decision to make all circles spin clockwise. The card depicts human life as a cycle of ups and downs—moments of success and obstacles that we must navigate. According to the reversed Wheel of Fortune's meaning, "a lack of recognition of life's fluidity may lead to arrogant mistakes and karmic retribution. Take a moment to humble yourself before the wheel and to experience life as it is." This teaches us that human cannot fully control or resist life's natural flow- we can only move forward with it. The clockwise rotation symbolizes this universal truth: all lives begin at the same point (birth) and move inevitably toward the same destination (death), regardless of the pace or path each individual takes.

As the circles appear and begin spinning, each moves at a different randomized speed. Some circles spin slowly while others rotate rapidly, reflecting the varied paces at which individuals experience life. The unique visual patterns within each circle represent diverse life experiences and journeys.

Through this animation, I explore the concept of "living in your own time." For instance, one person might achieve success early—entering university at 15—but tragically pass away from cancer at 30. Another might struggle to find direction until nearly 30, yet later discover their purpose and live a fulfilling life until 90. Both lives are equally valid, though they unfold at vastly different speeds.

At the animation's outro, circles begin to disappear one by one, starting with the fastest-spinning circles and ending with the slowest. This sequence embodies the metaphor that "those who burn brightest, burn fastest." Lives lived at an intense pace may be shorter, while those lived more slowly and deliberately may endure longer.This progression carries a deeper message: we should not compare our life's pace to others. Instead, we must focus on our own journey, keep moving forward, and trust that we will bloom in our own timeline.

In addition, the background is drawn with different color by quadrant depicting red, blue, green, and orange color. In relation to Pacita Abad (2000)'s work, this represents the fact that people in different geographical areas and have cultural differences but are universal in terms of each person having their own individuality, fortune and luck, and life experiences. Moreover, all humans have to experience birth and death.

## A short technical explanation of how my individual code works to animate the image and any appropriate references

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
