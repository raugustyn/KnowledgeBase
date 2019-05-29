class ExtentCoordinates {
  constructor (minX, minY, maxX, maxY) {
    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
  }

  toString() {
    return this.minX + ", " + this.minY + ", " + this.maxX + ", " + this.maxY;
  }
}

export default ExtentCoordinates;
