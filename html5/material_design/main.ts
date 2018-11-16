interface IDrawerConfig {
  enterDOM: HTMLElement;
  leaveDOM: HTMLElement;
  duration: number;
  ease: string;
}
class Drawer implements IDrawerConfig{
  enterDOM: HTMLElement
  leaveDOM: HTMLElement
  _duration: number = 2
  _ease: string = 'ease'
  enterTransition: string
  leaveTransition: string
  constructor (opt) {
    this.enterDOM = opt.enterDOM;
    this.leaveDOM = opt.leaveDOM;
    this.initDOMStyle();
    this.updateTransition();
  }
  get duration() {
    return this._duration
  }
  set duration(duration) {
    this._duration = duration;
  }
  get ease() {
    return this._ease;
  }
  set ease(ease) {
    this._ease = ease;
  }
  updateTransition() {
    this.enterTransition = `left: 0;transition: left ${this._duration}s ${this._ease}`
    this.leaveTransition = `margin-left: 200px; transition: margin-left ${this._duration}s ${this._ease}`
  }
  initDOMStyle() {
    if(this.enterDOM && this.leaveDOM) {
      this.enterDOM.setAttribute('style', `transiton: left ${this._duration}s ${this._ease};`)
      this.leaveDOM.setAttribute('style', `transition: margin-left ${this._duration} ${this._ease}`);
    }
  }
  enter() {
    if (this.enterDOM && this.leaveDOM) {
      this.enterDOM.setAttribute('style', this.enterTransition);
      this.leaveDOM.setAttribute('style', this.leaveTransition);
    }
  }

}