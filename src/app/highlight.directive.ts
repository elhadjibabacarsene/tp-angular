import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string;
  // Couleur par defaut
  private defaultColor = '';
  // On construit l'effet de base
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'border-color', this.defaultColor);
  }
  // On change la couleur si la souris est sur le cadre
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'border-color', this.highlightColor);
  }
  // On remet la couleur par defaut si la souris quitte le cadre
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'border-color', this.defaultColor);
  }

}
