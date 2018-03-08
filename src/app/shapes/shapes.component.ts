import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
const PIE: any = 3.142;
const RECTANGLE = 'rectangle';
const CIRCLE = 'circle';
const SQUARE = 'square';
const ECLIPSE = 'eclipse';

@Component({
  selector: 'shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css']
})
export class ShapesComponent implements OnInit {
  constructor() { }
  selectedShape: string;
  showShapes = true;
  showDimensions = false;
  showArea = false;
  dimensions = "";
  area = 0;
  shapes = [
    {id: 'rectangle', name: 'Rectangle'},
    {id: 'circle', name: 'Circle'},
    {id: 'square', name: 'Square'},
    {id: 'eclipse', name: 'Eclipse'},
  ];
  ngOnInit() {
  }

  submitShape(shapeForm) {
    this.selectedShape = shapeForm.value.shape;
    this.showShapes = this.showArea = false;
    this.showDimensions = true;
  }

  submitDimensions(dimForm) {
    if (this.selectedShape === CIRCLE) {
      this.dimensions = 'diameter of ' + dimForm.value.diameter;
      this.area = PIE * (dimForm.value.diameter / 2) * (dimForm.value.diameter / 2);
    } else if (this.selectedShape === RECTANGLE) {
      this.dimensions = 'width and length of ' + dimForm.value.rectWidth + ' and ' + dimForm.value.rectLength;
      this.area = (dimForm.value.rectWidth) * (dimForm.value.rectLength);
    } else if (this.selectedShape === SQUARE) {
      this.dimensions = 'width of ' + dimForm.value.sqrLength;
      this.area = (dimForm.value.sqrLength) * (dimForm.value.sqrLength);
    } else {
      this.dimensions = 'width and height of ' + dimForm.value.eclWidth + ' and ' + dimForm.value.eclHeight;
      this.area = PIE * (dimForm.value.eclWidth) * (dimForm.value.eclHeight);
    }

    this.showShapes = this.showDimensions = false;
    this.showArea = true;
  }

  startOver() {
    this.showShapes = true;
    this.showDimensions = this.showArea = false;
  }
}
