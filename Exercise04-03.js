const triangle = {
    Height: 25,
    base: 24,
    color: "Red",
    Area : function() {
        return this.Height*this.base*1/2;
    }
};

console.log(triangle.Area());