var Drawer = /** @class */ (function () {
    function Drawer(opt) {
        this._duration = 2;
        this._ease = 'ease';
        this.enterDOM = opt.enterDOM;
        this.leaveDOM = opt.leaveDOM;
        this.initDOMStyle();
        this.updateTransition();
    }
    Object.defineProperty(Drawer.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        set: function (duration) {
            this._duration = duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drawer.prototype, "ease", {
        get: function () {
            return this._ease;
        },
        set: function (ease) {
            this._ease = ease;
        },
        enumerable: true,
        configurable: true
    });
    Drawer.prototype.updateTransition = function () {
        this.enterTransition = "left: 0;transition: left " + this._duration + "s " + this._ease;
        this.leaveTransition = "margin-left: 200px; transition: margin-left " + this._duration + "s " + this._ease;
    };
    Drawer.prototype.initDOMStyle = function () {
        if (this.enterDOM && this.leaveDOM) {
            this.enterDOM.setAttribute('style', "transiton: left " + this._duration + "s " + this._ease + ";");
            this.leaveDOM.setAttribute('style', "transition: margin-left " + this._duration + " " + this._ease);
        }
    };
    Drawer.prototype.enter = function () {
        if (this.enterDOM && this.leaveDOM) {
            this.enterDOM.setAttribute('style', this.enterTransition);
            this.leaveDOM.setAttribute('style', this.leaveTransition);
        }
    };
    return Drawer;
}());
