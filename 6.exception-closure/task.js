﻿function parseCount(arg) {
  if (isNaN(arg)) {
    throw new Error("Невалидное значение");
  }
  return Number.parseFloat(arg);
}

function validateCount(arg) {
  try {
    return parseCount(arg);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(sideA, sideB, sideC) {
    if (
      sideA + sideB < sideC ||
      sideA + sideC < sideB ||
      sideB + sideC < sideA
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  get perimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  get area() {
    const p = this.perimeter / 2;
    return Number(
      Math.sqrt(
        p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)
      ).toFixed(3)
    );
  }
}

function getTriangle(sideA, sideB, sideC) {
  try {
    return new Triangle(sideA, sideB, sideC);
  } catch {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
