// Abstract base class
abstract class GeometricObject {
    private String color;
    private double weight;

    // Default constructor
    public GeometricObject() {
        this.color = "White";
        this.weight = 1.0;
    }

    // Parameterized constructor
    public GeometricObject(String color, double weight) {
        this.color = color;
        this.weight = weight;
    }

    // Getter for color
    public String getColor() {
        return color;
    }

    // Getter for weight
    public double getWeight() {
        return weight;
    }

    // Abstract methods
    abstract double findArea();
    abstract double findCircumference();
}

// Subclass for Triangle
class Triangle extends GeometricObject {
    private double side1;
    private double side2;
    private double side3;

    // Constructor for Triangle
    public Triangle(double side1, double side2, double side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    @Override
    double findArea() {
        // Using Heron's formula to calculate the area
        double s = (side1 + side2 + side3) / 2;
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }

    @Override
    double findCircumference() {
        // The circumference (perimeter) is the sum of all sides
        return side1 + side2 + side3;
    }
}

// Main class to test the implementation
public class Abstract_Demo1 {
    public static void main(String[] args) {
        //Triangle triangle = new Triangle(3, 4, 5);
        GeometricObject triangle = new Triangle(3, 4, 5);

        System.out.println("Color of the Triangle: " + triangle.getColor());
        System.out.println("Weight of the Triangle: " + triangle.getWeight());
        System.out.println("Area of the Triangle: " + triangle.findArea());
        System.out.println("Circumference of the Triangle: " + triangle.findCircumference());
    }
}