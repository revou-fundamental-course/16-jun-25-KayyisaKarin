function calculateArea() {
      const base = parseFloat(document.getElementById("base").value);
      const height = parseFloat(document.getElementById("height").value);

      if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        document.getElementById("areaResult").innerText = "Please enter valid positive numbers for base and height.";
        return;
      }

      const area = 0.5 * base * height;
      document.getElementById("areaResult").innerText = "Area: " + area;
    }

    function calculatePerimeter() {
      const a = parseFloat(document.getElementById("sideA").value);
      const b = parseFloat(document.getElementById("sideB").value);
      const c = parseFloat(document.getElementById("sideC").value);

      if (
        isNaN(a) || isNaN(b) || isNaN(c) ||
        a <= 0 || b <= 0 || c <= 0 ||
        a + b <= c || a + c <= b || b + c <= a
      ) {
        document.getElementById("perimeterResult").innerText = "Please enter valid side lengths that can form a triangle.";
        return;
      }

      const perimeter = a + b + c;
      document.getElementById("perimeterResult").innerText = "Perimeter: " + perimeter;
    }