

export default class Wave {

    constructor(el, index) {

        var container = document.body;
        this.width = window.innerWidth;
        this.height = container.offsetHeight;
        this.wave = el;
        
        this.waveWidth = this.width;  // Wave SVG width (usually container width)
        this.waveHeight = window.innerHeight - 100;                   // Position from the top of container
        this.waveDelta = 10;                     // Wave amplitude
        this.speed = 0.4;                        // Wave animation this.speed
        this.wavePoints = 8;                     // How many point will be used to compute our wave
        
        var points = [];

        this.index = index;
        
        
        this.lastUpdate;
        this.totalTime = 0;
        
        this.update();
        
    }

    calculateWavePoints(factor) {
        var points = [];
        
        for (var i = 0; i <= this.wavePoints; i++) {
          var x = i/this.wavePoints * this.waveWidth;
          var sinSeed = (factor + (i + i % this.wavePoints)) * this.speed * 100;
          var sinHeight = Math.sin(sinSeed / 100) * this.waveDelta;
          var yPos = Math.sin(sinSeed / 100) * sinHeight  + this.waveHeight;
          points.push({x: x, y: yPos});
        }
      
        return points;
      }


    buildPath(points) {
        var SVGString = 'M ' + points[0].x + ' ' + points[0].y;
      
        var cp0 = {
          x: (points[1].x - points[0].x) / 2,
          y: (points[1].y - points[0].y) + points[0].y + (points[1].y - points[0].y)
        };
      
        SVGString += ' C ' + cp0.x + ' ' + cp0.y + ' ' + cp0.x + ' ' + cp0.y + ' ' + points[1].x + ' ' + points[1].y;
      
        var prevCp = cp0;
        var inverted = -1;
      
        for (var i = 1; i < points.length-1; i++) {
          var cpLength = Math.sqrt(prevCp.x * prevCp.x + prevCp.y * prevCp.y);
          var cp1 = {
            x: (points[i].x - prevCp.x) + points[i].x,
            y: (points[i].y - prevCp.y) + points[i].y
          };
      
          SVGString += ' C ' + cp1.x + ' ' + cp1.y + ' ' + cp1.x + ' ' + cp1.y + ' ' + points[i+1].x + ' ' + points[i+1].y;
          prevCp = cp1;
          inverted = -inverted;
        };
      
        SVGString += ' L ' + this.width + ' ' + this.height;
        SVGString += ' L 0 ' + this.height + ' Z';
        return SVGString;
      }


    update() {
        var now = window.Date.now();
      
        if (this.lastUpdate) {
          var elapsed = (now-this.lastUpdate) / 1000;
          this.lastUpdate = now;
      
          this.totalTime += elapsed;
          
          var factor = (this.index + this.totalTime)*Math.PI;
          this.wave.setAttribute('d', this.buildPath(this.calculateWavePoints(factor)));
        } else {
          this.lastUpdate = now;
        }
      };

}
