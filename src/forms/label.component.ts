import { Component, Input, AfterContentInit, ElementRef } from "@angular/core";


/**
 * ```html
 * <n-label labelState="success">
 * 	<label label>Field with success</label>
 * 	<input type="text" class="input-field">
 * </n-label>
 *
 * <n-label labelState="warning">
 * 	<label label>Field with warning</label>
 * 	<input type="text" class="input-field">
 * </n-label>
 *
 * <n-label labelState="error">
 * 	<label label>Field with error</label>
 * 	<input type="text" class="input-field">
 * </n-label>
 * ```
 *
 * @export
 * @class LabelComponent
 * @implements {AfterContentInit}
 */
@Component({
	selector: "n-label",
	// tslint:disable:max-line-length
	template: `
	<label [for]="labelInputID" [ngClass]= "labelState ? 'valid--'+labelState : null">
		<n-static-icon *ngIf="labelState === 'success'" icon="success" size="sm"></n-static-icon>
		<n-static-icon *ngIf="labelState === 'warning'" icon="success" size="sm"></n-static-icon>
		<n-static-icon *ngIf="labelState === 'error'" icon="success" size="sm"></n-static-icon>
		<ng-content></ng-content>
	</label>
	<ng-content select="input,textarea,div" ></ng-content>`
	// tslint:enable:max-line-length
})
export class LabelComponent implements AfterContentInit {
	/**
	 * Used to build the id of the input item associated with the `LabelComponent`.
	 * @static
	 * @memberof LabelComponent
	 */
	static labelCounter = 0;
	/**
	 * The id of the input item associated with the `LabelComponent`. This value is also used to associate the `LabelComponent` with
	 * its input counterpart through the 'for' attribute.
	 * @memberof LabelComponent
	 */
	labelInputID = "n-label-" + LabelComponent.labelCounter;

	/**
	 * State of the `LabelComponent` will determine the styles applied.
	 * @type {("success" | "warning" | "error" | "")}
	 * @memberof LabelComponent
	 */
	@Input() labelState: "success" | "warning" | "error" | "" = "";

	/**
	 * Creates an instance of LabelComponent.
	 * @param {ElementRef} elementRef
	 * @memberof LabelComponent
	 */
	constructor(private elementRef: ElementRef) {
		LabelComponent.labelCounter++;
	}

	/**
	 * Sets the id on the input item associated with the `LabelComponent`.
	 * @memberof LabelComponent
	 */
	ngAfterContentInit() {
		this.elementRef.nativeElement.querySelector("input,textarea,div").setAttribute("id", this.labelInputID);
	}
}
