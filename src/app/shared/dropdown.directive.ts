import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from "@angular/core";

@Directive({
  selector: "[appDropdown]",
})
export class DropdownDirective {
  @HostBinding("class.open") IsOpen = false;
  @HostListener("document:click", ["$event"]) toggleOpen(event: Event) {
    this.IsOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.IsOpen
      : false;
  }

  constructor(private elRef: ElementRef) {}
}
