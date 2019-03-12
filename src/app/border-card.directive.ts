	import { Directive, ElementRef, HostListener, Input } from '@angular/core';

	@Directive({
		selector: '[pkmnBorderCard]'
	})
	export class BorderCardDirective {
		constructor(private el: ElementRef) {
			this.setBorder('#f5f5f5');
			this.setHeight(180);
		}

	@HostListener('mouseenter') onMouseEnter(){
		this.setBorder(this.borderColor || '#009688')
	}
	@HostListener('mouseleave') onMouseleave(){
		this.setBorder('#f5f5f5')
	}

	@Input('pkmnBorderCard') borderColor:string; //alias
//	@Input() pkmnBorderCard:string: // sans alias

		private setBorder(color: string) {
			let border = 'solid 4px ' + color;
			this.el.nativeElement.style.border = border;
		}

		private setHeight(height: number) {
			this.el.nativeElement.style.height = height + 'px';
		}
	}
