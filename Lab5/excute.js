class engine {
    static #count = 0; 
  
    constructor(source) {
      if (new.target === engine) {
        throw new Error("this class cannot be instantiated");
      }
      this.source = source;
      engine.#count++;
    }
  
    static getCount() {
      return engine.#count;
    }
  }

  class car extends engine {
    #top;
    #left;
    #element;
    #moveInterval = null;
  
    constructor(top, left, source) {
      super(source);
      this.#top = top;
      this.#left = left;
      this.#createCarElement();
    }
  
    #createCarElement() {
      this.#element = document.createElement('img');
      this.#element.src = this.source;
      this.#element.style.position = 'absolute';
      this.#element.style.top = `${this.#top}px`;
      this.#element.style.left = `${this.#left}px`;
      document.body.appendChild(this.#element);
    }
  
    
    set top(value) {
      this.#top = value;
      this.#element.style.top = `${this.#top}px`;
    }
  
    set Left(value) {
      this.#left = value;
      this.#element.style.left = `${this.#left}px`;
    }
  

    moveLeft() {
      this.Left = this.#left - 10;
    }
  
    moveRight() {
      this.Left = this.#left + 10;
    }
    StopMoving(){
        this.Left=(this.#left *0) + 10;
    }
    changeStyle(styles) {
      Object.assign(this.#element.style, styles);
    }
  
    moveCar(direction) {
      if (this.#moveInterval) clearInterval(this.#moveInterval);
      
      this.#moveInterval = setInterval(() => {
        if (direction === 'left') {
          this.moveLeft();
          if (this.#left <= 0) clearInterval(this.#moveInterval);
        } else if (direction === 'right') {
          this.moveRight();
          if (this.#left >= window.innerWidth - this.#element.width) {
            clearInterval(this.#moveInterval);
          }
          if (direction === 'stop') {
            this.StopMoving();
            if (this.#left == 0) clearInterval(this.#moveInterval + 80 
            );
          }
        }
      }, 50);
    }}
    