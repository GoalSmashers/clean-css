module.exports = function RGBToHex(data) {
  return {
    process: function() {
      return data.replace(/rgb\((\d+),(\d+),(\d+)\)/g, function(match, red, green, blue) {
        // Credit: Asen  http://jsbin.com/UPUmaGOc/2/edit?js,console
        return '#' + ('00000' + (red << 16 | green << 8 | blue).toString(16)).slice(-6);
      });
    }
  };
};
