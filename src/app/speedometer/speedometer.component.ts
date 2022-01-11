import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-speedometer",
  templateUrl: "./speedometer.component.html",
  styleUrls: ["./speedometer.component.css"],
})
export class SpeedometerComponent {
  position = 0;

  constructor() {}

  add(amount: number) {
    this.position = this.normalizePosition(this.position + amount);
  }

  handleInputPosition(e: any) {
    this.position = this.normalizePosition(parseInt(e.target.value));
  }

  /**
   * La rotation de l'aiguille doit être comprise entre 0 et 360
   */
  private normalizePosition(position: number) {
    if (position > 359 || position < 0) {
      return 0;
    }
    return position;
  }
}
